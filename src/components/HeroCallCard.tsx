import { motion } from "framer-motion";
import { Phone, Mic } from "lucide-react";

export const HeroCallCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="relative hidden lg:block"
    >
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-80 bg-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 shadow-2xl"
        role="img"
        aria-label="Live demo of Vaxen AI voice assistant handling an incoming customer call with real-time voice visualization"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/5 rounded-2xl blur-xl -z-10" aria-hidden="true" />
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-primary/20 rounded-full"
            />
          </div>
          <div>
            <p className="font-semibold text-foreground">Incoming Call</p>
            <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
          </div>
        </div>

        {/* Status */}
        <div className="bg-primary/5 rounded-lg p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <Mic className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">AI Agent Active</span>
          </div>
          <p className="text-xs text-muted-foreground">
            "Thank you for calling. How can I help you today?"
          </p>
        </div>

        {/* Waveform visualization */}
        <div className="flex gap-1 items-center justify-center h-12">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scaleY: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.08,
                ease: "easeInOut",
              }}
              className="w-1 bg-primary rounded-full"
              style={{ height: "100%" }}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-border">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">24/7</p>
            <p className="text-xs text-muted-foreground">Available</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">&lt;1s</p>
            <p className="text-xs text-muted-foreground">Response</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
