"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/index";
import MaterialPreviewScene from "@/components/home/MaterialPreviewScene";
import {
  COUNTERTOP_CATALOG,
  FACADE_CATALOG,
  HARDWARE_CATALOG,
  STUDIO_PRESETS,
  type DoorStyleId,
  type FacadeBrand,
  type FurnitureTypeId,
  type SizeId,
  type StudioPreset,
} from "@/data/materialsCatalog";

const FURNITURE_TYPES: FurnitureTypeId[] = ["kitchen", "wardrobe", "bedroom", "vanity"];
const SIZES: SizeId[] = ["compact", "medium", "large", "custom"];
const DOOR_STYLES: DoorStyleId[] = ["smooth", "fluted", "vitrine"];
const FACADE_BRANDS: FacadeBrand[] = [
  "all",
  "Egger",
  "AGT",
  "Kastamonu",
  "Kronospan",
  "Starwood",
];
const MATERIAL_BADGES = ["EGGER / AGT", "KASTAMONU", "STARON / CORIAN", "BLUM / SAMET / GTV"];

type StudioTab = "project" | "facades" | "stoneHardware";

export default function Materials() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [activeTab, setActiveTab] = useState<StudioTab>("facades");
  const [furnitureType, setFurnitureType] = useState<FurnitureTypeId>("kitchen");
  const [size, setSize] = useState<SizeId>("medium");
  const [doorStyle, setDoorStyle] = useState<DoorStyleId>("fluted");
  const [brandFilter, setBrandFilter] = useState<FacadeBrand>("all");
  const [facadeId, setFacadeId] = useState<string>(FACADE_CATALOG[0].id);
  const [countertopId, setCountertopId] = useState<string>(COUNTERTOP_CATALOG[0].id);
  const [hardwareId, setHardwareId] = useState<string>(HARDWARE_CATALOG[0].id);
  const [ledOn, setLedOn] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const selectedFacade =
    FACADE_CATALOG.find((item) => item.id === facadeId) ?? FACADE_CATALOG[0];
  const selectedCountertop =
    COUNTERTOP_CATALOG.find((item) => item.id === countertopId) ?? COUNTERTOP_CATALOG[0];
  const selectedHardware =
    HARDWARE_CATALOG.find((item) => item.id === hardwareId) ?? HARDWARE_CATALOG[0];

  const filteredFacades =
    brandFilter === "all"
      ? FACADE_CATALOG
      : FACADE_CATALOG.filter((item) => item.brand === brandFilter);

  const pickLocalized = (am: string, ru: string, en: string) =>
    lang === "am" ? am : lang === "ru" ? ru : en;

  const applyPreset = (preset: StudioPreset) => {
    setFacadeId(preset.facadeId);
    setCountertopId(preset.countertopId);
    setHardwareId(preset.hardwareId);
    setDoorStyle(preset.doorStyle);
    setLedOn(preset.ledOn);
    setBrandFilter("all");
  };

  const facadeDisplay = `${selectedFacade.brand} ${selectedFacade.code} (${pickLocalized(
    selectedFacade.nameAm,
    selectedFacade.nameRu,
    selectedFacade.nameEn
  )})`;
  const countertopDisplay = `${selectedCountertop.brand} ${selectedCountertop.code}`;
  const hardwareDisplay = `${selectedHardware.brand} ${selectedHardware.system} (${pickLocalized(
    selectedHardware.nameAm,
    selectedHardware.nameRu,
    selectedHardware.nameEn
  )})`;

  const comboMessage = t("materials.studio.comboMessage")
    .replace("{type}", t(`materials.studio.types.${furnitureType}`))
    .replace("{size}", t(`materials.studio.sizes.${size}`))
    .replace("{doorStyle}", t(`materials.studio.doorStyles.${doorStyle}`))
    .replace("{facade}", facadeDisplay)
    .replace("{countertop}", countertopDisplay)
    .replace("{hardware}", hardwareDisplay)
    .replace("{led}", ledOn ? "ON" : "OFF");

  const whatsappHref = `https://wa.me/37498881893?text=${encodeURIComponent(comboMessage)}`;
  const telegramHref = `https://t.me/+37498881893`;

  const handleCopySpec = async () => {
    try {
      await navigator.clipboard.writeText(comboMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard API may be blocked in restricted browser contexts
    }
  };

  return (
    <section id="materials" className="py-16 sm:py-20 lg:py-28 bg-[#f5e6d3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a0f0a] mb-4">
            {t("materials.heading")}
          </h2>
          <p className="text-[#1a0f0a]/75 max-w-3xl mx-auto">
            {t("materials.description")}
          </p>
        </div>

        {/* Designer Mood Presets */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1a0f0a]/60 mr-1">
            {t("materials.studio.presetsLabel")}
          </span>
          {STUDIO_PRESETS.map((preset) => {
            const isActive =
              facadeId === preset.facadeId &&
              countertopId === preset.countertopId &&
              hardwareId === preset.hardwareId &&
              doorStyle === preset.doorStyle;

            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-[#1a0f0a] text-[#f5e6d3] border-[#1a0f0a] shadow-md"
                    : "bg-white/80 text-[#1a0f0a] border-[#1a0f0a]/15 hover:border-[#c4a56b]"
                }`}
              >
                {pickLocalized(preset.nameAm, preset.nameRu, preset.nameEn)}
              </button>
            );
          })}
        </div>

        {/* Unified Design & Estimate Studio */}
        <div className="mb-16 p-5 sm:p-8 lg:p-10 rounded-3xl bg-[#1a0f0a] text-[#f5e6d3] shadow-2xl border border-[#c4a56b]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: Realistic Interactive Scene + Quick Controls */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#c4a56b]" />
                  <span className="text-xs uppercase tracking-widest text-[#c4a56b] font-semibold">
                    {t("materials.studio.previewLabel")}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setLedOn(!ledOn)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                    ledOn
                      ? "bg-[#c4a56b]/20 text-[#ffe6ae] border-[#c4a56b]"
                      : "bg-white/5 text-[#d4c5b0] border-white/15"
                  }`}
                >
                  {ledOn ? t("materials.studio.ledOn") : t("materials.studio.ledOff")}
                </button>
              </div>

              {/* Switchable Furniture Type Bar above Preview */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {FURNITURE_TYPES.map((typeKey) => (
                  <button
                    key={typeKey}
                    type="button"
                    onClick={() => setFurnitureType(typeKey)}
                    className={`px-2 py-2 rounded-xl text-xs font-semibold transition-all text-center ${
                      furnitureType === typeKey
                        ? "bg-[#c4a56b] text-[#1a0f0a] shadow"
                        : "bg-white/5 text-[#d4c5b0] hover:bg-white/10"
                    }`}
                  >
                    {t(`materials.studio.types.${typeKey}`)}
                  </button>
                ))}
              </div>

              <MaterialPreviewScene
                furnitureType={furnitureType}
                facade={selectedFacade}
                countertop={selectedCountertop}
                hardware={selectedHardware}
                doorStyle={doorStyle}
                ledOn={ledOn}
              />

              {/* Live Spec Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[#c4a56b] mb-0.5">{t("materials.studio.facadeLabel")}</p>
                  <p className="font-semibold text-[#f5e6d3] truncate">
                    {selectedFacade.brand} {selectedFacade.code}
                  </p>
                  <p className="text-[#d4c5b0]/75 truncate">
                    {pickLocalized(
                      selectedFacade.nameAm,
                      selectedFacade.nameRu,
                      selectedFacade.nameEn
                    )}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[#c4a56b] mb-0.5">{t("materials.studio.countertopLabel")}</p>
                  <p className="font-semibold text-[#f5e6d3] truncate">
                    {selectedCountertop.brand}
                  </p>
                  <p className="text-[#d4c5b0]/75 truncate">{selectedCountertop.code}</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[#c4a56b] mb-0.5">{t("materials.studio.hardwareLabel")}</p>
                  <p className="font-semibold text-[#f5e6d3] truncate">
                    {selectedHardware.brand}
                  </p>
                  <p className="text-[#d4c5b0]/75 truncate">
                    {pickLocalized(
                      selectedHardware.nameAm,
                      selectedHardware.nameRu,
                      selectedHardware.nameEn
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Multifunctional 3-Tab Catalog & Project Estimator */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              {/* Studio Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10">
                {(["project", "facades", "stoneHardware"] as StudioTab[]).map((tabKey) => (
                  <button
                    key={tabKey}
                    type="button"
                    onClick={() => setActiveTab(tabKey)}
                    className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      activeTab === tabKey
                        ? "bg-[#c4a56b] text-[#1a0f0a] shadow"
                        : "text-[#d4c5b0] hover:text-[#f5e6d3]"
                    }`}
                  >
                    {t(`materials.studio.tabs.${tabKey}`)}
                  </button>
                ))}
              </div>

              {/* Tab 1: Type, Size & Door Style */}
              {activeTab === "project" && (
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-[#c4a56b] mb-3">
                      {t("materials.studio.furnitureTypeLabel")}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {FURNITURE_TYPES.map((typeKey) => (
                        <button
                          key={typeKey}
                          type="button"
                          onClick={() => setFurnitureType(typeKey)}
                          className={`p-3.5 rounded-xl border text-left text-sm font-medium transition-all ${
                            furnitureType === typeKey
                              ? "border-[#c4a56b] bg-white/15 text-[#f5e6d3]"
                              : "border-white/10 bg-white/5 text-[#d4c5b0] hover:bg-white/10"
                          }`}
                        >
                          {t(`materials.studio.types.${typeKey}`)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#c4a56b] mb-3">
                      {t("materials.studio.sizeLabel")}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {SIZES.map((sizeKey) => (
                        <button
                          key={sizeKey}
                          type="button"
                          onClick={() => setSize(sizeKey)}
                          className={`p-3.5 rounded-xl border text-left text-sm font-medium transition-all ${
                            size === sizeKey
                              ? "border-[#c4a56b] bg-white/15 text-[#f5e6d3]"
                              : "border-white/10 bg-white/5 text-[#d4c5b0] hover:bg-white/10"
                          }`}
                        >
                          {t(`materials.studio.sizes.${sizeKey}`)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#c4a56b] mb-3">
                      {t("materials.studio.doorStyleLabel")}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                      {DOOR_STYLES.map((styleKey) => (
                        <button
                          key={styleKey}
                          type="button"
                          onClick={() => setDoorStyle(styleKey)}
                          className={`p-3 rounded-xl border text-center text-xs sm:text-sm font-medium transition-all ${
                            doorStyle === styleKey
                              ? "border-[#c4a56b] bg-white/15 text-[#f5e6d3]"
                              : "border-white/10 bg-white/5 text-[#d4c5b0] hover:bg-white/10"
                          }`}
                        >
                          {t(`materials.studio.doorStyles.${styleKey}`)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Real Brands Facade Catalog */}
              {activeTab === "facades" && (
                <div className="space-y-4">
                  {/* Door Style Mini Bar */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-[#d4c5b0] mr-1">
                      {t("materials.studio.doorStyleLabel")}:
                    </span>
                    {DOOR_STYLES.map((styleKey) => (
                      <button
                        key={styleKey}
                        type="button"
                        onClick={() => setDoorStyle(styleKey)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          doorStyle === styleKey
                            ? "bg-[#c4a56b] text-[#1a0f0a]"
                            : "bg-white/10 text-[#d4c5b0] hover:bg-white/15"
                        }`}
                      >
                        {t(`materials.studio.doorStyles.${styleKey}`)}
                      </button>
                    ))}
                  </div>

                  {/* Brand Filter */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-[#d4c5b0] mr-1">
                      {t("materials.studio.brandFilterLabel")}
                    </span>
                    {FACADE_BRANDS.map((brand) => (
                      <button
                        key={brand}
                        type="button"
                        onClick={() => setBrandFilter(brand)}
                        className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                          brandFilter === brand
                            ? "border-[#c4a56b] bg-[#c4a56b]/20 text-[#f5e6d3]"
                            : "border-white/10 bg-white/5 text-[#d4c5b0] hover:bg-white/10"
                        }`}
                      >
                        {brand === "all" ? t("materials.studio.allBrands") : brand}
                      </button>
                    ))}
                  </div>

                  {/* Decor Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[340px] overflow-y-auto pr-1">
                    {filteredFacades.map((item) => {
                      const active = item.id === facadeId;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFacadeId(item.id)}
                          className={`flex items-center gap-3 p-3 rounded-2xl border text-left transition-all ${
                            active
                              ? "border-[#c4a56b] bg-white/15 shadow-lg"
                              : "border-white/10 bg-white/5 hover:bg-white/10"
                          }`}
                        >
                          <div
                            style={{
                              background:
                                item.texture === "wood"
                                  ? `repeating-linear-gradient(90deg, ${item.colorHex} 0px, ${item.secondaryHex} 6px, ${item.colorHex} 12px)`
                                  : `linear-gradient(135deg, ${item.colorHex} 0%, ${item.secondaryHex} 100%)`,
                            }}
                            className="w-12 h-12 rounded-xl flex-shrink-0 border border-white/25 shadow-inner"
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2 mb-0.5">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#c4a56b]">
                                {item.brand} • {item.code}
                              </span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-[#d4c5b0]">
                                {item.tier}
                              </span>
                            </div>
                            <p className="text-xs font-semibold text-[#f5e6d3] truncate">
                              {pickLocalized(item.nameAm, item.nameRu, item.nameEn)}
                            </p>
                            <p className="text-[11px] text-[#d4c5b0]/75 truncate">
                              {pickLocalized(item.finishAm, item.finishRu, item.finishEn)}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tab 3: Countertops & Hardware Catalog */}
              {activeTab === "stoneHardware" && (
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-[#c4a56b] mb-3">
                      {t("materials.studio.countertopLabel")} (Staron / Corian / HI-MACS / Egger)
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {COUNTERTOP_CATALOG.map((item) => {
                        const active = item.id === countertopId;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setCountertopId(item.id)}
                            className={`flex items-center gap-3 p-3 rounded-2xl border text-left transition-all ${
                              active
                                ? "border-[#c4a56b] bg-white/15 shadow-lg"
                                : "border-white/10 bg-white/5 hover:bg-white/10"
                            }`}
                          >
                            <div
                              style={{
                                background: `linear-gradient(125deg, ${item.colorHex} 0%, ${item.veinHex} 45%, ${item.colorHex} 52%, ${item.veinHex} 88%, ${item.colorHex} 100%)`,
                              }}
                              className="w-11 h-11 rounded-xl flex-shrink-0 border border-white/25"
                            />
                            <div className="min-w-0">
                              <p className="text-[11px] font-bold uppercase tracking-wider text-[#c4a56b]">
                                {item.brand}
                              </p>
                              <p className="text-xs font-semibold text-[#f5e6d3] truncate">
                                {pickLocalized(item.nameAm, item.nameRu, item.nameEn)}
                              </p>
                              <p className="text-[11px] text-[#d4c5b0]/70 truncate">
                                {item.code}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#c4a56b] mb-3">
                      {t("materials.studio.hardwareLabel")} (Blum / Samet / GTV)
                    </p>
                    <div className="space-y-2.5">
                      {HARDWARE_CATALOG.map((item) => {
                        const active = item.id === hardwareId;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setHardwareId(item.id)}
                            className={`w-full flex items-center justify-between gap-3 p-3.5 rounded-2xl border text-left transition-all ${
                              active
                                ? "border-[#c4a56b] bg-white/15 shadow-lg"
                                : "border-white/10 bg-white/5 hover:bg-white/10"
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span
                                style={{
                                  background: `linear-gradient(135deg, ${item.colorHex}, ${item.accentHex})`,
                                }}
                                className="w-9 h-9 rounded-full flex-shrink-0 border border-white/25"
                              />
                              <div className="min-w-0">
                                <p className="text-xs font-bold text-[#c4a56b]">
                                  {item.brand} • {item.system}
                                </p>
                                <p className="text-sm font-medium text-[#f5e6d3] truncate">
                                  {pickLocalized(item.nameAm, item.nameRu, item.nameEn)}
                                </p>
                              </div>
                            </div>
                            <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/10 text-[#d4c5b0] flex-shrink-0">
                              {t("materials.studio.softClose")}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Unified Estimate Action Bar */}
              <div className="pt-5 border-t border-white/10 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#d4c5b0]">
                  <span>
                    {t(`materials.studio.types.${furnitureType}`)} •{" "}
                    {t(`materials.studio.sizes.${size}`)} •{" "}
                    {t(`materials.studio.doorStyles.${doorStyle}`)}
                  </span>
                  <span className="text-[#c4a56b] font-semibold">
                    {t("materials.studio.leadTimeLabel")}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-[#25D366] text-white font-semibold hover:opacity-90 transition-opacity shadow-lg text-sm"
                  >
                    {t("materials.studio.orderCombo")}
                  </a>
                  <a
                    href={telegramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-[#229ED9] text-white font-semibold hover:opacity-90 transition-opacity text-sm"
                  >
                    {t("materials.studio.telegramCombo")}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopySpec}
                    className="inline-flex items-center justify-center px-4 py-3.5 rounded-full border border-white/20 text-[#f5e6d3] hover:bg-white/10 transition-colors text-sm font-medium"
                  >
                    {copied ? t("materials.studio.copiedSpec") : t("materials.studio.copySpec")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Material Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MATERIAL_BADGES.map((badge, index) => (
            <div
              key={badge}
              className="p-8 bg-white/90 rounded-3xl border border-[#1a0f0a]/15 hover:border-[#c4a56b] transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#1a0f0a] text-[#c4a56b] text-xs font-bold tracking-wider mb-6">
                {badge}
              </div>
              <h3 className="text-xl font-bold text-[#1a0f0a] mb-3">
                {t(`materials.items.${index}.title`)}
              </h3>
              <p className="text-sm text-[#1a0f0a]/70 leading-relaxed">
                {t(`materials.items.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
