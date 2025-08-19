import React from "react";
import { Heart } from "lucide-react";
import ArchImage from "@/components/hero/ArchImage";
import coupleImg from "@/assets/quran1.jpg";
import brideImg from "@/assets/quran2.png";
import groomImg from "@/assets/quran3.jpg";

const items = [
  {
    date: "Guidance from Allah",
    title: "Nikah – A Sacred Bond",
    verse: "And We created you in pairs.",
    reference: "Qur'an 78:8",
    text:
      "Nikah is not just a contract, but a divine bond that completes half of faith, bringing peace, love, and protection between two souls.",
    image: coupleImg,
    alt: "A couple holding hands with a soft glowing background, symbolizing new beginnings",
    side: "left" as const,
  },
  {
    date: "Guidance from Allah",
    title: "Love & Mercy in Marriage",
    verse: "And among His signs is that He created for you spouses from among yourselves, that you may find tranquility in them, and He placed between you love and mercy. Indeed in that are signs for people who reflect.",
    reference: "Qur'an 30:21",
    text:
      "Marriage is built on compassion, care, and mercy — a relationship where two hearts find peace with each other.",
    image: brideImg,
    alt: "A bride and groom smiling together, symbolizing affection and harmony",
    side: "right" as const,
  },
  {
    date: "Guidance from Allah",
    title: "Trust & Righteousness",
    verse: "They (your wives) are your garment, and you are their garment.",
    reference: "Qur'an 2:187",
    text:
      "Spouses are a covering and protection for one another — in dignity, honor, and support. Together, they walk in righteousness, supporting each other in faith and life.",
    image: groomImg,
    alt: "A couple standing together in unity, showing partnership and closeness",
    side: "left" as const,
  },
];

const StoryTimeline: React.FC = () => {
  return (
    <section aria-labelledby="story-title" className="container relative px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
      <header className="text-center">
        <p className="font-display italic text-xs sm:text-sm text-muted-foreground">Blessed Union</p>
        <h2 id="story-title" className="mt-1 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Our Story in the Light of the Qur'an</h2>
        
        {/* Islamic decorative pattern */}
        <div className="mt-3 sm:mt-4 flex justify-center">
          <svg width="100" height="25" viewBox="0 0 120 30" fill="none" className="sm:w-[120px] sm:h-[30px] text-accent">
            {/* Crescent moon */}
            <path d="M15 15 A 8 8 0 1 1 15 15.1 A 6 6 0 1 0 15 15" fill="currentColor" opacity="0.6" />
            {/* Star */}
            <path d="M60 8 L62 14 L68 14 L63 18 L65 24 L60 20 L55 24 L57 18 L52 14 L58 14 Z" fill="currentColor" opacity="0.7" />
            {/* Floral pattern */}
            <path d="M105 15 Q110 10 115 15 Q110 20 105 15" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
            <path d="M25 15 Q30 10 35 15 Q30 20 25 15" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
          </svg>
        </div>
      </header>

      {/* Center vertical line - hidden on mobile */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 sm:top-24 md:top-28 bottom-0 -translate-x-1/2 w-px bg-border hidden md:block"
        aria-hidden
      />

      <div className="mt-8 sm:mt-10 space-y-8 sm:space-y-10 md:space-y-4">
        {items.map((item, idx) => (
          <article
            key={item.title}
            className="relative grid items-center gap-6 sm:gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 py-6 sm:py-8 md:py-10"
          >
            {/* Heart marker - hidden on mobile */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 hidden md:block" aria-hidden>
              <div className="grid h-8 w-8 lg:h-9 lg:w-9 place-items-center rounded-full bg-background ring-2 ring-accent shadow-sm">
                <Heart size={14} className="lg:w-4 lg:h-4 text-accent" />
              </div>
            </div>

            {/* Left column */}
            <div className={item.side === "left" ? "order-1" : "order-2 md:order-1"}>
              {item.side === "left" ? (
                <div className="w-full max-w-md mx-auto md:max-w-none">
                  <ArchImage src={item.image} alt={item.alt} />
                </div>
              ) : (
                <div className="max-w-xl">
                  <p className="font-display text-xs tracking-wide text-muted-foreground">{item.date}</p>
                  <h3 className="mt-2 font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">{item.title}</h3>
                  
                  {/* Qur'an Verse */}
                  <blockquote className="mt-3 sm:mt-4 p-3 sm:p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                    <p className="italic text-foreground font-medium leading-relaxed text-sm sm:text-base">"{item.verse}"</p>
                    <cite className="block mt-2 text-xs sm:text-sm text-muted-foreground font-display">— {item.reference}</cite>
                  </blockquote>
                  
                  <p className="mt-3 sm:mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">{item.text}</p>
                </div>
              )}
            </div>

            {/* Right column */}
            <div className={item.side === "left" ? "order-2" : "order-1 md:order-2"}>
              {item.side === "left" ? (
                <div className="max-w-xl md:ml-auto">
                  <p className="font-display text-xs tracking-wide text-muted-foreground">{item.date}</p>
                  <h3 className="mt-2 font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">{item.title}</h3>
                  
                  {/* Qur'an Verse */}
                  <blockquote className="mt-3 sm:mt-4 p-3 sm:p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                    <p className="italic text-foreground font-medium leading-relaxed text-sm sm:text-base">"{item.verse}"</p>
                    <cite className="block mt-2 text-xs sm:text-sm text-muted-foreground font-display">— {item.reference}</cite>
                  </blockquote>
                  
                  <p className="mt-3 sm:mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">{item.text}</p>
                </div>
              ) : (
                <div className="w-full max-w-md mx-auto md:max-w-none">
                  <ArchImage src={item.image} alt={item.alt} />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StoryTimeline;
