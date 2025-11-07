"use client";

import { useState } from "react";
import PhotoGallery from "./components/PhotoGallery";
import Image from "next/image";

export default function Home() {
  const [showPhotos, setShowPhotos] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className={showPhotos ? "hidden" : "flex flex-col items-center justify-between "}>
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              우리의 리듬을 바꾼 네가지 컬러, 그리고 열한빛깔 무재개
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Looking for a starting point or more instructions? Head over to{" "}
              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium text-zinc-950 dark:text-zinc-50"
              >
                Templates
              </a>{" "}
              or the{" "}
              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium text-zinc-950 dark:text-zinc-50"
              >
                Learning
              </a>{" "}
              center.
            </p>
          </div>

          <Image
            src="/images/train.png"
            alt="기차"
            width={500}
            height={500}
            className="w-full train-sway"
          />
          <button
            onClick={() => setShowPhotos(true)}
            className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          >
            다음으로
          </button>
        </div>
        <div className={showPhotos ? "w-full" : "hidden"}>
          <PhotoGallery />
        </div>
      </main>
    </div>
  );
}
