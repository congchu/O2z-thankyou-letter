"use client";

import PhotoGallery from "../components/PhotoGallery";
import { useRouter } from "next/navigation";

export default function PhotosPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen  py-6 sm:py-12 px-4">
      {/* 뒤로가기 */}
      <button
        onClick={() => router.back()}
        className="mb-4 px-3 py-2 sm:px-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors text-sm  w-fit flex justify-start"
        style={{ fontFamily: "SchoolSafeOuting, sans-serif" }}
      >
        ←
      </button>
      <div
        className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="flex min-h-screen w-full max-w-6xl flex-col items-center md:py-16 py-8 px-4">
          <PhotoGallery />
        </main>
      </div>
    </div>
  );
}
