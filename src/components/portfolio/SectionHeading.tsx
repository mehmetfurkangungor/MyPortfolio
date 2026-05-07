export function SectionHeading({
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
