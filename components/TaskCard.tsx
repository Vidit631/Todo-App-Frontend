"use client";

import DeleteIcon from "@/public/icons/DeleteIcon";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ConfirmationDialog from "./ConfirmationDialog";

interface TaskCardProps {
  id: number;
  title: string;
  color: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number, completed: boolean) => void;
}

export default function TaskCard({
  id,
  title,
  color,
  completed,
  onDelete,
  onToggleComplete,
}: TaskCardProps) {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleComplete(id, !completed);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowConfirm(true);
  };

  return (
    <div
      onClick={() => router.push(`/edit/${id}`)}
      className="w-full rounded-md shadow-sm px-4 py-5 flex items-center justify-between cursor-pointer bg-[#363535] border border-[#595858]"
    >
      <div className="flex items-center flex-grow">
        {completed ? (
          <button
            onClick={handleToggle}
            className={`mr-3 flex items-center justify-center w-4 h-4 rounded-full text-white aspect-square`}
            style={{ backgroundColor: color }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          </button>
        ) : (
          <button
            onClick={handleToggle}
            className={`mr-3 flex items-center justify-center w-4 h-4 rounded-full border-2 aspect-square`}
            style={{ borderColor: color }}
          >
          </button>
        )}

        <span className={`${completed ? "line-through text-gray-400" : "text-white"} flex-grow overflow-hidden`}
          style={{ wordBreak: 'break-word' }}>
          {title}
        </span>
      </div>

      <button onClick={handleDelete} className="text-gray-400 hover:text-gray-600 ml-4">
        <DeleteIcon className="w-5 h-5" color="currentColor"/>
      </button>
      <ConfirmationDialog
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={() => onDelete(id)}
        message="Are you sure you want to delete this task?"
      />
    </div>
  );
}
