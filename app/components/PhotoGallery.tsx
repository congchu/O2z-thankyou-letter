"use client";

import PolaroidPhoto from "./PolaroidPhoto";

export default function PhotoGallery() {
  //   1. 윤슬
  // 2. 켄
  // 3. 고요
  // 4. 쥬스

  // ---

  // 3. 캐롤
  // 4. 듀듀
  // 5. 유광
  // 6. 노래
  // 7. 벨라
  // . 젠
  // 7. 민트초코
  // 8. 쏘냐
  // 9. 오소리
  // 10. 겨울곰
  const teachers = [
    { id: "yunsul", src: "/images/photos/1_윤슬쌤.gif", name: "윤슬쌤" },
    { id: "ken", src: "/images/photos/2_켄쌤.gif", name: "켄쌤" },
    { id: "goyo", src: "/images/photos/3_고요쌤.gif", name: "고요쌤" },
    { id: "juice", src: "/images/photos/4_쥬스쌤.gif", name: "쥬스쌤" },
  ];

  const doms = [
    { id: "carol", src: "/images/photos/1_캐롤돔.gif", name: "캐롤돔" },
    { id: "dudu", src: "/images/photos/2_듀듀돔.gif", name: "듀듀돔" },
    { id: "yugwang", src: "/images/photos/3_유광돔.gif", name: "유광돔" },
    { id: "norae", src: "/images/photos/4_노래돔.gif", name: "노래돔" },
    { id: "bella", src: "/images/photos/5_벨라돔.gif", name: "벨라돔" },
    { id: "jen", src: "/images/photos/6_젠돔_.gif", name: "젠돔" },
    { id: "mincho", src: "/images/photos/7_민초돔.gif", name: "민트초코돔" },
    { id: "sonya", src: "/images/photos/8_쏘냐돔.gif", name: "쏘냐돔" },
    { id: "osori", src: "/images/photos/9_오소리돔.gif", name: "오소리돔" },
    { id: "winterbear", src: "/images/photos/10_겨울곰돔_.gif", name: "겨울곰돔" },
  ];

  const rotations = [-8, 6, -5, 9]; // 각 사진마다 다른 회전 각도 (-10도 ~ +10도)
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold">우리의 리듬을 바꾼 네가지 컬러</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-items-center py-12">
        {teachers.map((photo, index) => (
          <PolaroidPhoto
            key={index}
            id={photo.id}
            src={photo.src}
            name={photo.name}
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
              name={photo.name}
              rotation={rotations[index % rotations.length]}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
