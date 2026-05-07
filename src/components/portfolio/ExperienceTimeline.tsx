import { experiences } from "@/data/siteContent";
import { Reveal } from "../motion/Reveal";
import { SectionHeading } from "./SectionHeading";

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="border-y border-white/10 bg-white/[0.03] px-5 py-24 md:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Deneyim Alanlarım"
          title="Öğrencilik, ajans ve marka üretimlerini aynı portfolyo içinde topluyorum."
          text="İşveren, ajans veya müşteri siteye girdiğinde hangi sektörlerde içerik ürettiğimi ve üretim sürecinde hangi rolleri aldığımı hızlıca görebilsin diye bu bölüm net tutuldu."
        />
        <div className="relative border-l border-white/15 pl-6">
          {experiences.map(([title, text]) => (
            <Reveal key={title} direction="left">
              <div className="relative mb-8 rounded-3xl border border-white/10 bg-black/25 p-6 transition duration-300 last:mb-0 hover:border-cyan-300/45 hover:bg-white/[0.05]">
                <span className="absolute -left-[2.05rem] top-7 h-4 w-4 rounded-full border border-cyan-200 bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.55)]" />
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
