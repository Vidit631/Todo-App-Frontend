"use client";

import ConfirmationDialog from "@/components/ConfirmationDialog";
import TaskForm from "@/components/TaskForm";
import BackArrow from "@/public/icons/BackArrow";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatePage() {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);

  const createTask = async (title: string, color: string) => {
    await fetch("http://localhost:4000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, color }),
    });
    router.push("/");
  };

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
        submitLabel="Add"
        onSubmit={createTask}
        onCancel={() => router.push("/")}
      />
    </div>
  );
}