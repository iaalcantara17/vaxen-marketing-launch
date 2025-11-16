import { motion } from "framer-motion";

const stats = [
  {
    number: "50K+",
    description: "Calls handled by Vaxen agents",
  },
  {
    number: "25K+",
    description: "People spoken to by Vaxen",
  },
  {
    number: "100+ days",
    description: "Total talk time handled by Vaxen",
  },
];

export const StatementSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl text-center font-medium leading-relaxed mb-16 text-foreground"
        >
          Vaxen is the voice AI platform for life-like phone calls that work 24/7, speak any language, and scale across your business. Our agents sound human, stay accurate, and never take a day off.
        </motion.p>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border rounded-2xl overflow-hidden bg-card"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.15)" }}
              transition={{ duration: 0.2 }}
              className={`p-8 md:p-12 text-center ${
                index !== stats.length - 1 ? "md:border-r border-b md:border-b-0 border-border" : ""
              }`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
                {stat.number}
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
