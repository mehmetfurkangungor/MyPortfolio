"use client";

import {
  Aperture,
  ArrowRight,
  AtSign,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Camera,
  Clapperboard,
  ExternalLink,
  Film,
  Gauge,
  GraduationCap,
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

const profile = {
  name: "Mehmet Furkan Güngör",
  education:
    "Üsküdar Üniversitesi İletişim Fakültesi, Yeni Medya ve İletişim bölümü 4. sınıf öğrencisi.",
  headline:
    "Video prodüksiyon, sosyal medya ve dijital içerik üretimi alanlarında öğrencilikten profesyonelliğe geçiş yapan yaratıcı bir profil.",
  mainMessage:
    "Öğrencilik dönemimde yalnızca teorik bilgiyle kalmayıp, gerçek markalar ve projeler üzerinde üretim yaptım. Video çekimi, kurgu, sosyal medya yönetimi, reklam mantığı ve dijital içerik üretimi alanlarında kendimi geliştirmeye devam ediyorum.",
};

const services = [
  ["Video Prodüksiyon", "Çekim planı, kamera, ışık, kadraj ve ses düzenini projenin amacına göre kurgularım.", Camera],
  ["Reels / Shorts / TikTok", "İlk saniyeden dikkat çeken, dikey formata uygun, hızlı ama yorucu olmayan kısa video içerikleri üretirim.", MonitorPlay],
  ["Sosyal Medya Yönetimi", "Marka dili, paylaşım takvimi, hedef kitle ve içerik formatlarını birlikte düşünerek hesap akışı hazırlarım.", Share2],
  ["İçerik Planlama", "İçeriğin neden üretildiğini, kime hitap ettiğini ve markaya nasıl katkı sağlayacağını planlarım.", CalendarDays],
  ["Video Kurgu", "Tanıtım, reels, okul projesi ve belgesel formatlarında ritmi güçlü, anlaşılır kurgular hazırlarım.", Clapperboard],
  ["Belgesel Çekimi", "Röportaj, gerçek mekan, emek ve kişisel hikaye odaklı görsel anlatılar geliştiririm.", Film],
  ["Ürün ve Marka Tanıtımı", "Ürün, hizmet veya markanın değerini güven veren, satışa yakın ve sade bir görsel dille anlatırım.", Megaphone],
  ["E-ticaret İçerikleri", "Ürün görseli, satış odaklı video ve pazaryeri mantığına uygun içerikler hazırlarım.", BriefcaseBusiness],
  ["Meta Reklam Kampanyaları", "Hedef kitle, bütçe, kreatif ve kampanya amacı gibi reklam temel bileşenlerini okuyup içerik tarafına uygularım.", Target],
  ["Görsel Hikaye Anlatımı", "Işık, kadraj, ses, kurgu ritmi ve marka hissini aynı üretim dilinde bir araya getiririm.", Aperture],
];

const experiences = [
  ["Ajans Deneyimi", "Ajans ortamında video edit ve içerik üretimi üzerine çalıştım; farklı marka ihtiyaçlarına göre kurgu, revizyon ve sosyal medya formatlama süreçlerinde yer aldım."],
  ["Okul Projeleri", "Yeni Medya ve İletişim eğitimim boyunca belgesel, kısa video, dijital medya içeriği ve akademik proje üretimleri yaptım."],
  ["Marka İçerikleri", "Diş kliniği, prefabrik üretim / fabrika, büfe / yemek ve t-shirt markası gibi farklı sektörlerde çekim ve kurgu deneyimi edindim."],
  ["Sosyal Medya Yönetimi", "İçerik fikri, görsel dil, paylaşım planı, reels mantığı ve hedef kitleye uygun anlatım üzerinde çalışıyorum."],
  ["E-ticaret / Pazaryeri", "T-shirt satışı ve ürün içerikleri üzerinden ürün açıklaması, ürün görseli, Trendyol mantığı ve sosyal medyadan satışa yönlendirme deneyimi kazandım."],
  ["Belgesel Çekimleri", "Sanayi, emek, zanaat, aile içi meslek aktarımı ve kişisel hikaye odaklı belgesel anlatılarına özel ilgi duyuyorum."],
];

const equipment = [
  ["Sony A7S3 kamera", "4K video çekimleri ve sinematik prodüksiyonlarda kullandığım ana kamera."],
  ["Sony 24-70mm GM II lens", "Tanıtım, röportaj, ürün ve mekan çekimlerinde esnek kadraj sağlayan ana lens."],
  ["DJI RS3 Pro gimbal", "Hareketli çekimlerde dengeli ve profesyonel görüntü almak için kullandığım stabilizasyon ekipmanı."],
  ["DJI RS4 Pro gimbal", "Daha kontrollü hareket, akıcı planlar ve prodüksiyon kalitesi için kullandığım gimbal sistemi."],
  ["Atomos Ninja monitör / kayıt sistemi", "Çekim sırasında görüntüyü daha doğru takip etmek ve kayıt sürecini güçlendirmek için kullandığım ekipman."],
  ["ND / VND filtreler", "Dış çekimlerde pozlama kontrolü, alan derinliği ve sinematik enstantane hissi için kullandığım filtreler."],
  ["Işık ekipmanları", "Ürün, röportaj ve mekan çekimlerinde temiz ve kontrollü görüntü kurmak için kullandığım ışık setleri."],
  ["Mikrofon ve ses kayıt ekipmanları", "Röportaj ve konuşma içeren projelerde anlaşılır, temiz ses almak için kullandığım ekipmanlar."],
  ["Tripod ve temel prodüksiyon ekipmanları", "Sabit planlar, ürün çekimleri ve düzenli set akışı için kullandığım destek ekipmanları."],
];

const tools = [
  "Adobe Premiere Pro",
  "Final Cut Pro",
  "CapCut",
  "DaVinci Resolve temel renk düzenleme",
  "Canva",
  "Photoshop temel düzenleme",
  "Meta Business Suite",
  "Instagram içerik yönetimi",
  "Google Drive ile dosya teslimi",
  "Trendyol pazaryeri temel yönetimi",
  "Shopify / e-ticaret site mantığı",
  "Vercel / web yayınlama mantığı",
];

const contentThinking = [
  "İçerik fikri geliştirme",
  "Hedef kitleye uygun içerik üretme",
  "Reels / TikTok / Shorts mantığı",
  "İlk saniyelerde izleyiciyi tutma",
  "Hızlı tüketilen içerik ortamında dikkat çekme",
  "Sosyal medya akış planı hazırlama",
  "Paylaşım takvimi oluşturma",
  "Görsel dil ve marka bütünlüğü",
  "Doğru kadraj, temiz ses ve iyi ışık kullanımı",
  "Hızlı ama yorucu olmayan kurgu ritmi",
];

const brandExamples = [
  "Diş kliniği için video çekimi ve edit",
  "Prefabrik fabrikası için çekim ve edit",
  "Büfe ve yemek ürünleri için sosyal medya içerikleri",
  "T-shirt markası için ürün tanıtım videoları ve satış odaklı içerikler",
  "Reels ve kısa video kurguları",
  "Sosyal medya paylaşım planı hazırlama",
  "Marka için görsel dil oluşturma",
  "Ürün ve hizmet tanıtım içerikleri",
  "Okul projeleri ve belgesel çalışmaları",
  "Ajans döneminde edit ve içerik çalışmaları",
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
        <p className="mt-5 text-base leading-8 text-zinc-400 md:text-lg">
          {text}
        </p>
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
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Tüm İşler") return projects;
    return projects.filter(
      (project) =>
        project.category === activeCategory ||
        project.tags.some((tag) =>
          tag.toLocaleLowerCase("tr").includes(activeCategory.toLocaleLowerCase("tr").split(" ")[0]),
        ),
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050506] text-zinc-100">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
            Mehmet Furkan Güngör
          </a>
          <div className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
            <a href="#about" className="transition hover:text-white">Hakkımda</a>
            <a href="#portfolio" className="transition hover:text-white">Portfolyo</a>
            <a href="#experience" className="transition hover:text-white">Deneyim</a>
            <a href="#equipment" className="transition hover:text-white">Ekipman</a>
            <a href="#contact" className="transition hover:text-white">İletişim</a>
          </div>
          <a
            href="#contact"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 px-4 text-sm font-medium text-white transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-black"
          >
            <Mail className="h-4 w-4" />
            İletişim
          </a>
        </div>
      </nav>

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
            {profile.headline}
          </h2>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <GraduationCap className="mb-4 h-6 w-6 text-cyan-300" />
            <p className="leading-7 text-zinc-300">{profile.education}</p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 md:p-8">
          <p className="text-lg leading-9 text-zinc-300">
            Yeni Medya ve İletişim alanında eğitim alırken video prodüksiyon,
            sosyal medya yönetimi, dijital içerik üretimi, kurgu, reklam
            kampanyaları ve marka iletişimi üzerine kendimi geliştirdim. Hem
            okul projelerinde hem de ajans ve marka çalışmalarında çekim, kurgu,
            içerik planlama ve sosyal medya tarafında aktif olarak yer aldım.
          </p>
          <p className="mt-5 text-lg leading-9 text-zinc-300">
            Sadece video çekmek ya da edit yapmak değil; bir içeriğin neden
            üretildiğini, hangi kitleye hitap ettiğini, sosyal medyada nasıl
            dikkat çekeceğini ve markaya nasıl katkı sağlayacağını düşünerek
            çalışıyorum.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Çekim", "Kurgu", "Sosyal Medya"].map((item) => (
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
            eyebrow="İlgilendiğim Alanlar"
            title="Çekimden yayın akışına, reklam mantığından e-ticaret içeriğine kadar üretimin farklı noktalarında çalışıyorum."
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
                  {project.externalUrl || project.driveEmbedUrl ? "Projeyi Gör" : "Drive linki eklenecek"}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-white/10 bg-white/[0.03] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Deneyim Alanlarım"
            title="Öğrencilik, ajans ve marka üretimlerini aynı portfolyo içinde topluyorum."
            text="İşveren, ajans veya müşteri siteye girdiğinde hangi sektörlerde içerik ürettiğimi ve üretim sürecinde hangi rolleri aldığımı hızlıca görebilsin diye bu bölüm net tutuldu."
          />
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
        <SectionHeading
          eyebrow="Ekipman ve Programlar"
          title="Çekim, kurgu, içerik planlama ve dosya teslim sürecinde kullandığım araçlar."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
              İçeriği sadece güzel görüntü değil, dikkat, hedef kitle ve marka amacı üzerinden değerlendiriyorum.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Kısa video içeriklerinde ilk saniyelerin güçlü olması, doğru
              kadraj, temiz ses, iyi ışık, hedef kitleye uygun dil ve düzenli
              paylaşım planı benim için üretimin temel parçaları.
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

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-24 md:grid-cols-2 md:px-8">
        <article className="rounded-[2rem] border border-white/10 bg-[#0c0c0e] p-7 md:p-9 md:col-span-2">
          <Sparkles className="mb-8 h-7 w-7 text-cyan-300" />
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Yapay Zeka Destekli Web ve Dijital Ürün Geliştirme
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-zinc-400">
            Son dönemlerde OpenAI Codex, Google Antigravity, Open Cloud ve
            benzeri yapay zeka destekli agent araçları üzerine kendimi
            geliştiriyorum. Bu araçlarla web sitesi, uygulama prototipi ve
            dijital ürün fikirleri geliştirmeye çalışıyorum. Amacım; içerik
            üretimi ve sosyal medya bilgimi, yapay zeka destekli web ve
            uygulama geliştirme becerileriyle birleştirmek.
          </p>
        </article>
        <article className="rounded-[2rem] border border-white/10 bg-[#0c0c0e] p-7 md:p-9">
          <Target className="mb-8 h-7 w-7 text-cyan-300" />
          <h2 className="text-3xl font-semibold tracking-tight text-white">Meta ve Reklam Bilgim</h2>
          <p className="mt-5 leading-8 text-zinc-400">
            Meta Business Suite, reklam kampanyası mantığı, hedef kitle seçimi,
            reklam kreatifi, bütçe planlama ve içerik performansı gibi konularda
            temel bilgi sahibiyim. Reklamın sadece bütçe vermek değil, doğru
            içeriği doğru kişiye doğru mesajla ulaştırmak olduğunu biliyorum.
          </p>
        </article>
        <article className="rounded-[2rem] border border-white/10 bg-[#0c0c0e] p-7 md:p-9">
          <BriefcaseBusiness className="mb-8 h-7 w-7 text-cyan-300" />
          <h2 className="text-3xl font-semibold tracking-tight text-white">E-ticaret / Pazaryeri Deneyimi</h2>
          <p className="mt-5 leading-8 text-zinc-400">
            T-shirt satışı ve ürün içerikleri üzerinden e-ticaret tarafında
            deneyimim var. Ürün tanıtımı, satış odaklı görsel ve video üretimi,
            Trendyol pazaryeri mantığı, ürün açıklaması, ürün görseli ve sosyal
            medyadan satışa yönlendirme konularında çalışmalar yaptım.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading
          eyebrow="Belgesel Projelerim"
          title="Gerçek hikayelere, emeğe ve kişisel hafızaya odaklanan işler."
        />
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
          <SectionHeading
            eyebrow="Yaptığım İş Türleri"
            title="Farklı sektörlere uyarlanabilecek içerik üretim deneyimleri."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
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
            Video çekimi, kurgu, sosyal medya içeriği, marka tanıtımı veya
            portfolyo iş birlikleri için iletişim bilgileri buraya eklenecek.
          </p>
          <div className="mt-8 space-y-4 text-zinc-300">
            <p>Ad Soyad: {profile.name}</p>
            <p>E-posta: eklenecek</p>
            <p>Instagram: eklenecek</p>
            <p>LinkedIn: eklenecek</p>
            <p>YouTube / Vimeo / Drive portfolyo: eklenecek</p>
            <div className="flex gap-3">
              <a aria-label="Instagram" href="#contact" className="rounded-full border border-white/10 p-3 transition hover:border-cyan-300 hover:text-cyan-200">
                <AtSign className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href="#contact" className="rounded-full border border-white/10 p-3 transition hover:border-cyan-300 hover:text-cyan-200">
                <Link className="h-5 w-5" />
              </a>
              <a aria-label="Video portfolio" href="#contact" className="rounded-full border border-white/10 p-3 transition hover:border-cyan-300 hover:text-cyan-200">
                <Video className="h-5 w-5" />
              </a>
            </div>
          </div>
          <a href="#contact" className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 text-sm font-semibold text-black transition hover:bg-white">
            İletişim Bilgileri Eklenecek
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
