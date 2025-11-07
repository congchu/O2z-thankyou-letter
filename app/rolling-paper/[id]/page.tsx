"use client";

import { nameMap, noteMap, reverseNameMap } from "@/app/data/data";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import NoteItem from "@/app/components/NoteItem";

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
    <div className="min-h-screen  py-6 sm:py-12 px-4">
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
            className="text-3xl sm:text-3xl md:text-4xl font-bold mb-2 w-full text-center text-gray-700"
            style={{ fontFamily: "SchoolSafeOuting, sans-serif" }}
          >
            {nameMap[id]?.title || "롤링페이퍼"}
          </h1>
          {/* <p className="text-sm sm:text-base text-gray-600">여러분이 남긴 따뜻한 메시지들</p> */}
        </div>

        {/* Grid 레이아웃 - 모든 화면 크기 */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-6"
          style={{ fontFamily: "OngleipParkDahyeon, sans-serif" }}
        >
          {notes.map((note, index) => (
            <NoteItem key={note.id} note={note} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
