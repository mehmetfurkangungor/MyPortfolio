import { ArrowRight, Sparkles } from "lucide-react";
import { profile } from "@/data/siteContent";

export function HeroSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-55"
        style={{ backgroundImage: `url('${basePath}/images/hero-production.png')` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050506_0%,rgba(5,5,6,0.9)_35%,rgba(5,5,6,0.35)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050506] to-transparent" />
      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-5 pb-24 md:px-8">
        <div className="max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            4. sınıf Yeni Medya ve İletişim öğrencisi
          </div>
          <p className="mb-5 text-xl font-medium text-cyan-200">{profile.name}</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl lg:text-8xl">
            Video Prodüksiyon, Sosyal Medya ve Dijital İçerik Üretimi
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
            {profile.mainMessage}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
          </div>
        </div>
      </div>
    </section>
  );
}
