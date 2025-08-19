import { ArrowRight } from "lucide-react";
import coupleImg from "@/assets/haldi.avif";
import brideImg from "@/assets/mahendi.webp";
import ringImg from "@/assets/Sachak Ritual.jpg";

const FloralDivider = () => (
  <svg
    width="40"
    height="24"
    viewBox="0 0 40 24"
    role="img"
    aria-label="floral divider"
    className="mx-auto"
  >
    <g fill="none" strokeWidth="1.5" stroke="hsl(var(--primary))">
      <path d="M1 12 C8 12, 8 12, 12 12" />
      <path d="M39 12 C32 12, 32 12, 28 12" />
    </g>
    <g transform="translate(20,12)">
      <ellipse rx="6" ry="4" fill="hsl(var(--accent))" opacity="0.25" />
      <circle cx="0" cy="0" r="2" fill="hsl(var(--accent))" />
      <path d="M-6 0 Q -8 -3 -10 -4" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
      <path d="M6 0 Q 8 -3 10 -4" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
    </g>
  </svg>
);

const ceremonies = [
  {
    id: 1,
    image: coupleImg,
    alt: "Haldi ceremony with turmeric application and bright yellow decorations",
    title: "Haldi Ceremony",
    date: "20 Feb 2025",
    description: "A vibrant celebration where turmeric paste is applied to the bride and groom, symbolizing purification and blessings.",
  },
  {
    id: 2,
    image: brideImg,
    alt: "Bride's hands adorned with intricate henna patterns during Mehendi ceremony",
    title: "Mehendi Night",
    date: "21 Feb 2025", 
    description: "The bride's hands adorned with intricate henna patterns, surrounded by music, dance, and joyful laughter.",
  },
  {
    id: 3,
    image: ringImg,
    alt: "Traditional Sachak ritual with family members exchanging gifts and blessings",
    title: "Sachak Ritual",
    date: "22 Feb 2025",
    description: "A heartfelt tradition of exchanging gifts, blessings, and love from family members before the wedding.",
  },
];

const brands = ["WEDDING", "PURE", "BRIDE", "SweetMemories", "Ceremonies"];

const LatestNews = () => {
  return (
    <section aria-labelledby="latest-news-title" className="bg-background">
      <div className="container px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
        <header className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          <p className="font-display italic text-xs sm:text-sm text-muted-foreground">Celebrating traditions with love and joy</p>
          <h2
            id="latest-news-title"
            className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight"
          >
            Our Pre-Wedding Ceremonies
          </h2>
          <div className="mt-3 sm:mt-4">
            <FloralDivider />
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {ceremonies.map((ceremony) => (
            <article
              key={ceremony.id}
              className="rounded-lg border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-t-lg">
                <img
                  src={ceremony.image}
                  alt={ceremony.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-2">{ceremony.title}</h3>
                <p className="text-xs sm:text-sm text-accent font-medium mb-2">{ceremony.date}</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{ceremony.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 opacity-70 text-muted-foreground">
          {brands.map((b) => (
            <span
              key={b}
              className="font-display tracking-[0.1em] sm:tracking-[0.2em] text-xs md:text-sm uppercase"
              aria-label={`brand ${b}`}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
