import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const useCases = [
  {
    id: "roofing",
    industry: "Roofing Companies",
    description:
      "Capture leads 24/7, schedule roof inspections instantly, and never miss an emergency call—even during storms.",
    gradient: "from-purple-500/20 to-pink-500/20",
    audioUrl: "/audio/roofing-demo.mp3",
  },
  {
    id: "dental",
    industry: "Dental Clinics",
    description:
      "Automate appointment bookings, send reminders, handle cancellations, and answer common patient questions.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    audioUrl: "/audio/dental-demo.mp3",
  },
  {
    id: "landscaping",
    industry: "Landscaping Services",
    description:
      "Schedule lawn care appointments, provide instant quotes, and manage seasonal service bookings automatically.",
    gradient: "from-cyan-500/20 to-green-500/20",
    audioUrl: "/audio/landscaping-demo.mp3",
  },
];

export const UseCasesSection = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const handlePlayAudio = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
      // In production, pause the audio
    } else {
      setPlayingId(id);
      // In production, play the audio
      console.log(`Playing audio for ${id}`);
    }
  };

  return (
    <section id="use-cases" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Use Cases</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vaxen adapts to any industry where missed calls mean missed revenue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div
                className={`relative rounded-2xl border border-border bg-gradient-to-br ${useCase.gradient} overflow-hidden h-[400px] flex flex-col p-8`}
              >
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">{useCase.industry}</h3>
                  <p className="text-muted-foreground mb-8">{useCase.description}</p>
                </div>

                {/* Play Button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => handlePlayAudio(useCase.id)}
                    className="w-16 h-16 rounded-full bg-primary hover:bg-primary-glow flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                  >
                    {playingId === useCase.id ? (
                      <Pause className="w-8 h-8 text-primary-foreground" fill="currentColor" />
                    ) : (
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    )}
                  </button>
                </div>

                {/* Audio visualization placeholder */}
                {playingId === useCase.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute bottom-4 left-8 right-8 flex gap-1 items-center justify-center h-12"
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
