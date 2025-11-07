"use client";

import PhotoGallery from "../components/PhotoGallery";

export default function PhotosPage() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center py-16 px-4 sm:items-start">
        <PhotoGallery />
      </main>
    </div>
  );
}

