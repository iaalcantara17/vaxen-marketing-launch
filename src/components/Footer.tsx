import { motion } from "framer-motion";
import vaxenLogo from "@/assets/vaxen-logo.png";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-muted/50 to-muted border-t-0 py-16 px-4 overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" aria-hidden="true" />
      
      {/* Moving highlight effect */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-2xl"
        aria-hidden="true"
      />
      
      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          {/* Logo */}
          <img
            src={vaxenLogo}
            alt="Vaxen AI voice assistants logo"
            className="h-16 md:h-20 w-auto"
          />
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © 2025. All rights reserved.
          </p>

          {/* Mission statement */}
          <p className="text-muted-foreground max-w-md text-center">
            Artificial intelligence lab on a mission to build the most powerful AI tools in the industry.
          </p>
          
          {/* Links */}
          <div className="flex gap-6 justify-center text-sm">
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
        </motion.div>
      </div>
    </footer>
  );
};
