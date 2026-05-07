"use client";

import {
  Aperture,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Camera,
  Clapperboard,
  ExternalLink,
  Film,
  Gauge,
  AtSign,
  Layers3,
  Link,
  Mail,
  Megaphone,
  MonitorPlay,
  Play,
  Radio,
  Share2,
  Sparkles,
  Target,
  Video,
  Wand2,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  featuredDocumentaries,
  portfolioCategories,
  projects,
  type Project,
} from "@/data/portfolioData";

const services = [
  ["Video Çekimi", "Kamera, ışık, kadraj ve ses düzenini projeye göre planlayarak temiz ve kullanılabilir görüntüler üretirim.", Camera],
  ["Video Kurgu / Edit", "Sosyal medya, tanıtım ve belgesel formatlarında ritmi güçlü, izlenebilir kurgular hazırlarım.", Clapperboard],
  ["Sosyal Medya Yönetimi", "Marka diline uygun içerik akışı, paylaşım planı ve platform mantığıyla hesapları düzenlerim.", Share2],
  ["Reels / Shorts / TikTok", "İlk saniyeden dikkat çeken, hızlı tüketilen dikey video formatlarına uygun içerikler üretirim.", MonitorPlay],
  ["Marka ve Ürün Tanıtımı", "Ürün ya da hizmetin değerini net gösteren, satış ve güven odağı olan videolar kurgularım.", Megaphone],
  ["Belgesel Projeleri", "Röportaj, mekan, hikaye ve görsel anlatıyı bir araya getiren kısa belgesel işleri geliştiririm.", Film],
  ["Meta Reklam Kampanyaları", "Hedef, kitle, bütçe ve kreatif mantığını temel düzeyde okuyup kampanya fikrine katkı sağlarım.", Target],
  ["İçerik Planlama", "Aylık akış, seri içerik fikri, paylaşım takvimi ve dosya teslim düzeni kurarım.", CalendarDays],
  ["E-ticaret İçerikleri", "Pazaryeri ve ürün sayfası mantığına uygun görsel, video ve kısa tanıtım içerikleri hazırlarım.", BriefcaseBusiness],
  ["Fotoğraf / Ürün Görseli", "Ürünün dijital vitrinde temiz, anlaşılır ve satışa hazır görünmesine odaklanırım.", Aperture],
];

const experiences = [
  ["Ajans Deneyimi", "Farklı marka ihtiyaçlarına göre hızlı kurgu, revizyon, sosyal medya formatlama ve teslim süreçlerinde çalıştım."],
  ["Okul Projeleri", "Yeni Medya ve İletişim eğitimi boyunca belgesel, dijital anlatı ve video üretimi üzerine projeler geliştirdim."],
  ["Marka İçerikleri", "Diş kliniği, fabrika, yemek ve ürün odaklı çekimlerde markanın güven veren tarafını öne çıkardım."],
  ["Sosyal Medya Yönetimi", "İçerik fikri, paylaşım planı, görsel bütünlük ve hedef kitleye uygun anlatım üzerine çalışıyorum."],
  ["E-ticaret / Pazaryeri", "Ürün görseli, satış odaklı reels ve Trendyol gibi pazaryeri mantığını temel düzeyde deneyimledim."],
  ["Belgesel Çekimleri", "Röportaj, gerçek mekan, emek ve kişisel hikaye odaklı belgesel anlatılarına özel ilgi duyuyorum."],
];

const equipment = [
  ["Sony A7S3", "4K video çekimleri ve sinematik prodüksiyonlarda kullandığım ana kamera."],
  ["Sony 24-70mm GM II", "Tanıtım, röportaj ve ürün çekimlerinde esnek kadraj sağlayan ana lens."],
  ["DJI RS3 Pro / RS4 Pro", "Hareketli çekimlerde dengeli ve profesyonel görüntü almak için kullandığım gimbal sistemi."],
  ["Atomos Ninja", "Monitörleme ve kayıt sürecinde görüntüyü daha doğru takip etmek için kullandığım ekipman."],
  ["ND / VND Filtreler", "Dış çekimlerde pozlama kontrolü ve sinematik enstantane hissi için kullandığım filtreler."],
  ["Işık Ekipmanları", "Ürün, röportaj ve mekan çekimlerinde temiz ve kontrollü görüntü kurmak için kullandığım set."],
  ["Mikrofon / Ses Kayıt", "Röportaj ve konuşma içeren projelerde anlaşılır ses kaydı için kullandığım ekipmanlar."],
  ["Kurgu Yazılımları", "Premiere Pro, CapCut, Final Cut Pro ve DaVinci Resolve ile proje ihtiyacına göre çalışıyorum."],
];

const tools = [
  "Adobe Premiere Pro",
  "Final Cut Pro",
  "CapCut",
  "DaVinci Resolve",
  "Photoshop temel düzenleme",
  "Canva",
  "Meta Business Suite",
  "Instagram içerik yönetimi",
  "Google Drive / dosya teslim sistemi",
  "Trendyol pazaryeri temel bilgisi",
  "Shopify / e-ticaret site mantığı",
  "Vercel / web yayınlama mantığı",
];

const contentThinking = [
  "İçerik fikri geliştirme",
  "Hedef kitleye uygun içerik üretme",
  "Reels / TikTok / Shorts mantığı",
  "İlk 3 saniyede izleyiciyi tutma",
  "Hızlı tüketilen içerik çağında dikkat çekme",
  "Sosyal medya akış planı hazırlama",
  "Paylaşım takvimi oluşturma",
  "Görsel dil ve marka bütünlüğü",
  "Meta reklam kampanyalarında hedef, kitle, bütçe ve kreatif mantığı",
  "İçerikte ışık, kadraj, ses ve kurgu ritminin önemi",
];

const brandExamples = [
  "Diş kliniği video çekim ve edit çalışmaları",
  "Prefabrik fabrika / üretim alanı çekim ve edit çalışmaları",
  "Büfe / yemek ürün çekimi ve montajı",
  "T-shirt markası için ürün içerikleri, reels, görsel ve satış odaklı içerikler",
  "E-ticaret ve Trendyol pazaryeri kullanımı üzerine deneyimler",
  "Sosyal medya hesap akışı ve paylaşım planı hazırlama",
  "Ürün tanıtımı ve marka imajı içerikleri",
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-zinc-400 md:text-lg">{text}</p>
      ) : null}
    </div>
  );
}

function MediaSlot({ project }: { project: Project }) {
  if (project.driveEmbedUrl) {
    return (
      <iframe
        src={project.driveEmbedUrl}
        title={project.title}
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="h-full w-full"
      />
    );
  }

  if (project.thumbnailUrl) {
    return (
      <div
        className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${project.thumbnailUrl})` }}
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_10%,rgba(34,211,238,0.22),transparent_32%),linear-gradient(135deg,#0b0b0c,#18181b_55%,#050505)] text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/8">
        <Play className="h-6 w-6 fill-cyan-200 text-cyan-200" />
      </div>
      <p className="px-8 text-sm font-medium text-zinc-300">Drive medya alanı</p>
      <p className="mt-2 max-w-52 px-5 text-xs leading-5 text-zinc-500">
        Link eklenince video veya görsel burada gömülü görünecek.
      </p>
    </div>
  );
}

export default function PortfolioSite() {
  const [activeCategory, setActiveCategory] = useState("Tüm İşler");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Tüm İşler") return projects;
    if (activeCategory === "Reels Videoları") {
      return projects.filter((project) =>
        project.tags.some((tag) => tag.toLowerCase().includes("reels")),
      );
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050506] text-zinc-100">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
            Portfolio
          </a>
          <div className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
            <a href="#portfolio" className="transition hover:text-white">Portfolyo</a>
            <a href="#experience" className="transition hover:text-white">Deneyim</a>
            <a href="#equipment" className="transition hover:text-white">Ekipman</a>
            <a href="#contact" className="transition hover:text-white">İletişim</a>
          </div>
          <a
            href="mailto:mail@example.com"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 px-4 text-sm font-medium text-white transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-black"
          >
            <Mail className="h-4 w-4" />
            Mail
          </a>
        </div>
      </nav>

      <section id="top" className="relative min-h-screen overflow-hidden pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-55"
          style={{ backgroundImage: "url('/images/hero-production.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050506_0%,rgba(5,5,6,0.88)_35%,rgba(5,5,6,0.35)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050506] to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-5 pb-24 md:px-8">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Yeni Medya, video prodüksiyon ve dijital içerik
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl lg:text-8xl">
              Video Prodüksiyon, Sosyal Medya ve Dijital İçerik Üretimi
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              Yeni Medya ve İletişim öğrencisi olarak video çekimi, kurgu,
              sosyal medya yönetimi, reklam kampanyaları ve dijital marka
              içerikleri üzerine çalışıyorum.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#portfolio" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-cyan-200">
                Portfolyomu Gör
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
                Benimle İletişime Geç
              </a>
              <a href="#experience" className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-cyan-300/10">
                Deneyimlerim
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300">
            Hakkımda
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Öğrenci kimliğini gerçek üretim deneyimiyle birleştiren yaratıcı bir profil.
          </h2>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 md:p-8">
          <p className="text-lg leading-9 text-zinc-300">
            4. sınıf Yeni Medya ve İletişim öğrencisiyim. Video çekimi, kurgu,
            sosyal medya yönetimi, dijital reklam, marka içerikleri ve belgesel
            projeleriyle ilgileniyorum. Benim için iyi içerik sadece güzel
            görüntüden ibaret değil; doğru fikir, temiz ses, güçlü kadraj,
            platforma uygun ritim ve markanın insanlara verdiği hissin bir
            araya gelmesi demek.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Video", "Sosyal Medya", "Reklam"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <BadgeCheck className="mb-4 h-5 w-5 text-cyan-300" />
                <p className="font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Neler Yapıyorum"
            title="Çekimden yayın akışına kadar üretimin farklı noktalarında çalışıyorum."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map(([title, text, Icon]) => (
              <article key={title as string} className="group rounded-3xl border border-white/10 bg-[#0c0c0e] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-[#101114]">
                <Icon className="mb-6 h-6 w-6 text-cyan-300" />
                <h3 className="text-lg font-semibold text-white">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading
          eyebrow="Portfolyo"
          title="Kategori filtreli iş arşivi"
          text="Şimdilik örnek projeler ve Drive alanları hazır. Bana linkleri verdiğinde sadece veri dosyasını doldurarak kartları gerçek medya ile yayınlayabiliriz."
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
            <article key={project.title} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0c0c0e] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45">
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
                <p className="mt-3 text-sm leading-6 text-zinc-400">{project.description}</p>
                <p className="mt-4 text-sm leading-6 text-zinc-300">
                  <span className="text-zinc-500">Rol: </span>
                  {project.role}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.slice(0, 4).map((tool) => (
                    <span key={tool} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                      {tool}
                    </span>
                  ))}
                </div>
                <a
                  href={project.externalUrl || project.driveEmbedUrl || "#contact"}
                  target={project.externalUrl || project.driveEmbedUrl ? "_blank" : undefined}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
                >
                  {project.externalUrl || project.driveEmbedUrl ? "Projeyi Gör" : "Drive'da İzle"}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-white/10 bg-white/[0.03] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Deneyimlerim" title="Üretim sürecini farklı iş türlerinde deneyimledim." />
          <div className="relative border-l border-white/15 pl-6">
            {experiences.map(([title, text]) => (
              <div key={title} className="relative mb-8 rounded-3xl border border-white/10 bg-black/25 p-6 last:mb-0">
                <span className="absolute -left-[2.05rem] top-7 h-4 w-4 rounded-full border border-cyan-200 bg-cyan-300" />
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading eyebrow="Ekipman ve Programlar" title="Çekim, kurgu ve teslim sürecinde kullandığım araçlar." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {equipment.map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-white/10 bg-[#0c0c0e] p-6">
              <Radio className="mb-5 h-6 w-6 text-cyan-300" />
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div key={tool} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-zinc-300">
              <Wand2 className="h-4 w-4 shrink-0 text-cyan-300" />
              {tool}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#09090a] px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300">
              Sosyal Medya ve İçerik Bilgim
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              İçeriği sadece üretim değil, dikkat ve davranış meselesi olarak görüyorum.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Bir videonun ilk üç saniyesi, marka dili, paylaşım zamanı, kreatif
              fikri ve izleyicinin neden durup bakacağı birlikte düşünülmeli.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {contentThinking.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-zinc-300">
                <Layers3 className="mb-4 h-5 w-5 text-cyan-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading eyebrow="Belgesel Projelerim" title="Gerçek hikayelere, emeğe ve kişisel hafızaya odaklanan işler." />
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredDocumentaries.map((item) => (
            <article key={item.title} className="rounded-[1.75rem] border border-white/10 bg-[#0c0c0e] p-6">
              <Film className="mb-8 h-7 w-7 text-cyan-300" />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{item.text}</p>
              <p className="mt-5 text-sm leading-7 text-zinc-300">{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Marka / İş Örnekleri" title="Farklı sektörlere uyarlanabilecek içerik üretim alanları." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {brandExamples.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-black/25 p-5">
                <Gauge className="mb-5 h-5 w-5 text-cyan-300" />
                <p className="font-medium leading-7 text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300">
            İletişim
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Benimle çalışın.
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Portfolyo linkleri, iletişim bilgileri ve sosyal medya hesaplarını
            bana verdiğinde burayı gerçek bilgilerle dolduracağız.
          </p>
          <div className="mt-8 space-y-4 text-zinc-300">
            <p>Ad Soyad: Daha sonra eklenecek</p>
            <p>E-posta: mail@example.com</p>
            <div className="flex gap-3">
              <a aria-label="Instagram" href="#" className="rounded-full border border-white/10 p-3 transition hover:border-cyan-300 hover:text-cyan-200">
                <AtSign className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href="#" className="rounded-full border border-white/10 p-3 transition hover:border-cyan-300 hover:text-cyan-200">
                <Link className="h-5 w-5" />
              </a>
              <a aria-label="Video portfolio" href="#" className="rounded-full border border-white/10 p-3 transition hover:border-cyan-300 hover:text-cyan-200">
                <Video className="h-5 w-5" />
              </a>
            </div>
          </div>
          <a href="mailto:mail@example.com" className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 text-sm font-semibold text-black transition hover:bg-white">
            Doğrudan Mail At
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <form className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-zinc-400">
              Ad Soyad
              <input className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-cyan-300" placeholder="Adınız" />
            </label>
            <label className="space-y-2 text-sm text-zinc-400">
              E-posta
              <input className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-cyan-300" placeholder="mail@ornek.com" />
            </label>
          </div>
          <label className="mt-5 block space-y-2 text-sm text-zinc-400">
            Mesaj
            <textarea className="min-h-36 w-full rounded-2xl border border-white/10 bg-black/30 p-4 text-white outline-none transition focus:border-cyan-300" placeholder="Proje, çekim ya da içerik ihtiyacınızı yazın." />
          </label>
          <button type="button" className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-cyan-200">
            Form Taslağı
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </section>
    </main>
  );
}
