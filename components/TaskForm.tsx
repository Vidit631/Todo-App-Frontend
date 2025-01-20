"use client";

import PlusIcon from "@/public/icons/PlusIcon";
import TickIcon from "@/public/icons/TickIcon";
import { FormEvent, useState } from "react";

interface TaskFormProps {
    existingTitle?: string;
    existingColor?: string;
    submitLabel: "Add" | "Save";
    onSubmit: (title: string, color: string) => Promise<void>;
    onCancel: () => void;
}

const colors = ["#FF3B30", "#FF9500", "#FFCC00", "#34C759", "#007AFF", "#5856D6", "#AF52DE", "#FF2D55", "#A2845E"];

export default function TaskForm({
    existingTitle = "",
    existingColor = "#4EA8DE",
    submitLabel,
    onSubmit,
}: TaskFormProps) {
    const [title, setTitle] = useState(existingTitle);
    const [color, setColor] = useState(existingColor);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!title.trim()) {
            alert("Title is required.");
            return;
        }
        await onSubmit(title, color);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full mt-6">

            <div className="flex flex-col">
                <label className="font-semibold mb-1 text-[#4EA8DE]">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border border-gray-300 rounded-md p-4 w-full bg-[#383838] text-white"
                    placeholder="Task title"
                    required
                />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold mb-1 text-[#4EA8DE]">Color</label>
                <div className="flex items-center gap-4 flex-wrap">
                    {colors.map((c) => (
                        <button
                            type="button"
                            key={c}
                            className={`w-12 h-12 rounded-full border-2 transition-transform aspect-square ${color === c ? "scale-110 border-white" : "border-transparent"}`}
                            style={{ backgroundColor: c }}
                            onClick={() => setColor(c)}
                        />
                    ))}
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-[#1E6F9F] text-white py-4 rounded-md flex items-center justify-center mb-4 hover:bg-[#165a7d] transition-colors"
            >
                {submitLabel === "Add" ? (
                    <>
                        <span className="mr-2">Add Task</span>
                        <PlusIcon />
                    </>
                ) : (
                    <>
                        <span className="mr-2">Save</span>
                        <TickIcon className="w-5 h-5" color="white" />
                    </>
                )}
            </button>
        </form>
    );
}