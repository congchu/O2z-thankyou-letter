"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between md:py-32 py-16 md:px-16 px-4 sm:items-start text-center">
        <div className="flex flex-col items-center justify-between w-full">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1
              className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 whitespace-pre-line "
              style={{ fontFamily: "SchoolSafeOuting, sans-serif" }}
            >
              {`뽀글뽀글 자라는🫧 
              102기에서 왔습니다 💛`}
            </h1>
            <p
              className="max-w-md text-lg  text-zinc-600 dark:text-zinc-400 whitespace-pre-line leading-6 "
              style={{ fontFamily: "SchoolSafeOuting, sans-serif" }}
            >
              {`우리에게 스윙을 알려주고, 
              연습을 포기하지 않게 도와주신 쌤과 
              돔들께 마음을 모아 전합니다. 
              오늘도 우리가 춤출 수 있는 건 여러분 덕분이에요💚`}
            </p>
          </div>

          <Image
            onClick={() => router.push("/photos")}
            src="/images/train.png"
            alt="기차"
            width={320}
            height={320}
            className="train-sway cursor-pointer"
          />
        </div>
      </main>
    </div>
  );
}
