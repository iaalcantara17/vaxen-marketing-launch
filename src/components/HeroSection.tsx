import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { HeroCallCard } from "./HeroCallCard";

const headlines = [
  "Never Miss a Lead Again.",
  "Turn Every Call Into Revenue.",
  "AI Voice Assistant, Always On.",
];

const subheadlines = [
  "24/7 Voice Assistant.",
  "AI voice agents that answer every call, qualify leads, and book appointments while you sleep.",
  "Human-like conversations that work around the clock.",
];

export const HeroSection = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [subheadlineIndex, setSubheadlineIndex] = useState(1);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Headline rotation
    const headlineInterval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(headlineInterval);
  }, []);

  useEffect(() => {
    // GSAP breathing gradient background animation
    if (backgroundRef.current) {
      const bars = backgroundRef.current.querySelectorAll(".gradient-bar");
      
      bars.forEach((bar, index) => {
        gsap.to(bar, {
          scaleY: 1.3,
          scaleX: 1.1,
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3,
        });
      });
    }
  }, []);

  const scrollToDemo = () => {
    document.getElementById("calendly")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToUseCases = () => {
    document.getElementById("use-cases")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Breathing gradient background */}
      <div ref={backgroundRef} className="absolute inset-0 -z-10">
        <div className="gradient-bar absolute left-[10%] top-0 bottom-0 w-24 bg-gradient-to-b from-primary/10 via-primary/20 to-primary/10 blur-3xl" />
        <div className="gradient-bar absolute left-[30%] top-0 bottom-0 w-32 bg-gradient-to-b from-blue-500/10 via-blue-500/20 to-blue-500/10 blur-3xl" />
        <div className="gradient-bar absolute left-[50%] top-0 bottom-0 w-28 bg-gradient-to-b from-primary/15 via-primary/25 to-primary/15 blur-3xl" />
        <div className="gradient-bar absolute left-[70%] top-0 bottom-0 w-36 bg-gradient-to-b from-cyan-500/10 via-cyan-500/20 to-cyan-500/10 blur-3xl" />
        <div className="gradient-bar absolute left-[85%] top-0 bottom-0 w-24 bg-gradient-to-b from-primary/10 via-primary/20 to-primary/10 blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Animated Headline */}
            <div className="min-h-32 md:min-h-40 mb-8 flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={headlineIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
                >
                  {headlines[headlineIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Subheadline */}
            <AnimatePresence mode="wait">
              <motion.p
                key={subheadlineIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                {subheadlines[subheadlineIndex]}
              </motion.p>
            </AnimatePresence>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <Button
                onClick={scrollToDemo}
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary-glow transition-colors shadow-lg hover:shadow-xl"
              >
                Book a Demo
              </Button>
              <button
                onClick={scrollToUseCases}
                className="text-lg text-primary hover:text-primary-glow underline-offset-4 hover:underline transition-colors"
              >
                Listen to a sample call →
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Floating Call Card */}
          <HeroCallCard />
        </div>
      </div>
    </section>
  );
};
