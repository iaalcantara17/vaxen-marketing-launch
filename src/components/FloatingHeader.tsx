import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import vaxenLogo from "@/assets/vaxen-logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <div className={`container mx-auto px-4 ${isSticky ? "py-3" : "py-3"}`}>
          <div
            className={`flex items-center justify-between ${
              !isSticky ? "max-w-6xl mx-auto rounded-full border border-border bg-background/90 px-6 py-2 shadow-xl" : ""
            }`}
          >
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="flex items-center"
              aria-label="Scroll to top"
            >
              <img
                src={vaxenLogo}
                alt="Vaxen AI voice assistants logo"
                className="h-8 md:h-10 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#ai-call-answering-features"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("ai-call-answering-features");
                }}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#ai-phone-agent-use-cases"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("ai-phone-agent-use-cases");
                }}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Use Cases
              </a>
              <a
                href="#about-vaxen"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about-vaxen");
                }}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About Us
              </a>
              <Button
                onClick={() => scrollToSection("calendly")}
                className="bg-primary hover:bg-primary-glow"
              >
                Book a Demo
              </Button>
              <ThemeToggle />
            </nav>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
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
          <a
            href="#ai-call-answering-features"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("ai-call-answering-features");
            }}
            className="text-2xl font-medium text-foreground hover:text-primary transition-colors text-left"
          >
            Features
          </a>
          <a
            href="#ai-phone-agent-use-cases"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("ai-phone-agent-use-cases");
            }}
            className="text-2xl font-medium text-foreground hover:text-primary transition-colors text-left"
          >
            Use Cases
          </a>
          <a
            href="#about-vaxen"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about-vaxen");
            }}
            className="text-2xl font-medium text-foreground hover:text-primary transition-colors text-left"
          >
            About Us
          </a>
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
