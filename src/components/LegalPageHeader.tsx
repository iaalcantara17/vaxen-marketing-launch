import { Link } from "react-router-dom";
import vaxenLogo from "@/assets/vaxen-logo.png";
import { Button } from "@/components/ui/button";

export const LegalPageHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={vaxenLogo}
              alt="Vaxen AI voice assistants logo"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Home Button */}
          <Link to="/">
            <Button variant="default" className="bg-primary hover:bg-primary-glow">
              Home
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
