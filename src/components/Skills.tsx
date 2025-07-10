import { useEffect, useRef, useState } from 'react';
import { Code } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    'Java',
    'HTML',
    'CSS',
    'JavaScript',
    'React JS',
    'SQL'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-12 md:py-16 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-primary/20 aspect-square"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 neon-text">
            SKILLS
          </h2>
          <p className="font-rajdhani text-xl text-gaming-text-muted max-w-2xl mx-auto">
            I have built a solid foundation in core programming languages and web technologies. I am eager to apply my skills, learn new tools, and contribute to real-world projects as I start my professional journey.
          </p>
        </div>

        {/* Single Skills Card */}
        <div className="flex justify-center">
          <div className="gaming-card group w-full max-w-md">
            {/* Card Header */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-12 h-12 bg-gradient-gaming-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-neon transition-all duration-300">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-orbitron font-bold text-xl neon-text-secondary text-center">
                Skills
              </h3>
            </div>
            {/* Skills List in 2 Columns */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {skills.slice(0, 3).map((skill) => (
                  <div key={skill} className="font-rajdhani font-medium text-gaming-text text-center">
                    {skill}
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {skills.slice(3, 6).map((skill) => (
                  <div key={skill} className="font-rajdhani font-medium text-gaming-text text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;