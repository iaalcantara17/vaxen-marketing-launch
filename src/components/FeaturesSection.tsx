import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Phone, Clock, Globe, Calendar, Target } from "lucide-react";
import { GridBackground } from "./GridBackground";

const features = [
  {
    id: "call-answering",
    title: "24/7 AI Call Answering",
    description:
      "Your AI phone agent never sleeps, never takes breaks, and never misses a call. Whether it's 3 AM or during peak hours, every customer gets instant, professional attention from our AI voice assistant.",
    icon: Phone,
    preview: {
      caption: "Always available, always professional",
    },
  },
  {
    id: "zero-hold",
    title: "Zero Hold Time",
    description:
      "No more frustrated customers waiting on hold. Our AI voice agents answer instantly, handle multiple calls simultaneously, and provide immediate responses to customer inquiries.",
    icon: Clock,
    preview: {
      caption: "Instant answers, zero wait time",
    },
  },
  {
    id: "multilingual",
    title: "Multilingual AI Agents",
    description:
      "Speak to customers in their preferred language. Our AI phone agents seamlessly communicate in multiple languages with native-level fluency and cultural awareness.",
    icon: Globe,
    preview: {
      caption: "Communicate globally, connect locally",
    },
  },
  {
    id: "booking",
    title: "AI Appointment Booking & Reminders",
    description:
      "Automate your scheduling workflow with AI. Our virtual receptionist handles appointments, sends reminders, and manages cancellations without any human intervention.",
    icon: Calendar,
    preview: {
      caption: "Smart scheduling that works for you",
    },
  },
  {
    id: "qualification",
    title: "Intelligent Lead Qualification",
    description:
      "AI-powered lead scoring and qualification. Our AI call answering service asks the right questions, identifies hot prospects, and routes qualified leads directly to your sales team.",
    icon: Target,
    preview: {
      caption: "Focus on leads that matter",
    },
  },
];

export const FeaturesSection = () => {
  const [openFeature, setOpenFeature] = useState(features[0].id);

  const activeFeature = features.find((f) => f.id === openFeature) || features[0];
  const IconComponent = activeFeature.icon;

  return (
    <section id="ai-call-answering-features" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      <GridBackground />
      
      <div className="container mx-auto max-w-7xl relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          AI Voice Assistant Features
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Accordion */}
          <div className="space-y-3">
            {features.map((feature, index) => {
              const isOpen = openFeature === feature.id;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`border border-border rounded-xl bg-card overflow-hidden transition-colors ${
                    isOpen ? "bg-primary/5" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpenFeature(feature.id)}
                    className={`w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-all ${
                      isOpen ? "border-l-4 border-primary" : ""
                    }`}
                  >
                    <span className="text-lg font-semibold">{feature.title}</span>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-muted-foreground">
                          {feature.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 self-start"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={openFeature}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl bg-gradient-to-br from-primary/5 via-blue-500/5 to-cyan-500/5 p-12 aspect-square flex flex-col items-center justify-center text-center overflow-hidden"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-blue-500/30 to-cyan-500/30 rounded-2xl blur-xl animate-pulse" />
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <IconComponent className="w-24 h-24 text-primary mb-6" />
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="text-xl font-medium text-foreground"
                  >
                    {activeFeature.preview.caption}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
