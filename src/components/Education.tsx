import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Gaming Tech University',
      year: '2020-2024',
      grade: '3.8 GPA',
      achievements: ['Dean\'s List', 'Programming Contest Winner', 'Tech Club President'],
      description: 'Specialized in software development, data structures, and web technologies with a focus on gaming applications.'
    },
    {
      degree: 'Higher Secondary Certificate (Science)',
      institution: 'Elite Gaming College',
      year: '2018-2020',
      grade: '92%',
      achievements: ['Top 5% of Class', 'Science Olympiad Gold', 'Coding Club Founder'],
      description: 'Strong foundation in mathematics, physics, and computer science with early exposure to programming.'
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'Future Leaders High School',
      year: '2016-2018',
      grade: '89%',
      achievements: ['School Topper in Computer Science', 'Best Student Award', 'Sports Captain'],
      description: 'Comprehensive education with excellent performance in STEM subjects and leadership activities.'
    }
  ];

  const certifications = [
    { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2024' },
    { name: 'React Developer Certification', issuer: 'Meta', year: '2023' },
    { name: 'Full Stack Web Development', issuer: 'FreeCodeCamp', year: '2023' },
    { name: 'JavaScript Algorithms and Data Structures', issuer: 'FreeCodeCamp', year: '2022' }
  ];

  return (
    <section id="education" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-6 h-full">
          {Array.from({ length: 36 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-secondary/30 aspect-square relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 neon-text">
            EDUCATION QUEST
          </h2>
          <p className="font-rajdhani text-xl text-gaming-text-muted max-w-2xl mx-auto">
            My journey through the academic world, gaining knowledge and leveling up my skills
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {educationData.map((edu, index) => (
            <div key={edu.degree} className="gaming-card relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-gaming-primary hidden md:block"></div>
              
              {/* Timeline Node */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-primary rounded-full border-2 border-gaming-surface hidden md:block gaming-pulse"></div>

              <div className="md:ml-16">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="font-orbitron font-bold text-xl lg:text-2xl neon-text-secondary mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-4 text-gaming-text-muted">
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} />
                        <span className="font-rajdhani font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="font-rajdhani font-medium">{edu.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0">
                    <div className="gaming-card px-4 py-2 bg-gradient-gaming-accent">
                      <div className="flex items-center gap-2">
                        <Award size={18} />
                        <span className="font-orbitron font-bold text-accent-foreground">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="font-rajdhani text-lg text-gaming-text-muted mb-4 leading-relaxed">
                  {edu.description}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="font-orbitron font-semibold text-lg mb-3 neon-text-accent">
                    ACHIEVEMENTS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement) => (
                      <span 
                        key={achievement}
                        className="gaming-card px-3 py-1 font-rajdhani font-medium text-sm"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-orbitron font-bold text-3xl md:text-4xl mb-4 neon-text-accent">
              CERTIFICATIONS
            </h3>
            <p className="font-rajdhani text-lg text-gaming-text-muted">
              Professional certifications that validate my expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.name}
                className="gaming-card group hover:shadow-neon-yellow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-gaming-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-neon-yellow transition-all duration-300">
                    <GraduationCap className="w-6 h-6 text-accent-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-orbitron font-bold text-lg neon-text-secondary mb-1">
                      {cert.name}
                    </h4>
                    <p className="font-rajdhani text-gaming-text-muted mb-2">
                      {cert.issuer}
                    </p>
                    <div className="inline-flex items-center gap-2 gaming-card px-2 py-1 text-sm bg-gaming-surface-hover">
                      <Calendar size={14} />
                      <span className="font-rajdhani font-medium">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Stats */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Courses Completed', value: '40+' },
              { label: 'Certifications', value: '12' },
              { label: 'Projects Done', value: '25+' },
              { label: 'Hours Studied', value: '2000+' }
            ].map((stat, index) => (
              <div key={stat.label} className="gaming-card text-center group">
                <div className="font-orbitron font-black text-3xl neon-text-accent mb-2 group-hover:neon-flicker">
                  {stat.value}
                </div>
                <div className="font-rajdhani text-gaming-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;