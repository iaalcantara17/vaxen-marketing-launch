import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const FloatingHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky
            ? "backdrop-blur-md bg-background/80 shadow-lg"
            : "bg-background/60 backdrop-blur-sm mt-4"
        }`}
      >
        <div className={`container mx-auto px-4 ${isSticky ? "py-4" : "py-4"}`}>
          <div
            className={`flex items-center justify-between ${
              !isSticky ? "max-w-6xl mx-auto rounded-full border border-border bg-background/90 px-6 py-3 shadow-xl" : ""
            }`}
          >
            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Vaxen
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("use-cases")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Use Cases
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About Us
              </button>
              <Button
                onClick={() => scrollToSection("calendly")}
                className="bg-primary hover:bg-primary-glow"
              >
                Book a Demo
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          x: isMobileMenuOpen ? 0 : "100%",
        }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background shadow-2xl z-40 md:hidden"
      >
        <nav className="flex flex-col gap-6 p-8 mt-20">
          <button
            onClick={() => scrollToSection("features")}
            className="text-2xl font-medium text-foreground hover:text-primary transition-colors text-left"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("use-cases")}
            className="text-2xl font-medium text-foreground hover:text-primary transition-colors text-left"
          >
            Use Cases
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-2xl font-medium text-foreground hover:text-primary transition-colors text-left"
          >
            About Us
          </button>
          <Button
            onClick={() => scrollToSection("calendly")}
            size="lg"
            className="bg-primary hover:bg-primary-glow mt-4"
          >
            Book a Demo
          </Button>
        </nav>
      </motion.div>
    </>
  );
};
