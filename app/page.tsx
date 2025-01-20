"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TaskCard from "../components/TaskCard";
import PlusIcon from "@/public/icons/PlusIcon";
import FileIcon from "@/public/icons/FileIcon";

interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const setAndSortTasks = (tasks: Task[]) => {
    setTasks(tasks.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1)));
  };

  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:4000/tasks");
      const data = await res.json();
      setAndSortTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
    setLoading(false);
  };

  const deleteTask = async (id: number) => {
    try {
      await fetch(`http://localhost:4000/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const toggleCompletion = async (id: number, completed: boolean) => {
    const taskToUpdate = tasks.find((t) => t.id === id);
    if (!taskToUpdate) return;

    try {
      await fetch(`http://localhost:4000/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...taskToUpdate, completed }),
      });
      setAndSortTasks(
        tasks.map((task) => task.id === id ? { ...task, completed } : task)
      );
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;

  return (
    <main className="flex flex-col items-center">
      <Link
        href="/create"
        className="w-full bg-[#1E6F9F] text-white py-4 rounded-md flex items-center justify-center mb-4 hover:bg-[#165a7d] transition-colors my-1"
      >
        <span className="mr-2">Create Task</span>
        <PlusIcon />
      </Link>

      <div className="flex w-full justify-between mb-6 mt-8 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#4EA8DE]">Tasks</span>
          <span className="bg-[#383838] text-white rounded-full px-2 py-1">
            {totalTasks}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#8284FA]">Completed</span>
          <span className="bg-[#383838] text-white rounded-full px-2 py-1">
            {totalTasks > 0 ? `${completedTasks} of ${totalTasks}` : '0'}
          </span>
        </div>
      </div>

      {loading && <p className="text-sm text-gray-500">
        Loading...
      </p>}

      {!loading && (tasks.length === 0 ? (
        <div className="flex flex-col items-center text-gray-500 mt-8">
          <FileIcon className="w-16 h-16 mb-2" />
          <p className="font-semibold text-sm my-4">You don&apos;t have any tasks registered yet</p>
          <p className="text-sm">
            Create tasks and organize your to-do items
          </p>
        </div>
      ) : (
        <div className="w-full space-y-2 overflow-y-auto" style={{ maxHeight: '60vh', marginBottom: '20px' }}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              color={task.color}
              completed={task.completed}
              onDelete={deleteTask}
              onToggleComplete={toggleCompletion}
            />
          ))}
        </div>
      ))}

    </main>
  );
}
