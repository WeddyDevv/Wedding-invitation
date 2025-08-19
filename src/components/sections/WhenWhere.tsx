import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ringImg from "@/assets/when-where-ring.jpg";
import coupleImg from "@/assets/couple-embrace.jpg";
import nikahImg from "@/assets/nikah.jpg"; // 👈 add nikah image

interface EventItem {
  key: "nikah" | "reception" | "dinner"; // 👈 fix: include nikah
  title: string;
  datetime: string;
  address: string;
  phone: string;
}

const EVENTS: EventItem[] = [
  {
    key: "nikah",
    title: "Nikah Ceremony",
    datetime: "Monday, 12 Apr, 2022 | 11:00 AM – 12:30 PM",
    address: "Central Jame Masjid, 12 Mosque Road, Manchester, Kentucky 39495",
    phone: "+1 234-999-1111",
  },
  {
    key: "reception",
    title: "The Reception",
    datetime: "Monday, 12 Apr, 2022 | 1:00 PM – 2:30 PM",
    address: "4857 Washington Ave. Manchester, Kentucky 39495",
    phone: "+1 234-687-8910",
  },
  {
    key: "dinner",
    title: "The Dinner",
    datetime: "Monday, 12 Apr, 2022 | 7:00 PM – 10:00 PM",
    address: "4857 Washington Ave. Manchester, Kentucky 39495",
    phone: "+1 234-687-8910",
  },
];

const EVENT_MEDIA: Record<EventItem["key"], { src: string; alt: string }> = {
  nikah: { src: nikahImg, alt: "Mosque wedding ceremony" },
  reception: { src: ringImg, alt: "Bride’s hand with wedding ring holding white orchids" },
  dinner: { src: coupleImg, alt: "Bride and groom embracing" },
};



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
  const [index, setIndex] = React.useState(0);
  const event = EVENTS[index];
  const media = EVENT_MEDIA[event.key];

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

      {/* Event Switch Tabs */}
      <div className="mt-6 flex justify-center gap-4">
        {EVENTS.map((e, i) => (
          <button
            key={e.key}
            onClick={() => setIndex(i)}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-colors",
              index === i ? "bg-accent text-white" : "bg-muted text-muted-foreground hover:bg-accent/20"
            )}
          >
            {e.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        className={cn(
          "grid overflow-hidden rounded-lg border border-border bg-background mt-6 sm:mt-8 md:mt-12",
          // 👇 reverse order if it's dinner
          event.key === "dinner" ? "md:grid-cols-[1fr_1.2fr]" : "md:grid-cols-[1.2fr_1fr]"
        )}
      >
        {/* Image (position depends on event type) */}
        {event.key === "reception" ? (
          <>
            {/* Reception -> Image Left */}
            <div className="relative h-48 w-full sm:h-56 md:h-[380px] lg:h-[420px]">
              <img
                key={event.key}
                src={media.src}
                alt={media.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover animate-[fade-in_0.5s_ease-out]"
              />
            </div>
            <EventCard event={event} />
          </>
        ) : (
          <>
            {/* Dinner -> Card Left, Image Right */}
            <EventCard event={event} />
            <div className="relative h-48 w-full sm:h-56 md:h-[380px] lg:h-[420px]">
              <img
                key={event.key}
                src={media.src}
                alt={media.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover animate-[fade-in_0.5s_ease-out]"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const EventCard = ({ event }: { event: EventItem }) => (
  <div className="p-3 sm:p-4 md:p-0 md:flex md:items-center">
    <Card className="mx-auto w-full max-w-[520px] rounded-xl border-border bg-card/95 p-4 sm:p-6 shadow-sm md:mr-6 md:p-8">
      <div key={event.key} className="animate-enter" aria-live="polite">
        <h3 className="font-display text-lg sm:text-xl text-foreground md:text-2xl">{event.title}</h3>
        <span className="mt-2 block h-0.5 w-12 rounded-full bg-accent" />

        <div className="mt-4 sm:mt-5 space-y-2 sm:space-y-3 font-display text-xs sm:text-sm text-muted-foreground md:text-base">
          <p>{event.datetime}</p>
          <p>{event.address}</p>
          <p>{event.phone}</p>
        </div>

        <div className="mt-4 sm:mt-6">
          <a href="#" className="text-sm sm:text-base text-accent underline-offset-4 hover:underline">
            See Location
          </a>
        </div>
      </div>
    </Card>
  </div>
);

export default WhenWhere;
