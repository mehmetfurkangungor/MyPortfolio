import { ArrowRight, AtSign, Link, Mail, Video } from "lucide-react";
import { profile } from "@/data/siteContent";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-8"
    >
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
            <a
              aria-label="Instagram"
              href="#contact"
              className="rounded-full border border-white/10 p-3 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              <AtSign className="h-5 w-5" />
            </a>
            <a
              aria-label="LinkedIn"
              href="#contact"
              className="rounded-full border border-white/10 p-3 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              <Link className="h-5 w-5" />
            </a>
            <a
              aria-label="Video portfolio"
              href="#contact"
              className="rounded-full border border-white/10 p-3 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              <Video className="h-5 w-5" />
            </a>
          </div>
        </div>
        <a
          href="#contact"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 text-sm font-semibold text-black transition hover:bg-white"
        >
          İletişim Bilgileri Eklenecek
          <Mail className="h-4 w-4" />
        </a>
      </div>
      <form className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-zinc-400">
            Ad Soyad
            <input
              className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-cyan-300"
              placeholder="Adınız"
            />
          </label>
          <label className="space-y-2 text-sm text-zinc-400">
            E-posta
            <input
              className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-cyan-300"
              placeholder="mail@ornek.com"
            />
          </label>
        </div>
        <label className="mt-5 block space-y-2 text-sm text-zinc-400">
          Mesaj
          <textarea
            className="min-h-36 w-full rounded-2xl border border-white/10 bg-black/30 p-4 text-white outline-none transition focus:border-cyan-300"
            placeholder="Proje, çekim ya da içerik ihtiyacınızı yazın."
          />
        </label>
        <button
          type="button"
          className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-cyan-200"
        >
          Form Taslağı
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </section>
  );
}
