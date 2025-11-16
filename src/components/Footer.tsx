import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Left side */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
              Vaxen
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025. All rights reserved.
            </p>
          </div>

          {/* Right side */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground max-w-md mb-4">
              Artificial intelligence lab on a mission to build the most powerful AI tools in the industry.
            </p>
            <div className="flex gap-6 justify-center md:justify-end text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
