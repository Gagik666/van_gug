export type FurnitureTypeId = "kitchen" | "wardrobe" | "bedroom" | "vanity";
export type FacadeBrand = "all" | "Egger" | "AGT" | "Kastamonu" | "Kronospan" | "Starwood";
export type DoorStyleId = "smooth" | "fluted" | "vitrine";
export type SizeId = "compact" | "medium" | "large" | "custom";

export interface FacadeCatalogItem {
  id: string;
  brand: Exclude<FacadeBrand, "all">;
  code: string;
  nameAm: string;
  nameRu: string;
  nameEn: string;
  finishAm: string;
  finishRu: string;
  finishEn: string;
  tier: "$" | "$$" | "$$$";
  colorHex: string;
  secondaryHex: string;
  texture: "wood" | "matte" | "gloss";
}

export interface CountertopCatalogItem {
  id: string;
  brand: "Staron" | "Corian" | "HI-MACS" | "Egger";
  code: string;
  nameAm: string;
  nameRu: string;
  nameEn: string;
  colorHex: string;
  veinHex: string;
  isDark?: boolean;
}

export interface HardwareCatalogItem {
  id: string;
  brand: "Blum" | "Samet" | "GTV";
  system: string;
  nameAm: string;
  nameRu: string;
  nameEn: string;
  colorHex: string;
  accentHex: string;
}

export interface StudioPreset {
  id: string;
  nameAm: string;
  nameRu: string;
  nameEn: string;
  facadeId: string;
  countertopId: string;
  hardwareId: string;
  doorStyle: DoorStyleId;
  ledOn: boolean;
}

export const FACADE_CATALOG: FacadeCatalogItem[] = [
  {
    id: "egger-bolivar",
    brand: "Egger",
    code: "H3787 ST19",
    nameAm: "Շագանակագույն Բոլիվար ընկուզենի",
    nameRu: "Коричневый орех Боливар",
    nameEn: "Brown Bolivar Walnut",
    finishAm: "Ավստրիա • Փայտե ռելիեֆ",
    finishRu: "Австрия • Текстура дерева",
    finishEn: "Austria • Deepskin Wood",
    tier: "$$$",
    colorHex: "#543524",
    secondaryHex: "#3b2316",
    texture: "wood",
  },
  {
    id: "egger-casella",
    brand: "Egger",
    code: "H1388 ST40",
    nameAm: "Ավազագույն Կասելլա կաղնի",
    nameRu: "Песочный дуб Каселла",
    nameEn: "Sand Casella Oak",
    finishAm: "Ավստրիա • Feelwood սինխրոն",
    finishRu: "Австрия • Feelwood синхро-пора",
    finishEn: "Austria • Feelwood Sync",
    tier: "$$$",
    colorHex: "#b79268",
    secondaryHex: "#9b764e",
    texture: "wood",
  },
  {
    id: "egger-cashmere",
    brand: "Egger",
    code: "U220 ST9",
    nameAm: "Նուրբ քաշմիր",
    nameRu: "Мягкий кашемир",
    nameEn: "Soft Beige Cashmere",
    finishAm: "Ավստրիա • Թավշյա փայլատ",
    finishRu: "Австрия • Бархатный мат",
    finishEn: "Austria • Smoothtouch Matt",
    tier: "$$",
    colorHex: "#d6cbc0",
    secondaryHex: "#c2b5a8",
    texture: "matte",
  },
  {
    id: "egger-stone-green",
    brand: "Egger",
    code: "U665 ST9",
    nameAm: "Քարե կանաչ (Sage)",
    nameRu: "Шалфейный зелёный",
    nameEn: "Stone Green Sage",
    finishAm: "Ավստրիա • Փայլատ ՄԴՖ/ԼԴՍՊ",
    finishRu: "Австрия • Матовый",
    finishEn: "Austria • Velvet Matt",
    tier: "$$",
    colorHex: "#6f7d6e",
    secondaryHex: "#586657",
    texture: "matte",
  },
  {
    id: "agt-supramat-graphite",
    brand: "AGT",
    code: "Supramat 3018",
    nameAm: "Անտի-մատնահետք գրաֆիտ",
    nameRu: "Супрамат Графит (антипальцы)",
    nameEn: "Supramat Anti-Fingerprint Graphite",
    finishAm: "ՄԴՖ • Մետաքսյա փայլատ",
    finishRu: "МДФ • Шёлковый мат",
    finishEn: "MDF • Silk-Touch Matte",
    tier: "$$",
    colorHex: "#2c2d30",
    secondaryHex: "#1c1d1f",
    texture: "matte",
  },
  {
    id: "agt-evogloss-ivory",
    brand: "AGT",
    code: "EvoGloss 601",
    nameAm: "Փղոսկր հայելային փայլ",
    nameRu: "Слоновая кость (EvoGloss)",
    nameEn: "Ivory EvoGloss",
    finishAm: "ՄԴՖ • Բարձր փայլ",
    finishRu: "МДФ • Высокий глянец",
    finishEn: "MDF • High Gloss",
    tier: "$$",
    colorHex: "#f3ede2",
    secondaryHex: "#e3d9c8",
    texture: "gloss",
  },
  {
    id: "kastamonu-oak",
    brand: "Kastamonu",
    code: "A431 PS19",
    nameAm: "Տաք ոսկեգույն կաղնի",
    nameRu: "Тёплый дуб Кастамону",
    nameEn: "Warm Golden Oak",
    finishAm: "ԼԴՍՊ • Հասանելի տարբերակ",
    finishRu: "ЛДСП • Оптимальный выбор",
    finishEn: "MFC • Value Choice",
    tier: "$",
    colorHex: "#a87e53",
    secondaryHex: "#8d663e",
    texture: "wood",
  },
  {
    id: "kastamonu-anthracite",
    brand: "Kastamonu",
    code: "A821 Matte",
    nameAm: "Մուգ անտրացիտ",
    nameRu: "Тёмный антрацит",
    nameEn: "Dark Anthracite",
    finishAm: "ԼԴՍՊ/ՄԴՖ • Հարթ փայլատ",
    finishRu: "ЛДСП/МДФ • Гладкий мат",
    finishEn: "MFC/MDF • Smooth Matt",
    tier: "$",
    colorHex: "#3e4044",
    secondaryHex: "#2d2f33",
    texture: "matte",
  },
  {
    id: "kronospan-porcelain",
    brand: "Kronospan",
    code: "8681 PW",
    nameAm: "Ճենապակյա սպիտակ",
    nameRu: "Фарфоровый белый",
    nameEn: "Porcelain White",
    finishAm: "ԼԴՍՊ • Հարթ փայլատ",
    finishRu: "ЛДСП • Гладкий мат",
    finishEn: "MFC • Smooth Matt",
    tier: "$",
    colorHex: "#eeebe4",
    secondaryHex: "#dcd6cc",
    texture: "matte",
  },
  {
    id: "starwood-walnut",
    brand: "Starwood",
    code: "SW-312",
    nameAm: "Դասական ընկուզենի",
    nameRu: "Классический орех Starwood",
    nameEn: "Classic Walnut",
    finishAm: "ԼԴՍՊ • Փայտե հյուսվածք",
    finishRu: "ЛДСП • Древесная фактура",
    finishEn: "MFC • Wood Texture",
    tier: "$",
    colorHex: "#6d4831",
    secondaryHex: "#513320",
    texture: "wood",
  },
];

export const COUNTERTOP_CATALOG: CountertopCatalogItem[] = [
  {
    id: "staron-supreme",
    brand: "Staron",
    code: "Supreme Delphi",
    nameAm: "Staron ակրիլային քար (անկար)",
    nameRu: "Акриловый камень Staron (без швов)",
    nameEn: "Staron Acrylic Stone (Seamless)",
    colorHex: "#f4f1ea",
    veinHex: "#c9b38c",
  },
  {
    id: "corian-noir",
    brand: "Corian",
    code: "Deep Nocturne",
    nameAm: "DuPont Corian սև մարմար",
    nameRu: "DuPont Corian чёрный мрамор",
    nameEn: "DuPont Corian Dark Vein",
    colorHex: "#1c1c1e",
    veinHex: "#d6c3a1",
    isDark: true,
  },
  {
    id: "himacs-quartz",
    brand: "HI-MACS",
    code: "Aurora White",
    nameAm: "LG HI-MACS կվարց/ակրիլ",
    nameRu: "LG HI-MACS белый кварц",
    nameEn: "LG HI-MACS Aurora White",
    colorHex: "#ebe8e2",
    veinHex: "#b8b3aa",
  },
  {
    id: "egger-pietra",
    brand: "Egger",
    code: "F206 Pietra Grigia",
    nameAm: "Egger լամինացված սեղանածածկ",
    nameRu: "Столешница Egger Pietra Grigia",
    nameEn: "Egger Pietra Grigia Worktop",
    colorHex: "#63625e",
    veinHex: "#9b9993",
    isDark: true,
  },
];

export const HARDWARE_CATALOG: HardwareCatalogItem[] = [
  {
    id: "blum-brass",
    brand: "Blum",
    system: "LEGRABOX + BLUMOTION (Պրեմիում)",
    nameAm: "Ավստրիա • Անփայլ լատուն",
    nameRu: "Австрия • Матовая латунь (Премиум)",
    nameEn: "Austria • Brushed Brass (Premium)",
    colorHex: "#c9a86a",
    accentHex: "#9b7b3e",
  },
  {
    id: "samet-black",
    brand: "Samet",
    system: "Master Soft-Close (Ստանդարտ+)",
    nameAm: "Սև փայլատ Gola պրոֆիլ",
    nameRu: "Чёрный матовый профиль Gola",
    nameEn: "Matte Black Gola Profile",
    colorHex: "#202022",
    accentHex: "#0f0f10",
  },
  {
    id: "gtv-steel",
    brand: "GTV",
    system: "ModernSlide Soft-Close (Բյուջե+)",
    nameAm: "Չժանգոտվող պողպատ",
    nameRu: "Матовый хром / Сталь",
    nameEn: "Brushed Steel",
    colorHex: "#c8cbd0",
    accentHex: "#878b92",
  },
];

export const STUDIO_PRESETS: StudioPreset[] = [
  {
    id: "walnut-staron",
    nameAm: "Egger Ընկուզենի + Staron",
    nameRu: "Орех Egger + Staron",
    nameEn: "Egger Walnut + Staron",
    facadeId: "egger-bolivar",
    countertopId: "staron-supreme",
    hardwareId: "blum-brass",
    doorStyle: "fluted",
    ledOn: true,
  },
  {
    id: "cashmere-himacs",
    nameAm: "Քաշմիր + HI-MACS",
    nameRu: "Кашемир + HI-MACS",
    nameEn: "Cashmere + HI-MACS",
    facadeId: "egger-cashmere",
    countertopId: "himacs-quartz",
    hardwareId: "blum-brass",
    doorStyle: "vitrine",
    ledOn: true,
  },
  {
    id: "agt-loft",
    nameAm: "AGT Գրաֆիտ + Corian",
    nameRu: "AGT Графит + Corian",
    nameEn: "AGT Graphite + Corian",
    facadeId: "agt-supramat-graphite",
    countertopId: "corian-noir",
    hardwareId: "samet-black",
    doorStyle: "smooth",
    ledOn: true,
  },
  {
    id: "kastamonu-value",
    nameAm: "Kastamonu Կաղնի + Egger",
    nameRu: "Kastamonu Дуб + Egger",
    nameEn: "Kastamonu Oak + Egger",
    facadeId: "kastamonu-oak",
    countertopId: "egger-pietra",
    hardwareId: "gtv-steel",
    doorStyle: "smooth",
    ledOn: true,
  },
];
