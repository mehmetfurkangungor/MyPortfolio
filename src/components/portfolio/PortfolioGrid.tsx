"use client";

import { ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { portfolioCategories, projects } from "@/data/portfolioData";
import { MediaSlot } from "./MediaSlot";
import { SectionHeading } from "./SectionHeading";

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("Tüm İşler");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Tüm İşler") return projects;
    return projects.filter(
      (project) =>
        project.category === activeCategory ||
        project.tags.some((tag) =>
          tag
            .toLocaleLowerCase("tr")
            .includes(activeCategory.toLocaleLowerCase("tr").split(" ")[0]),
        ),
    );
  }, [activeCategory]);

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeading
        eyebrow="Portfolyo"
        title="Gerçek iş türlerini hızlıca anlatan kategori filtreli arşiv"
        text="Proje kartları şu an hazır alanlarla duruyor. Drive linkleri eklendiğinde video veya görsel kart içinde gömülü olarak görünecek; oynatılamayan bağlantılar dış link olarak açılacak."
      />
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {portfolioCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeCategory === category
                ? "border-cyan-300 bg-cyan-300 text-black"
                : "border-white/10 bg-white/[0.04] text-zinc-300 hover:border-white/30 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0c0c0e] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45"
          >
            <div className="aspect-video border-b border-white/10">
              <MediaSlot project={project} />
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-white/8 px-3 py-1 text-xs font-medium text-cyan-200">
                  {project.category}
                </span>
                <span className="text-xs text-zinc-500">{project.year}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {project.description}
              </p>
              <p className="mt-4 text-sm leading-6 text-zinc-300">
                <span className="text-zinc-500">Rol: </span>
                {project.role}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.slice(0, 4).map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href={project.externalUrl || project.driveEmbedUrl || "#contact"}
                target={project.externalUrl || project.driveEmbedUrl ? "_blank" : undefined}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
              >
                {project.externalUrl || project.driveEmbedUrl
                  ? "Projeyi Gör"
                  : "Drive linki eklenecek"}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
