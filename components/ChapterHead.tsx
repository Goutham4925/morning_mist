import Reveal from "./Reveal";

type ChapterHeadProps = {
  time: string; // "08:10" — the hour this chapter belongs to in the day
  script?: string; // optional handwritten interjection
  title: React.ReactNode;
  lede?: string;
  dark?: boolean;
  align?: "left" | "center";
};

/**
 * Section header for the "one day at Mistwood" narrative.
 * Every chapter is stamped with its hour — the page reads as a day passing.
 */
export default function ChapterHead({
  time,
  script,
  title,
  lede,
  dark = false,
  align = "center",
}: ChapterHeadProps) {
  const alignCls =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex max-w-3xl flex-col ${alignCls}`}>
      <p
        className={`timestamp flex items-baseline gap-3 text-lg ${
          dark ? "text-bronzelight" : "text-bronze"
        }`}
      >
        <span aria-hidden className="inline-block h-px w-10 self-center bg-current opacity-60" />
        {time}
        <span aria-hidden className="inline-block h-px w-10 self-center bg-current opacity-60" />
      </p>

      {script && (
        <p
          aria-hidden
          className={`font-script mt-4 text-3xl sm:text-4xl ${
            dark ? "text-bronzelight/80" : "text-bronze/80"
          }`}
        >
          {script}
        </p>
      )}

      <h2
        className={`font-display mt-4 text-4xl font-light leading-[1.08] tracking-tight sm:text-6xl ${
          dark ? "text-fog" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {lede && (
        <p
          className={`mt-7 max-w-xl text-base font-normal leading-relaxed ${
            dark ? "text-sagemist/85" : "text-eucalyptus"
          }`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
