import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";

export const CalendlySection = () => {
  return (
    <section id="calendly" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Book a Demo</h2>
          <p className="text-xl text-muted-foreground">
            See Vaxen in action. Schedule a personalized demo with our team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border overflow-hidden shadow-xl bg-card"
        >
          <InlineWidget
            url="https://calendly.com/vaxensolutions/demo"
            styles={{
              height: "700px",
              width: "100%",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};
