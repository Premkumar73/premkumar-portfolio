import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Undergraduate',
      institution: 'Velammal College of Engineering and Technology',
      year: '2020 - 2024',
      branch: 'B.E. (Computer Science and Engineering)',
      cgpa: 'CGPA - 7.436',
    },
    {
      degree: 'HSC',
      institution: 'Government Higher Secondary School',
      year: '2019 - 2020',
      grade: 'Percentage : 58%'
    },
    {
      degree: 'SSLC',
      institution: 'Government Higher Secondary School',
      year: '2017 - 2018',
      grade: 'Percentage : 63%'
    }
  ];

  return (
    <section id="education" className="py-12 md:py-16 relative">
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
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 neon-text">
            EDUCATION
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {educationData.map((edu, index) => (
            <div key={edu.degree + edu.year} className="gaming-card relative">
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
                    {edu.branch && (
                      <div className="font-rajdhani font-medium text-gaming-text-muted mt-2">
                        {edu.branch}
                      </div>
                    )}
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <div className="gaming-card px-4 py-2 bg-gradient-gaming-accent min-w-[200px] flex flex-col items-start">
                      <div className="flex flex-col items-start gap-1 w-full">
                        {edu.grade && (
                          <span className="font-orbitron font-bold text-accent-foreground w-full block text-center">
                            {edu.grade}
                          </span>
                        )}
                        {edu.cgpa && (
                          <span className="font-orbitron font-bold text-accent-foreground w-full block text-center">
                            {edu.cgpa}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;