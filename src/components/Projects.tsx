import { Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Hospital Management System',
      description: `A simple web application using HTML, CSS, and JavaScript, featuring Patient, Doctor, and Appointment modules. Admin can add patients, manage doctors, and book appointments. Data is stored using Local Storage, and the layout is responsive with Bootstrap.`,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Local Storage'],
    },
    {
      id: 2,
      title: 'AI-Enhanced Yoga Pose Detection and Alignment System',
      description: `Developed a real-time AI system for detecting and aligning yoga poses using deep learning. Provided users with various pose options, step-by-step instructions, and interactive feedback.`,
      technologies: ['Deep Learning', 'AI', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 3,
      title: 'Weather Web Application',
      description: `Developed a web application using HTML, CSS and JavaScript that displays real-time weather information based on user input using a weather API. Implemented dynamic UI updates, responsive design, and basic error handling for invalid entries.`,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-16 relative">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-primary aspect-square"
              style={{ 
                animationDelay: `${i * 0.01}s`,
                animation: 'gaming-pulse 3s infinite'
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 neon-text">
            PROJECTS
          </h2>
          <p className="font-rajdhani text-xl text-gaming-text-muted max-w-2xl mx-auto">
            Explore my latest projects and see how I bring innovative ideas to life
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`gaming-card p-8 max-w-3xl mx-auto`}
            >
              <h3 className="font-orbitron font-bold text-2xl lg:text-3xl mb-3 neon-text-secondary">
                {project.title}
              </h3>
              <p className="font-rajdhani text-lg text-gaming-text-muted leading-relaxed mb-4">
                {project.description}
              </p>
              <div>
                <h4 className="font-orbitron font-semibold text-lg mb-3 neon-text-accent flex items-center gap-2">
                  <Code size={20} />
                  TECH STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="gaming-card px-3 py-1 font-rajdhani font-medium text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;