import { useEffect, useState } from 'react';
import gamingAvatar from '@/assets/gaming-avatar.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 md:py-16">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary gaming-pulse relative">
              <img 
                src={gamingAvatar} 
                alt="Gaming Avatar" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* Name */}
          <h1 className="font-orbitron font-black text-5xl md:text-7xl mb-4 neon-text ">
            Premkumar K
          </h1>

          {/* Animated Title */}
          <div className="font-rajdhani font-semibold text-2xl md:text-3xl mb-6 md:mb-8 text-gaming-text min-h-[3rem]">
            <span className="neon-text-secondary">{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>

          {/* Career Objective */}
          <div className="gaming-card max-w-3xl mx-auto mb-6 md:mb-8">
            <p className="font-rajdhani text-lg md:text-xl leading-relaxed text-gaming-text-muted">
              Passionate and innovative Full Stack Developer with expertise in modern web technologies. 
              I create immersive digital experiences that blend cutting-edge functionality with 
              gaming-inspired design aesthetics. Dedicated to building scalable applications that 
              push the boundaries of user interaction and engagement.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="gaming-button font-rajdhani font-semibold text-lg px-8 py-4"
            >
              View Projects
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="gaming-button font-rajdhani font-semibold text-lg px-8 py-4"
              style={{ background: 'var(--gradient-gaming-secondary)' }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;