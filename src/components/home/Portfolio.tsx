"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/i18n/index";
import { projects, projectCategories, type Project, type ProjectCategory } from "@/data/portfolio";

export default function Portfolio() {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const lang = i18n.language;
  const getTitle = (project: Project) =>
    lang === "am" ? project.titleAm : lang === "ru" ? project.titleRu : project.title;
  const getCategory = (project: Project) =>
    lang === "am" ? project.categoryAm : lang === "ru" ? project.categoryRu : project.category;

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-32 bg-[#0f0a08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5e6d3] mb-4">
            {t("portfolio.heading")}
          </h2>
          <p className="text-[#d4c5b0] max-w-2xl mx-auto">
            {t("portfolio.description")}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-10 sm:mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full font-medium transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-[#c4a56b] text-[#1a0f0a] shadow-lg"
                : "bg-white/5 text-[#d4c5b0] hover:bg-white/10"
            }`}
          >
            {t("portfolio.all")}
          </button>
          {projectCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-[#c4a56b] text-[#1a0f0a] shadow-lg"
                  : "bg-white/5 text-[#d4c5b0] hover:bg-white/10"
              }`}
            >
              {lang === "am" ? cat.labelAm : lang === "ru" ? cat.labelRu : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-[#3d2b1f] to-[#c4a56b]">
                <Image
                  src={project.image}
                  alt={getTitle(project)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={85}
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                <div className="w-12 h-12 bg-[#c4a56b] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#1a0f0a]" fill="none" viewBox="0 0 24 24">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#f5e6d3] mb-2">
                  {getTitle(project)}
                </h3>
                <p className="text-sm text-[#d4c5b0] capitalize">
                  {getCategory(project)}
                </p>
              </div>

              {/* Default Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-lg font-semibold text-[#f5e6d3]">
                  {getTitle(project)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#1a0f0a] rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label={t("portfolio.closeModal")}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="relative aspect-[16/10]">
              <Image
                src={selectedProject.image}
                alt={getTitle(selectedProject)}
                fill
                className="object-cover"
                quality={90}
              />
            </div>
            <div className="p-5 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-6">
              <div>
                <p className="text-sm text-[#c4a56b] mb-2 capitalize">
                  {getCategory(selectedProject)}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#f5e6d3]">
                  {getTitle(selectedProject)}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 bg-[#c4a56b] text-[#1a0f0a] font-semibold rounded-full hover:bg-[#e8d5b8] transition-colors duration-200"
                >
                  {t("portfolio.orderSimilar")}
                </Link>
                <a
                  href={t("contact.instagramUrl")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#c4a56b] text-[#f5e6d3] font-semibold rounded-full hover:bg-[#c4a56b] hover:text-[#1a0f0a] transition-colors duration-200"
                >
                  {t("portfolio.viewOnInstagram")}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
