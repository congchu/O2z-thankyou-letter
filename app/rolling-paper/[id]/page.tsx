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

  // noteMap에서 데이터 가져오기
  const notes = useMemo(() => {
    return noteMap[id] || [];
  }, [id]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-50 to-blue-50 py-6 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start mb-6 sm:mb-8">
          <button
            onClick={() => router.back()}
            className="mb-4 px-3 py-2 sm:px-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors text-sm sm:text-base w-fit"
            style={{ fontFamily: "SchoolSafeOuting, sans-serif" }}
          >
            ←
          </button>
          <h1
            className="fancy-title text-3xl sm:text-3xl md:text-4xl font-bold mb-2 w-full text-center"
            style={{ fontFamily: "SchoolSafeOuting, sans-serif" }}
          >
            {nameMap[id]?.title || "롤링페이퍼"}
          </h1>
          {/* <p className="text-sm sm:text-base text-gray-600">여러분이 남긴 따뜻한 메시지들</p> */}
        </div>

        {/* Grid 레이아웃 - 모든 화면 크기 */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          style={{ fontFamily: "SchoolSafeOuting, sans-serif" }}
        >
          {notes.map((note) => (
            <div
              key={note.id}
              className="note-item"
              style={{
                transform: `rotate(${note.rotation}deg)`,
                backgroundColor: note.color,
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
              <p className="text-sm sm:text-base leading-relaxed mb-3">{note.message}</p>
              <p
                className="text-xs sm:text-sm font-semibold text-gray-500 text-right"
                style={{ fontFamily: "SchoolSafeOuting, sans-serif" }}
              >
                - {note.sender}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
