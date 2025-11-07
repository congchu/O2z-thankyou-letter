"use client";

import { nameMap, noteMap, reverseNameMap, Note } from "@/app/data/message";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function RollingPaperPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const idFromParams = params.id as string;
  const nameFromQuery = searchParams.get("name");

  // queryParams로 이름이 오면 reverseNameMap에서 id 찾기, 없으면 params.id 사용
  const id = useMemo(() => {
    return nameFromQuery ? reverseNameMap[nameFromQuery] || idFromParams : idFromParams;
  }, [nameFromQuery, idFromParams]);

  const name = nameMap[id] || nameFromQuery || "친구";

  // noteMap에서 데이터 가져오기
  const notes = useMemo(() => {
    return noteMap[id] || [];
  }, [id]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-6 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <button
            onClick={() => router.back()}
            className="mb-4 px-3 py-2 sm:px-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors text-sm sm:text-base"
            style={{ fontFamily: "SchoolSafeOuting, sans-serif" }}
          >
            ← 뒤로가기
          </button>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{name}의 롤링페이퍼</h1>
          <p className="text-sm sm:text-base text-gray-600">여러분이 남긴 따뜻한 메시지들</p>
        </div>

        {/* 모바일: Grid 레이아웃 */}
        <div
          className="grid grid-cols-1 sm:hidden gap-4"
          style={{ fontFamily: "SchoolSafeOuting, sans-serif" }}
        >
          {notes.map((note) => (
            <div
              key={note.id}
              className="note-item-mobile"
              style={{
                transform: `rotate(${note.rotation}deg)`,
                backgroundColor: note.color,
                padding: "16px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `rotate(0deg) scale(1.02)`;
                e.currentTarget.style.boxShadow = "0 8px 12px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${note.rotation}deg) scale(1)`;
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
              }}
            >
              <p
                className="text-sm font-semibold mb-2"
                style={{ fontFamily: "SchoolSafeOuting, sans-serif" }}
              >
                {note.sender}
              </p>
              <p className="text-sm leading-relaxed">{note.message}</p>
            </div>
          ))}
        </div>

        {/* 태블릿/데스크톱: Absolute 레이아웃 */}
        <div className="hidden sm:block relative min-h-[400px] md:min-h-[600px] bg-white rounded-lg shadow-lg p-4 md:p-8">
          {notes.map((note) => (
            <div
              key={note.id}
              className="absolute note-item-desktop"
              style={{
                left: `${note.position.x}%`,
                top: `${note.position.y}%`,
                transform: `rotate(${note.rotation}deg)`,
                backgroundColor: note.color,
                width: "180px",
                padding: "14px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `rotate(0deg) scale(1.05)`;
                e.currentTarget.style.zIndex = "10";
                e.currentTarget.style.boxShadow = "0 8px 12px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${note.rotation}deg) scale(1)`;
                e.currentTarget.style.zIndex = "1";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
              }}
            >
              <p
                className="text-xs md:text-sm font-semibold mb-2"
                style={{ fontFamily: "SchoolSafeOuting, sans-serif" }}
              >
                {note.sender}
              </p>
              <p className="text-xs md:text-sm leading-relaxed">{note.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
