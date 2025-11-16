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
    <section className="py-20 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl relative">
        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform -translate-y-1/4" />
          <p className="text-2xl md:text-3xl lg:text-4xl text-center font-medium leading-relaxed mb-16 text-foreground relative">
            Vaxen is the voice AI platform for life-like phone calls that work 24/7, speak any language, and scale across your business. Our agents sound human, stay accurate, and never take a day off.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Outer container with gradient border effect */}
          <div className="relative p-[1px] bg-gradient-to-r from-primary/50 via-primary/20 to-primary/50 rounded-2xl">
            <div className="bg-card rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.2)" }}
                    className={`p-8 md:p-12 text-center relative ${
                      index !== stats.length - 1 ? "md:border-r border-b md:border-b-0 border-border" : ""
                    }`}
                  >
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4 py-2">
                      {stat.number}
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
