export type ProjectCategory = "kitchens" | "bedrooms" | "wardrobes" | "vanities";

export interface Project {
  id: string;
  title: string;
  titleAm: string;
  titleRu: string;
  category: ProjectCategory;
  categoryAm: string;
  categoryRu: string;
  image: string;
  description?: string;
  descriptionAm?: string;
}

export const projects: Project[] = [
  {
    id: "kitchen-modern-1",
    title: "Modern Kitchen",
    titleAm: "Ժամանակակից խոհանոց",
    titleRu: "Современная кухня",
    category: "kitchens",
    categoryAm: "Խոհանոցներ",
    categoryRu: "Кухни",
    image: "/images/project-1.svg",
  },
  {
    id: "bedroom-classic-1",
    title: "Classic Bedroom Set",
    titleAm: "Դասական ննջասենյակ",
    titleRu: "Классическая спальня",
    category: "bedrooms",
    categoryAm: "Ննջասենյակներ",
    categoryRu: "Спальни",
    image: "/images/project-2.svg",
  },
  {
    id: "wardrobe-walkin-1",
    title: "Walk-in Wardrobe",
    titleAm: "Խոշոր զգեստապահարան",
    titleRu: "Гардеробная комната",
    category: "wardrobes",
    categoryAm: "Զգեստապահարաններ",
    categoryRu: "Шкафы",
    image: "/images/project-3.svg",
  },
  {
    id: "vanity-elegant-1",
    title: "Elegant Vanity Table",
    titleAm: "Նրբագեղ զարդասեղան",
    titleRu: "Туалетный столик",
    category: "vanities",
    categoryAm: "Զարդասեղաններ",
    categoryRu: "Туалетные столики",
    image: "/images/project-4.svg",
  },
  {
    id: "kitchen-contemporary-1",
    title: "Contemporary Kitchen",
    titleAm: "Ժամանակակից խոհանոց",
    titleRu: "Кухня в стиле модерн",
    category: "kitchens",
    categoryAm: "Խոհանոցներ",
    categoryRu: "Кухни",
    image: "/images/project-5.svg",
  },
  {
    id: "wardrobe-custom-1",
    title: "Custom Closet System",
    titleAm: "Անհատական պահարան",
    titleRu: "Встроенный шкаф",
    category: "wardrobes",
    categoryAm: "Զգեստապահարաններ",
    categoryRu: "Шкафы",
    image: "/images/project-6.svg",
  },
];

export const projectCategories: {
  value: ProjectCategory;
  labelEn: string;
  labelAm: string;
  labelRu: string;
}[] = [
  { value: "kitchens", labelEn: "Kitchens", labelAm: "Խոհանոցներ", labelRu: "Кухни" },
  { value: "bedrooms", labelEn: "Bedrooms", labelAm: "Ննջասենյակներ", labelRu: "Спальни" },
  { value: "wardrobes", labelEn: "Wardrobes", labelAm: "Զգեստապահարաններ", labelRu: "Шкафы" },
  { value: "vanities", labelEn: "Vanities", labelAm: "Զարդասեղաններ", labelRu: "Туалетные столики" },
];
