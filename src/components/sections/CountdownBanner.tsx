import React, { useEffect, useMemo, useState } from "react";
import { Heart } from "lucide-react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: Date): Countdown {
  const now = new Date();
  const diff = Math.max(0, target.getTime() - now.getTime());

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

interface Props {
  // ISO date string for the wedding date
  targetDate?: string;
  // Readable label to show under title
  dateLabel?: string;
}

const CountdownBanner: React.FC<Props> = ({
  targetDate = "2025-09-15T00:00:00",
  dateLabel = "Sep 15, 2025",
}) => {
  const target = useMemo(() => new Date(targetDate), [targetDate]);
  const [timeLeft, setTimeLeft] = useState<Countdown>(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section aria-labelledby="countdown-title" className="container px-4 sm:px-6 my-8 sm:my-12 md:my-16 lg:my-20">
      {/* Decorative top flourish */}
      <div className="mb-3 sm:mb-4 flex justify-center" aria-hidden>
        <svg width="320" height="16" viewBox="0 0 640 24" fill="none" className="sm:w-[480px] sm:h-[20px] md:w-[640px] md:h-[24px]">
          <path d="M5 12 C 60 2, 100 22, 180 12 C 260 2, 300 22, 380 12 C 460 2, 500 22, 635 12" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      <div className="rounded-xl sm:rounded-2xl border border-accent/50 bg-accent/20 px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:py-14 text-center">
        <h2 id="countdown-title" className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-script text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground">
          <span>We</span>
          <Heart size={16} className="sm:w-[18px] sm:h-[18px] text-accent" aria-hidden />
          <span>Are</span>
          <Heart size={16} className="sm:w-[18px] sm:h-[18px] text-accent" aria-hidden />
          <span>Getting</span>
          <Heart size={16} className="sm:w-[18px] sm:h-[18px] text-accent" aria-hidden />
          <span>Married</span>
        </h2>

        <p className="mt-2 sm:mt-3 font-display text-xs sm:text-sm md:text-base text-muted-foreground">Date : {dateLabel}</p>

        <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-10">
          <div>
            <div className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-accent">{timeLeft.days}</div>
            <div className="mt-1 font-display italic text-xs sm:text-sm md:text-base text-muted-foreground">Days</div>
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-accent">{pad(timeLeft.hours)}</div>
            <div className="mt-1 font-display italic text-xs sm:text-sm md:text-base text-muted-foreground">Hours</div>
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-accent">{pad(timeLeft.minutes)}</div>
            <div className="mt-1 font-display italic text-xs sm:text-sm md:text-base text-muted-foreground">Mins</div>
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-accent">{pad(timeLeft.seconds)}</div>
            <div className="mt-1 font-display italic text-xs sm:text-sm md:text-base text-muted-foreground">Secs</div>
          </div>
        </div>
      </div>

      {/* Decorative bottom flourish */}
      <div className="mt-3 sm:mt-4 flex justify-center" aria-hidden>
        <svg width="320" height="16" viewBox="0 0 640 24" fill="none" className="sm:w-[480px] sm:h-[20px] md:w-[640px] md:h-[24px]">
          <path d="M5 12 C 60 22, 100 2, 180 12 C 260 22, 300 2, 380 12 C 460 22, 500 2, 635 12" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>
    </section>
  );
};

export default CountdownBanner;
