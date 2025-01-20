"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import TaskForm from "@/components/TaskForm";
import BackArrow from "@/public/icons/BackArrow";
import ConfirmationDialog from "@/components/ConfirmationDialog";

interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
}

export default function EditTaskPage() {
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await fetch("http://localhost:4000/tasks");
        const data: Task[] = await res.json();
        const singleTask = data.find((t) => t.id === Number(params.id));
        if (singleTask) {
          setTask(singleTask);
        }
      } catch (error) {
        console.error("Failed to fetch task:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) fetchTask();
  }, [params.id]);

  const updateTask = async (title: string, color: string) => {
    if (!task) return;
    await fetch(`http://localhost:4000/tasks/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...task, title, color }),
    });
    router.push("/");
  };

  if (loading) return <p>Loading...</p>;
  if (!task) return <p>Task not found</p>;

  return (
    <div className="flex flex-col mt-12 pt-12">
      <button
        onClick={() => setShowConfirm(true)}
      >
        <BackArrow className="w-8 h-6 mr-1 my-4" color="white"/>
      </button>
      <ConfirmationDialog
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={() => router.push('/')}
        message="Do you want to discard changes and go back?"
      />
      <TaskForm
        existingTitle={task.title}
        existingColor={task.color}
        submitLabel="Save"
        onSubmit={updateTask}
        onCancel={() => router.push("/")}
      />
    </div>
  );
}