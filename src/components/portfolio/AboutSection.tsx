import { BadgeCheck, GraduationCap } from "lucide-react";
import { profile } from "@/data/siteContent";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-8"
    >
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
          kampanyaları ve marka iletişimi üzerine kendimi geliştirdim. Hem okul
          projelerinde hem de ajans ve marka çalışmalarında çekim, kurgu, içerik
          planlama ve sosyal medya tarafında aktif olarak yer aldım.
        </p>
        <p className="mt-5 text-lg leading-9 text-zinc-300">
          Sadece video çekmek ya da edit yapmak değil; bir içeriğin neden
          üretildiğini, hangi kitleye hitap ettiğini, sosyal medyada nasıl
          dikkat çekeceğini ve markaya nasıl katkı sağlayacağını düşünerek
          çalışıyorum.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {["Çekim", "Kurgu", "Sosyal Medya"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-black/25 p-4"
            >
              <BadgeCheck className="mb-4 h-5 w-5 text-cyan-300" />
              <p className="font-medium text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
