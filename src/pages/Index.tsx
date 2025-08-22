import { Facebook, Twitter, Instagram, Heart, ShoppingCart, Search } from "lucide-react";
import TeardropImage from "@/components/hero/TeardropImage";
import OvalImage from "@/components/hero/OvalImage";
import groomImg from "@/assets/groom-portrait.jpg";
import coupleImg from "@/assets/weds.png";
import brideImg from "@/assets/bride-portrait.jpg";
import CountdownBanner from "@/components/sections/CountdownBanner";
import StoryTimeline from "@/components/sections/StoryTimeline";
import WhenWhere from "@/components/sections/WhenWhere";
import LatestNews from "@/components/sections/LatestNews";
import WeddingMenu from "@/components/sections/WeddingMenu";
import BlessingQuote from "@/components/sections/BlessingQuote";






const Nav = () => (
  <header className="w-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-12">
    {/* Decorative background pattern */}
    <div className="absolute inset-0 opacity-5">
      <svg width="100%" height="100%" viewBox="0 0 800 200" fill="none" className="w-full h-full">
        <path d="M0 100 Q200 50 400 100 T800 100" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" opacity="0.3"/>
        <path d="M0 120 Q200 70 400 120 T800 120" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" opacity="0.2"/>
      </svg>
    </div>
    
    <div className="container relative z-10 px-4 sm:px-6">
      <div className="text-center">
        {/* Decorative hearts */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
          <Heart size={14} className="sm:w-4 sm:h-4 text-accent animate-pulse" fill="hsl(var(--accent))" />
          <svg width="30" height="15" viewBox="0 0 40 20" fill="none" className="sm:w-10 sm:h-5 text-accent">
            <path d="M5 10 Q12 5 20 10 Q28 5 35 10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="20" cy="10" r="2" fill="currentColor" opacity="0.6"/>
          </svg>
          <Heart size={14} className="sm:w-4 sm:h-4 text-accent animate-pulse" fill="hsl(var(--accent))" />
        </div>

        {/* Main heading with bismillah */}
        <div className="space-y-1 sm:space-y-2">
          <h1 className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary leading-relaxed">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </h1>
          <p className="font-display text-xs sm:text-sm md:text-base text-muted-foreground tracking-[0.1em] sm:tracking-[0.2em] uppercase">
            Wedding Ceremony
          </p>
        </div>

        {/* Decorative flourish */}
        <div className="mt-4 sm:mt-6 flex justify-center">
          <svg width="150" height="30" viewBox="0 0 200 40" fill="none" className="sm:w-[200px] sm:h-10 text-accent">
            {/* Main curve */}
            <path d="M10 20 Q50 10 100 20 Q150 10 190 20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            {/* Center ornament */}
            <circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.8"/>
            <path d="M100 17 L103 20 L100 23 L97 20 Z" fill="currentColor" opacity="0.6"/>
            {/* Side flourishes */}
            <path d="M20 20 Q30 15 40 20 Q30 25 20 20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7"/>
            <path d="M160 20 Q170 15 180 20 Q170 25 160 20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7"/>
            {/* Small hearts */}
            <path d="M15 18 Q17 16 19 18 Q17 20 15 18" fill="currentColor" opacity="0.5"/>
            <path d="M181 18 Q183 16 185 18 Q183 20 181 18" fill="currentColor" opacity="0.5"/>
          </svg>
        </div>
      </div>
    </div>
  </header>
);

// const Socials = () => (
//   <div className="mt-3 flex items-center justify-center gap-3 text-muted-foreground">
//     <a aria-label="Facebook" href="#"><Facebook size={14} /></a>
//     <a aria-label="Twitter" href="#"><Twitter size={14} /></a>
//     <a aria-label="Instagram" href="#"><Instagram size={14} /></a>
//   </div>
// );

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        {/* SEO: Single H1 kept for semantics */}
        <h1 className="sr-only">Elegant Wedding Portfolio Hero</h1>

        <section className="container px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
            {/* Left: Groom */}
            <article className="flex flex-col items-center text-center order-1 md:order-1">
              <h2 className="mb-2 font-script text-xl sm:text-2xl md:text-[24px] lg:text-[26px] leading-none text-primary">Mohammed Hashim</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">S/O Mohammed Khasim</p>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">M.Com</p>
              <div className="mt-3 sm:mt-4 w-40 sm:w-48 md:w-56 lg:w-64">
                <TeardropImage src={groomImg} alt="Groom portrait" className="w-full h-auto" />
              </div>
            </article>

            {/* Center: Couple with oval and double outline */}
            <article className="flex flex-col items-center order-2 md:order-2">
              <div className="w-80 sm:w-96 md:w-[24rem] lg:w-[32rem]">
                <OvalImage src={coupleImg} alt="Bride and groom embracing" className="w-full h-auto" />
              </div>
            </article>

            {/* Right: Bride */}
            <article className="flex flex-col items-center text-center order-3 md:order-3">
              <div className="w-40 sm:w-48 md:w-56 lg:w-64">
                <TeardropImage src={brideImg} alt="Bride portrait" className="w-full h-auto" />
              </div>
              <h2 className="mt-4 sm:mt-6 mb-2 font-script text-xl sm:text-2xl md:text-[24px] lg:text-[26px] leading-none text-primary">Ayesha  Begum</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">D/O Mohammed Ali</p>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">Master of Science (MSc) </p>
            </article>
          </div>

          {/* Decorative divider with wedding-style swirl */}
          <div className="mt-10 sm:mt-12 md:mt-14 flex justify-center">
            <svg width="280" height="40" viewBox="0 0 420 60" fill="none" aria-hidden className="sm:w-[350px] sm:h-[50px] md:w-[420px] md:h-[60px]">
              <path d="M5 30 C 80 10, 120 50, 210 30 C 300 10, 340 50, 415 30" stroke="hsl(var(--accent))" strokeWidth="2" fill="none"/>
              <path d="M210 30 c -20 -10 -20 -30 0 -40 c 20 10 20 30 0 40 Z" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
        </section>

        {/* Countdown Banner Section */}
        <CountdownBanner />
        {/* Our Story Timeline Section */}
        <StoryTimeline />
        {/* When & Where Section */}
        <WhenWhere />
        {/* From Our Latest News Section */}
        <LatestNews />
        {/* Wedding Menu Section */}
        <WeddingMenu />
        {/* Blessing Quote Section */}
        <BlessingQuote />
      </main>
    </div>
  );
};

export default Index;
