import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { FloatingShapes } from "./FloatingShapes";

const useCases = [
  {
    id: "roofing",
    industry: "Roofing Companies",
    description:
      "Capture leads 24/7 with our AI call answering service, schedule roof inspections instantly, and never miss an emergency call—even during storms.",
    gradient: "from-purple-500/20 to-pink-500/20",
    audioUrl: "/audio/roofing-demo.mp3",
  },
  {
    id: "dental",
    industry: "Dental Clinics",
    description:
      "Automate appointment bookings with AI, send reminders, handle cancellations, and answer common patient questions with our virtual receptionist.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    audioUrl: "/audio/dental-demo.mp3",
  },
  {
    id: "landscaping",
    industry: "Landscaping Services",
    description:
      "Schedule lawn care appointments, provide instant quotes, and manage seasonal service bookings automatically with AI voice assistants.",
    gradient: "from-cyan-500/20 to-green-500/20",
    audioUrl: "/audio/landscaping-demo.mp3",
  },
];

export const UseCasesSection = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentAudioId = useRef<string | null>(null);

  const handlePlayAudio = (id: string, audioUrl: string) => {
    // If clicking the same card that's currently loaded
    if (currentAudioId.current === id && audioRef.current) {
      if (playingId === id) {
        // Currently playing, so pause (don't reset)
        audioRef.current.pause();
        setPlayingId(null);
      } else {
        // Currently paused, so resume
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
        setPlayingId(id);
      }
    } else {
      // Different card or first time - stop current and create new audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      
      // Create and play new audio
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      currentAudioId.current = id;
      
      // Handle audio end event
      audio.addEventListener("ended", () => {
        setPlayingId(null);
        currentAudioId.current = null;
      });
      
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
        setPlayingId(null);
      });
      
      setPlayingId(id);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <section id="ai-phone-agent-use-cases" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient band */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 pointer-events-none" aria-hidden="true" />
      <FloatingShapes />
      
      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Use Cases</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vaxen's AI voice assistants adapt to any industry where missed calls mean missed revenue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div
                className={`relative rounded-2xl border border-border bg-card backdrop-blur-sm overflow-hidden h-[420px] flex flex-col p-8 shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-50 group-hover:opacity-70 transition-opacity`} />
                
                {/* Content */}
                <div className="flex-1 flex flex-col relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{useCase.industry}</h3>
                  <p className="text-muted-foreground mb-6">{useCase.description}</p>
                </div>

                {/* Audio visualization placeholder */}
                {playingId === useCase.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-1 items-center justify-center h-12 mb-6"
                  >
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0.5 }}
                        animate={{ scaleY: [0.5, 1.5, 0.5] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                        className="w-1 bg-primary rounded-full"
                        style={{ height: "100%" }}
                      />
                    ))}
                  </motion.div>
                )}

                {/* Play Button */}
                <div className="flex justify-center relative z-10">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePlayAudio(useCase.id, useCase.audioUrl)}
                    className="w-16 h-16 rounded-full bg-primary hover:bg-primary-glow flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl relative"
                  >
                    {/* Pulsing ring when playing */}
                    {playingId === useCase.id && (
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border-2 border-primary"
                      />
                    )}
                    {playingId === useCase.id ? (
                      <Pause className="w-8 h-8 text-primary-foreground" fill="currentColor" />
                    ) : (
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
