import bgImage from "@/assets/blessing-bg.jpg";

const CrescentDivider = () => (
  <div className="relative mx-auto flex items-center justify-center gap-4 text-muted-foreground">
    <span className="h-px w-10 bg-border" aria-hidden />
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden
      className="text-foreground/60"
    >
      <path
        d="M14.5 3.5a8 8 0 1 0 6 13.9 7 7 0 1 1-6-13.9Z"
        fill="currentColor"
      />
    </svg>
    <span className="h-px w-10 bg-border" aria-hidden />
  </div>
);

const BlessingQuote = () => {
  return (
    <section aria-labelledby="blessing-title" className="relative isolate bg-background">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={bgImage}
          alt="Soft floral background with subtle leaves"
          loading="lazy"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/80" aria-hidden />
      </div>

      <div className="container px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
        <header className="text-center mb-4 sm:mb-6 md:mb-8">
          <CrescentDivider />
        </header>

        <div className="mx-auto max-w-5xl text-center">
          <h2 id="blessing-title" className="sr-only">Wedding Blessing Quote</h2>
          <blockquote className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-snug text-foreground">
            <p>
              {"Barak Allahu laka wa baraka alaik, wa jama'a baynakuma fee khayr"}
            </p>
          </blockquote>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto italic leading-relaxed">
            "May Allah bless this union with love, mercy, and tranquility, and make it a source of goodness in this life and the next."
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlessingQuote;