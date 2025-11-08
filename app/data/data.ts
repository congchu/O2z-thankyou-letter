import {
  bella,
  carol,
  dudu,
  goyo,
  gyulgom,
  jen,
  juice,
  ken,
  mincho,
  norae,
  Note,
  osori,
  sonya,
  yugwang,
  yunsul,
} from "./messages";

export const colors = ["#FFE5B4", "#E6E6FA", "#FFB6C1", "#B0E0E6", "#F0E68C", "#DDA0DD"];

export const rotations = [-2, 3, -1.5, 2.5, -3];

export const positions: { x: number; y: number }[] = [
  { x: 10, y: 15 },
  { x: 60, y: 20 },
  { x: 30, y: 50 },
  { x: 70, y: 60 },
  { x: 20, y: 70 },
  { x: 80, y: 30 },
];

export const teachers = [
  {
    id: "yunsul",
    src: "/images/photos/1_윤슬쌤.gif",
    name: "윤슬쌤",
    title: "에너지와 다정함이 공존하는 스윙의 햇살, 윤슬쌤🌞",
  },
  {
    id: "ken",
    src: "/images/photos/2_켄쌤.gif",
    name: "켄쌤",
    title: "불꽃처럼 열정적인 스윙의 아버지, 켄쌤 🔥",
  },
  {
    id: "goyo",
    src: "/images/photos/3_고요쌤.gif",
    name: "고요쌤",
    title: "차분함 속의 우아함, 스윙판의 백조 고요쌤 🕊️",
  },
  {
    id: "juice",
    src: "/images/photos/4_쥬스쌤.gif",
    name: "쥬스쌤❤️",
    title: "유머와 다정함이 섞인 스윙의 비타민, 쥬스쌤 🥤🍊",
  },
];

export const doms = [
  {
    id: "carol",
    src: "/images/photos/1_캐롤돔.gif",
    name: "캐롤돔",
    title: "캐롤돔",
  },
  {
    id: "dudu",
    src: "/images/photos/2_듀듀돔.gif",
    name: "듀듀돔",
    title: "듀듀돔      ",
  },
  {
    id: "yugwang",
    src: "/images/photos/3_유광돔.jpg",
    name: "유광돔",
    title: "유광돔",
  },
  {
    id: "norae",
    src: "/images/photos/4_노래돔.gif",
    name: "노래돔",
    title: "노래돔",
  },
  {
    id: "bella",
    src: "/images/photos/5_벨라돔.gif",
    name: "벨라돔",
    title: "벨라돔",
  },
  { id: "jen", src: "/images/photos/6_젠돔_.gif", name: "젠돔", title: "뽀글즈의 태양, 윤슬쌤 ☀️" },
  {
    id: "mincho",
    src: "/images/photos/7_민초돔.gif",
    name: "민초돔",
    title: "민초돔",
  },
  {
    id: "sonya",
    src: "/images/photos/8_쏘냐돔.jpg",
    name: "쏘냐돔",
    title: "쏘냐돔",
  },
  {
    id: "osori",
    src: "/images/photos/9_오소리돔.gif",
    name: "오소리돔",
    title: "오소리돔",
  },
  {
    id: "winterbear",
    src: "/images/photos/10_겨울곰돔_.gif",
    name: "결곰돔",
    title: "결곰돔",
  },
];

// teachers와 doms에서 nameMap 생성
export const nameMap: { [key: string]: { name: string; title: string } } = Object.fromEntries(
  [...teachers, ...doms].map((item) => [
    item.id,
    { name: item.name.replace(/[💛💙💚❤️]/g, "").trim(), title: item.title },
  ])
);

export const noteMap: { [key: string]: Note[] } = {
  yunsul: yunsul,
  ken: ken,
  goyo: goyo,
  juice: juice,
  carol: carol,
  dudu: dudu,
  yugwang: yugwang,
  norae: norae,
  bella: bella,
  jen: jen,
  mincho: mincho,
  sonya: sonya,
  osori: osori,
  winterbear: gyulgom, // doms 배열에서 id가 "winterbear"이므로
};

// 이름으로 id를 찾기 위한 역방향 맵 (원본 name과 정리된 name 모두 포함)
export const reverseNameMap: { [key: string]: string } = Object.fromEntries(
  [...teachers, ...doms].flatMap((item) => [
    [item.name, item.id], // 원본 name (이모지 포함)
    [item.name.replace(/[💛💙💚❤️]/g, "").trim(), item.id], // 정리된 name (이모지 제거)
  ])
);
