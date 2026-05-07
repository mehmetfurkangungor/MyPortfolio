import { Mail } from "lucide-react";
import { profile } from "@/data/siteContent";

export function Header() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          className="text-sm font-semibold uppercase tracking-[0.22em] text-white"
        >
          {profile.name}
        </a>
        <div className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
          <a href="#about" className="transition hover:text-white">
            Hakkımda
          </a>
          <a href="#portfolio" className="transition hover:text-white">
            Portfolyo
          </a>
          <a href="#experience" className="transition hover:text-white">
            Deneyim
          </a>
          <a href="#equipment" className="transition hover:text-white">
            Ekipman
          </a>
          <a href="#contact" className="transition hover:text-white">
            İletişim
          </a>
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
  );
}
