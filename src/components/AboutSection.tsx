import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const founders = [
  {
    name: "Israel Alcantara",
    title: "Co-Founder & AI Engineer",
    subtitle: "Amazon Software Development Engineer",
    bio: "Senior Computer Science major at NJIT with a focus on production-grade AI systems. As an Amazon Software Development Engineer, Israel has built reliable, scalable infrastructure at AWS, bringing enterprise-level technical expertise to Vaxen's AI voice platform.",
    linkedin: "https://www.linkedin.com/in/israel-alcantara/",
    companies: [
      { name: "Amazon", logo: "/images/amazon-logo.png" },
      { name: "NJIT", logo: "/images/njit-logo.png" },
    ],
  },
  {
    name: "Yash Amin",
    title: "Co-Founder & AI Engineer",
    subtitle: "Target Software Engineer",
    bio: "Senior Computer Science major at NJIT passionate about user-centric AI products. As a Target Software Engineer, Yash has delivered data-driven solutions at scale, focusing on client success and building AI systems that truly serve business needs.",
    linkedin: "https://www.linkedin.com/in/yashamin8/",
    companies: [
      { name: "Target", logo: "/images/target-logo.png" },
      { name: "NJIT", logo: "/images/njit-logo.png" },
    ],
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Diagonal background band */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-muted/30 to-transparent transform -skew-y-2 pointer-events-none" />
      
      {/* Abstract network illustration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="hsl(var(--primary))" />
              <line x1="0" y1="0" x2="50" y2="50" stroke="hsl(var(--primary))" strokeWidth="0.5" />
              <line x1="100" y1="0" x2="50" y2="50" stroke="hsl(var(--primary))" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="50" y2="100" stroke="hsl(var(--primary))" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>
      
      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built by engineers who understand what businesses need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotateY: 2, rotateX: 2 }}
              className="relative group"
            >
              <div className="relative rounded-2xl border border-border bg-card p-8 h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* LinkedIn Icon */}
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 z-10"
                >
                  <Linkedin className="w-5 h-5" />
                  {/* Glow ring on hover */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 0.3 }}
                    className="absolute inset-0 rounded-full bg-primary"
                  />
                </a>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-primary font-semibold mb-1">{founder.title}</p>
                  <p className="text-muted-foreground text-sm font-medium mb-4">{founder.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {founder.bio}
                  </p>
                </div>

                {/* Company Logos */}
                <div className="flex gap-6 items-center pt-6 border-t border-border relative z-10">
                  {founder.companies.map((company) => (
                    <div
                      key={company.name}
                      className="flex items-center justify-center h-20 flex-1 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-700 rounded-lg p-4 border border-border"
                    >
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="max-h-full w-auto object-contain"
                        style={{ maxHeight: '80px' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
