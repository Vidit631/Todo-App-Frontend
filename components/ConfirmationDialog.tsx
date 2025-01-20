import React from 'react';
import ReactDOM from 'react-dom';

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: (event: React.MouseEvent) => void;
  onConfirm: (event: React.MouseEvent) => void;
  message: string;
}

export default function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  message,
}: ConfirmationDialogProps) {
  if (!isOpen) return null;

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div onClick={stopPropagation} className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#292929] p-4 rounded-lg shadow-lg border-2 border-[#595858]">
        <p className="text-white mb-4">{message}</p>
        <div className="flex justify-end">
          <button onClick={(e) => { onClose(e); e.stopPropagation(); }} className="mr-2 bg-[#363535] hover:bg-[#595858] text-white font-bold py-2 px-4 rounded border-[#595858]">
            No
          </button>
          <button onClick={(e) => { onConfirm(e); e.stopPropagation(); }} className="bg-[#1E6F9F] hover:bg-[#165a7d] text-white font-bold py-2 px-4 rounded">
            Yes
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}