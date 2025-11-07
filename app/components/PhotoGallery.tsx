"use client";

import { doms, teachers } from "../data/data";
import PolaroidPhoto from "./PolaroidPhoto";

export default function PhotoGallery() {
  const rotations = [-8, 6, -5, 9]; // 각 사진마다 다른 회전 각도 (-10도 ~ +10도)
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold" style={{ fontFamily: "SchoolSafeOuting, sans-serif" }}>
        우리의 리듬을 바꾼 네가지 컬러💛💙💚❤️
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-items-center py-12">
        {teachers.map((photo, index) => (
          <PolaroidPhoto
            key={index}
            id={photo.id}
            src={photo.src}
            name={photo.title}
            rotation={rotations[index]}
            index={index}
          />
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-bold">열한빛깔 무지개 돔즈</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-items-center py-12">
          {doms.map((photo, index) => (
            <PolaroidPhoto
              key={index}
              id={photo.id}
              src={photo.src}
              name={photo.title}
              rotation={rotations[index % rotations.length]}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
