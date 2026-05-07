import { Radio, Wand2 } from "lucide-react";
import { equipment, tools } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function EquipmentSection() {
  return (
    <section id="equipment" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeading
        eyebrow="Ekipman ve Programlar"
        title="Çekim, kurgu, içerik planlama ve dosya teslim sürecinde kullandığım araçlar."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {equipment.map(([title, text]) => (
          <article
            key={title}
            className="rounded-3xl border border-white/10 bg-[#0c0c0e] p-6"
          >
            <Radio className="mb-5 h-6 w-6 text-cyan-300" />
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => (
          <div
            key={tool}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-zinc-300"
          >
            <Wand2 className="h-4 w-4 shrink-0 text-cyan-300" />
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
}
