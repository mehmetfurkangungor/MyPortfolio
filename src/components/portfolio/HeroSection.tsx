"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CircleDot, Sparkles } from "lucide-react";
import { profile } from "@/data/siteContent";
import { cinematicContainer, cinematicItem } from "../motion/Reveal";

export function HeroSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.22], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.28], [0.58, 0.16]);
  const copyY = useTransform(scrollYProgress, [0, 0.22], [0, 90]);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-24">
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-55"
        style={{
          backgroundImage: `url('${basePath}/images/hero-production.png')`,
          scale: heroScale,
          opacity: heroOpacity,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_28%_72%,rgba(245,158,11,0.12),transparent_26%)]" />
      <motion.div
        className="absolute left-1/2 top-28 hidden h-[1px] w-[42rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/45 to-transparent md:block"
        animate={{ opacity: [0.18, 0.72, 0.18], scaleX: [0.75, 1, 0.75] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-5 bottom-8 z-10 hidden max-w-7xl items-center justify-between border-t border-white/10 pt-5 text-xs uppercase tracking-[0.24em] text-zinc-500 md:mx-auto md:flex">
        <span>Creative Reel</span>
        <span>Scroll to explore</span>
        <span>Digital Production</span>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050506_0%,rgba(5,5,6,0.9)_35%,rgba(5,5,6,0.35)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050506] to-transparent" />
      <motion.div
        className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-5 pb-24 md:px-8"
        style={{ y: copyY }}
      >
        <motion.div
          className="max-w-5xl"
          variants={cinematicContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={cinematicItem}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-zinc-300 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-cyan-300" />
            4. sınıf Yeni Medya ve İletişim öğrencisi
          </motion.div>
          <motion.p variants={cinematicItem} className="mb-5 text-xl font-medium text-cyan-200">
            {profile.name}
          </motion.p>
          <motion.h1
            variants={cinematicItem}
            className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            Video Prodüksiyon, Sosyal Medya ve Dijital İçerik Üretimi
          </motion.h1>
          <motion.p variants={cinematicItem} className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
            {profile.mainMessage}
          </motion.p>
          <motion.div variants={cinematicItem} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#portfolio"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-cyan-200"
            >
              Portfolyomu Gör
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Benimle İletişime Geç
            </a>
            <a
              href="#experience"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-cyan-300/10"
            >
              Deneyimlerim
            </a>
          </motion.div>
          <motion.div
            variants={cinematicItem}
            className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3"
          >
            {["4K çekim", "Reels kurgu", "Marka içeriği"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-3 text-sm text-zinc-300 backdrop-blur">
                <CircleDot className="h-4 w-4 text-cyan-300" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
