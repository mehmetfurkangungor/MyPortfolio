"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
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
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 34, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.015 }}
            className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0c0c0e] transition-colors duration-300 hover:border-cyan-300/45"
          >
            <div className="relative aspect-video overflow-hidden border-b border-white/10">
              <MediaSlot project={project} />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-cyan-950/35 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
              />
              <div className="absolute bottom-4 left-4 flex translate-y-6 items-center gap-2 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white opacity-0 backdrop-blur transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Preview Reel
                <ExternalLink className="h-3.5 w-3.5 text-cyan-200" />
              </div>
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
          </motion.article>
        ))}
      </div>
    </section>
  );
}
