"use client";

import { Note } from "../data/messages";

interface NoteItemProps {
  note: Note;
  index: number;
}

export default function NoteItem({ note, index }: NoteItemProps) {
  const noteColors = ["#FFFDEA", "#DFF4FF", "#EDE7FF", "#E9FFF5", "#f3f3f3", "#FFE8C2", "#FFD9E8"];
  const bgColor = noteColors[(index + 1) % noteColors.length];

  return (
    <div
      className="note-item text-gray-800 text-left whitespace-pre-line"
      style={{
        transform: `rotate(${note.rotation}deg)`,
        backgroundColor: bgColor,
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `rotate(0deg) scale(1.02)`;
        e.currentTarget.style.zIndex = "10";
        e.currentTarget.style.boxShadow = "0 8px 12px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${note.rotation}deg) scale(1)`;
        e.currentTarget.style.zIndex = "1";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      }}
    >
      <p className="text-lg leading-5 mb-3">{note.message}</p>
      <p
        className="text-sm sm:text-sm font-semibold text-gray-500 text-right"
        style={{ fontFamily: "OngleipParkDahyeon, sans-serif" }}
      >
        - {note.sender}
      </p>
    </div>
  );
}
