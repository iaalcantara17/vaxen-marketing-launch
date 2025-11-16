import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Phone, Clock, Globe, Calendar, Target } from "lucide-react";

const features = [
  {
    id: "call-answering",
    title: "24/7 Call Answering",
    description:
      "Your AI agent never sleeps, never takes breaks, and never misses a call. Whether it's 3 AM or during peak hours, every customer gets instant, professional attention.",
    icon: Phone,
    preview: {
      caption: "Always available, always professional",
    },
  },
  {
    id: "zero-hold",
    title: "Zero Hold Time",
    description:
      "No more frustrated customers waiting on hold. Our AI agents answer instantly, handle multiple calls simultaneously, and provide immediate responses to customer inquiries.",
    icon: Clock,
    preview: {
      caption: "Instant answers, zero wait time",
    },
  },
  {
    id: "multilingual",
    title: "Multilingual Agents",
    description:
      "Speak to customers in their preferred language. Our AI agents seamlessly communicate in multiple languages with native-level fluency and cultural awareness.",
    icon: Globe,
    preview: {
      caption: "Communicate globally, connect locally",
    },
  },
  {
    id: "booking",
    title: "Appointment Booking & Reminders",
    description:
      "Automate your scheduling workflow. Our AI handles appointments, sends reminders, and manages cancellations without any human intervention.",
    icon: Calendar,
    preview: {
      caption: "Smart scheduling that works for you",
    },
  },
  {
    id: "qualification",
    title: "Lead Qualification",
    description:
      "Intelligent lead scoring and qualification. Our AI asks the right questions, identifies hot prospects, and routes qualified leads directly to your sales team.",
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
    <section id="features" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Features
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Accordion */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const isOpen = openFeature === feature.id;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-border rounded-xl bg-card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFeature(feature.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-xl font-semibold">{feature.title}</span>
                    {isOpen ? (
                      <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                    ) : (
                      <Plus className="w-6 h-6 flex-shrink-0" />
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
                        <div className="px-6 pb-6 text-muted-foreground">
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-blue-500/5 to-cyan-500/5 p-12 aspect-square flex flex-col items-center justify-center text-center"
              >
                <IconComponent className="w-24 h-24 text-primary mb-6" />
                <p className="text-xl font-medium text-foreground">
                  {activeFeature.preview.caption}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
