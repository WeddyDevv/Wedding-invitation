import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ringImg from "@/assets/when-where-ring.jpg";
import coupleImg from "@/assets/couple-embrace.jpg";
import nikahImg from "@/assets/nikah.jpg";

const FloralDivider = () => (
  <div className="flex justify-center py-2" aria-hidden>
    <svg width="56" height="18" viewBox="0 0 56 18" fill="none">
      <path d="M1 9 H18" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="28" cy="9" r="3.5" fill="hsl(var(--primary))" opacity="0.6" />
      <path d="M38 9 H55" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M26 7 C24 5, 22 5, 20 7" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" />
      <path d="M30 7 C32 5, 34 5, 36 7" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" />
    </svg>
  </div>
);

const WhenWhere: React.FC = () => {
  return (
    <section
      id="when-and-where"
      aria-labelledby="when-where-title"
      className="container px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <header className="text-center">
        <p className="font-display italic text-xs sm:text-sm text-muted-foreground">Our Wedding</p>
        <h2
          id="when-where-title"
          className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        >
          When & Where
        </h2>
        <FloralDivider />
      </header>

      {/* Static 3 Cards */}
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <EventCard
          title="Nikah Ceremony"
          datetime="Monday, 12 Apr, 2025 | After Namaz-e-Asr"
          address="Wazir Ali Masjid, Lal Darwaza, Hyderabad"
          img={nikahImg}
        />
        <EventCard
          title="Reception"
          datetime="Monday, 12 Apr, 2025 | 1:00 PM – 2:30 PM"
          address="4857 Washington Ave. Manchester, Kentucky 39495"
          img={ringImg}
        />
        <EventCard
          title="Dinner"
          datetime="Monday, 12 Apr, 2025 | 7:00 PM – 10:00 PM"
          address="4857 Washington Ave. Manchester, Kentucky 39495"
          img={coupleImg}
        />
      </div>
    </section>
  );
};

const EventCard = ({
  title,
  datetime,
  address,
  img,
}: {
  title: string;
  datetime: string;
  address: string;
  img: string;
}) => (
  <Card className="overflow-hidden rounded-xl border-border bg-card/95 shadow-sm">
    <div className="relative h-48 w-full sm:h-56 md:h-64 lg:h-72">
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="font-display text-lg sm:text-xl text-foreground md:text-2xl">{title}</h3>
      <span className="mt-2 block h-0.5 w-12 rounded-full bg-accent" />

      <div className="mt-4 space-y-2 font-display text-xs sm:text-sm text-muted-foreground md:text-base">
        <p>{datetime}</p>
        <p>{address}</p>
      </div>
    </div>
  </Card>
);

export default WhenWhere;
