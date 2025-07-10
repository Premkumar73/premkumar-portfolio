import { ExternalLink, Github, Zap, Code, Gamepad2 } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Gaming Dashboard',
      description: 'A comprehensive gaming dashboard built with React and TypeScript. Features real-time statistics, user management, and modern gaming UI elements with neon effects and smooth animations.',
      image: project1,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      githubUrl: 'https://github.com/yourusername/gaming-dashboard',
      demoUrl: 'https://gaming-dashboard-demo.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with advanced features including payment integration, inventory management, and responsive design. Built with modern web technologies and gaming-inspired aesthetics.',
      image: project2,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      demoUrl: 'https://ecommerce-demo.vercel.app',
      featured: true
    },
    {
      id: 3,
      title: 'Mobile Gaming App',
      description: 'Cross-platform mobile gaming application with real-time multiplayer functionality. Features include user authentication, leaderboards, and in-app purchases with a sleek gaming interface.',
      image: project3,
      technologies: ['React Native', 'Firebase', 'Socket.io', 'Redux'],
      githubUrl: 'https://github.com/yourusername/mobile-gaming-app',
      demoUrl: 'https://mobile-game-demo.netlify.app',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
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
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 neon-text">
            PROJECT SHOWCASE
          </h2>
          <p className="font-rajdhani text-xl text-gaming-text-muted max-w-2xl mx-auto">
            Explore my latest gaming-inspired projects and see how I bring innovative ideas to life
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="project-card overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gaming-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gaming-button p-3"
                          aria-label="View GitHub repository"
                        >
                          <Github size={20} />
                        </a>
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gaming-button p-3"
                          style={{ background: 'var(--gradient-gaming-secondary)' }}
                          aria-label="View live demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-gaming-accent px-3 py-1 rounded-full font-rajdhani font-bold text-sm text-accent-foreground flex items-center gap-1">
                        <Zap size={14} />
                        FEATURED
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="font-orbitron font-bold text-2xl lg:text-3xl mb-3 neon-text-secondary">
                    {project.title}
                  </h3>
                  <p className="font-rajdhani text-lg text-gaming-text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
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

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gaming-button font-rajdhani font-semibold flex items-center gap-2"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gaming-button font-rajdhani font-semibold flex items-center gap-2"
                    style={{ background: 'var(--gradient-gaming-secondary)' }}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <div className="gaming-card max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Gamepad2 className="w-8 h-8 neon-text-accent mr-3" />
              <h3 className="font-orbitron font-bold text-xl neon-text">
                READY FOR MORE?
              </h3>
            </div>
            <p className="font-rajdhani text-gaming-text-muted mb-6">
              These are just a few highlights from my portfolio. I have many more exciting projects 
              and I'm always working on something new!
            </p>
            <a 
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming-button font-rajdhani font-semibold text-lg px-8 py-3"
              style={{ background: 'var(--gradient-gaming-accent)' }}
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;