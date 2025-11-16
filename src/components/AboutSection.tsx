import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const founders = [
  {
    name: "Israel Alcantara",
    title: "Co-Founder & AI Engineer",
    bio: "Senior Computer Science major at NJIT with a focus on production-grade AI systems. As an Amazon Software Development Engineer, Israel has built reliable, scalable infrastructure at AWS, bringing enterprise-level technical expertise to Vaxen's AI voice platform.",
    linkedin: "https://www.linkedin.com/in/israel-alcantara/",
    companies: [
      { name: "AWS", logo: "/images/aws-logo.png" },
      { name: "NJIT", logo: "/images/njit-logo.png" },
    ],
  },
  {
    name: "Yash Amin",
    title: "Co-Founder & AI Engineer",
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
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="relative rounded-2xl border border-border bg-card p-8 h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* LinkedIn Icon */}
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-primary font-semibold mb-4">{founder.title}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {founder.bio}
                  </p>
                </div>

                {/* Company Logos */}
                <div className="flex gap-6 items-center pt-6 border-t border-border">
                  {founder.companies.map((company) => (
                    <div
                      key={company.name}
                      className="flex items-center justify-center h-16 flex-1 bg-muted/50 rounded-lg p-3"
                    >
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="h-full w-auto object-contain"
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
