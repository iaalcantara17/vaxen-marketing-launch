import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "diagonal" | "curve" | "gradient";
}

export const SectionDivider = ({ variant = "gradient" }: SectionDividerProps) => {
  if (variant === "diagonal") {
    return (
      <div className="relative h-24 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent transform -skew-y-2"
        />
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div className="relative h-16 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"
            fill="hsl(var(--primary) / 0.05)"
          />
        </svg>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent my-12"
    />
  );
};
