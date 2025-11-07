"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black mx-auto"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between md:py-32 py-16 md:px-16 px-4 sm:items-start text-center">
        <div className="flex flex-col items-center justify-between w-full">
          <div className="flex flex-col items-center gap-6 text-center ">
            <h1
              className="text-4xl font-semibold tracking-tight text-gray-700 dark:text-zinc-50 whitespace-pre-line "
              style={{ fontFamily: "SchoolSafeOuting, sans-serif" }}
            >
              🫧뽀글뽀글 자라난 102기, <br />
              이제는 <span className="text-blue-500">스윙</span>이라는
              <br />
              <span className="text-green-500">리듬</span> 위에 섰습니다. 💛
            </h1>
            <p
              className="max-w-md text-lg  text-zinc-00  whitespace-pre-line leading-6 pb-10 "
              style={{ fontFamily: "SchoolSafeOuting, sans-serif" }}
            >
              우리에게 스윙을 알려주고,
              <br />
              연습을 포기하지 않게 도와주신 <span className="text-yellow-500">쌤들</span>과
              <br />
              <span className="text-purple-500">돔들</span>께 마음을 모아 전합니다.
              <br />
              오늘도 우리가 춤출 수 있는 건 여러분 덕분이에요💚
            </p>
          </div>

          <Image
            onClick={() => router.push("/photos")}
            src="/images/102.png"
            alt="기차"
            width={320}
            height={320}
            className="train-sway cursor-pointer w-full max-w-[480px] mx-auto border-1 shadow-sm rounded-lg border-gray-600"
          />
        </div>
      </main>
    </div>
  );
}
