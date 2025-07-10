import { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Smartphone, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 78 },
        { name: 'REST APIs', level: 82 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      icon: Database,
      title: 'Database & Tools',
      skills: [
        { name: 'SQL', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 }
      ]
    }
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
    <section ref={sectionRef} id="skills" className="py-20 relative">
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
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 neon-text">
            SKILL TREE
          </h2>
          <p className="font-rajdhani text-xl text-gaming-text-muted max-w-2xl mx-auto">
            Level up your projects with my technical expertise and gaming-inspired development approach
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="gaming-card group">
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-gaming-primary rounded-lg flex items-center justify-center mr-4 group-hover:shadow-neon transition-all duration-300">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-orbitron font-bold text-xl neon-text-secondary">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-rajdhani font-medium text-gaming-text">
                        {skill.name}
                      </span>
                      <span className="font-rajdhani font-bold text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Skill Bar */}
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 3 + skillIndex) * 0.1}s`
                        }}
                      />
                      
                      {/* Animated particles */}
                      <div className="absolute right-0 top-0 h-full w-2 overflow-hidden">
                        <div 
                          className="absolute top-0 right-0 w-1 h-1 bg-primary rounded-full animate-bounce"
                          style={{ 
                            right: isVisible ? `${100 - skill.level}%` : '100%',
                            transition: 'right 1s ease-out',
                            transitionDelay: `${(categoryIndex * 3 + skillIndex) * 0.1 + 1}s`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="font-orbitron font-bold text-2xl text-center mb-8 neon-text-accent">
            ADDITIONAL ABILITIES
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Responsive Design', 'UI/UX Design', 'Agile Development', 
              'Testing', 'DevOps', 'Cloud Services', 'Mobile Development',
              'Game Development', 'AI/ML Basics', 'Blockchain'
            ].map((skill, index) => (
              <div 
                key={skill}
                className="gaming-card px-4 py-2 font-rajdhani font-medium text-gaming-text hover:neon-text-accent transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;