import { BriefcaseBusiness, Film, Gauge, Layers3, Sparkles, Target } from "lucide-react";
import { featuredDocumentaries } from "@/data/portfolioData";
import { brandExamples, contentThinking } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function SocialKnowledgeSection() {
  return (
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
            Kısa video içeriklerinde ilk saniyelerin güçlü olması, doğru kadraj,
            temiz ses, iyi ışık, hedef kitleye uygun dil ve düzenli paylaşım
            planı benim için üretimin temel parçaları.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {contentThinking.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-zinc-300"
            >
              <Layers3 className="mb-4 h-5 w-5 text-cyan-300" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AiAndBusinessSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-5 px-5 py-24 md:grid-cols-2 md:px-8">
      <article className="rounded-[2rem] border border-white/10 bg-[#0c0c0e] p-7 md:col-span-2 md:p-9">
        <Sparkles className="mb-8 h-7 w-7 text-cyan-300" />
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          Yapay Zeka Destekli Web ve Dijital Ürün Geliştirme
        </h2>
        <p className="mt-5 max-w-4xl leading-8 text-zinc-400">
          Son dönemlerde OpenAI Codex, Google Antigravity, Open Cloud ve benzeri
          yapay zeka destekli agent araçları üzerine kendimi geliştiriyorum. Bu
          araçlarla web sitesi, uygulama prototipi ve dijital ürün fikirleri
          geliştirmeye çalışıyorum. Amacım; içerik üretimi ve sosyal medya
          bilgimi, yapay zeka destekli web ve uygulama geliştirme becerileriyle
          birleştirmek.
        </p>
      </article>
      <article className="rounded-[2rem] border border-white/10 bg-[#0c0c0e] p-7 md:p-9">
        <Target className="mb-8 h-7 w-7 text-cyan-300" />
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          Meta ve Reklam Bilgim
        </h2>
        <p className="mt-5 leading-8 text-zinc-400">
          Meta Business Suite, reklam kampanyası mantığı, hedef kitle seçimi,
          reklam kreatifi, bütçe planlama ve içerik performansı gibi konularda
          temel bilgi sahibiyim. Reklamın sadece bütçe vermek değil, doğru
          içeriği doğru kişiye doğru mesajla ulaştırmak olduğunu biliyorum.
        </p>
      </article>
      <article className="rounded-[2rem] border border-white/10 bg-[#0c0c0e] p-7 md:p-9">
        <BriefcaseBusiness className="mb-8 h-7 w-7 text-cyan-300" />
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          E-ticaret / Pazaryeri Deneyimi
        </h2>
        <p className="mt-5 leading-8 text-zinc-400">
          T-shirt satışı ve ürün içerikleri üzerinden e-ticaret tarafında
          deneyimim var. Ürün tanıtımı, satış odaklı görsel ve video üretimi,
          Trendyol pazaryeri mantığı, ürün açıklaması, ürün görseli ve sosyal
          medyadan satışa yönlendirme konularında çalışmalar yaptım.
        </p>
      </article>
    </section>
  );
}

export function DocumentarySection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeading
        eyebrow="Belgesel Projelerim"
        title="Gerçek hikayelere, emeğe ve kişisel hafızaya odaklanan işler."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {featuredDocumentaries.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.75rem] border border-white/10 bg-[#0c0c0e] p-6"
          >
            <Film className="mb-8 h-7 w-7 text-cyan-300" />
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400">{item.text}</p>
            <p className="mt-5 text-sm leading-7 text-zinc-300">{item.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WorkTypesSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Yaptığım İş Türleri"
          title="Farklı sektörlere uyarlanabilecek içerik üretim deneyimleri."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {brandExamples.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-black/25 p-5"
            >
              <Gauge className="mb-5 h-5 w-5 text-cyan-300" />
              <p className="font-medium leading-7 text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
