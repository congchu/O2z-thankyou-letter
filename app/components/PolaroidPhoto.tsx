"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface PolaroidPhotoProps {
  src: string;
  name: string;
  rotation: number;
  index: number;
  id: string;
}

export default function PolaroidPhoto({ src, name, rotation, index, id }: PolaroidPhotoProps) {
  const router = useRouter();

  const handleClick = () => {
    // queryParams로 이름을 포함하여 라우팅
    router.push(`/rolling-paper/${id}?name=${encodeURIComponent(name)}`);
  };

  return (
    <div
      className="polaroid-photo animate-fade-in cursor-pointer"
      style={{
        animationDelay: `${index * 0.1}s`,
        transform: `rotate(${rotation}deg)`,
      }}
      onClick={handleClick}
    >
      <div className="bg-white p-4 shadow-lg">
        <Image
          src={src}
          alt={name}
          width={300}
          height={300}
          className="w-full h-auto object-cover"
          priority
          loading="eager"
        />

        <p
          className="text-center text-sm text-gray-700 mt-2 font-title"
          style={{ fontFamily: "SchoolSafeOuting, sans-serif" }}
        >
          {name}
        </p>
      </div>
    </div>
  );
}
