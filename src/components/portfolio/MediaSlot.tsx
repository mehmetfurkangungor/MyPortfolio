import { Play } from "lucide-react";
import type { Project } from "@/data/portfolioData";

export function MediaSlot({ project }: { project: Project }) {
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
      <p className="px-8 text-sm font-medium text-zinc-300">
        Drive medya alanı
      </p>
      <p className="mt-2 max-w-52 px-5 text-xs leading-5 text-zinc-500">
        Link eklenince video veya görsel burada gömülü görünecek.
      </p>
    </div>
  );
}
