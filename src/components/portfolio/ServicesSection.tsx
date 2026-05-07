import { services } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="İlgilendiğim Alanlar"
          title="Çekimden yayın akışına, reklam mantığından e-ticaret içeriğine kadar üretimin farklı noktalarında çalışıyorum."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map(([title, text, Icon]) => (
            <article
              key={title}
              className="group rounded-3xl border border-white/10 bg-[#0c0c0e] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-[#101114]"
            >
              <Icon className="mb-6 h-6 w-6 text-cyan-300" />
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
