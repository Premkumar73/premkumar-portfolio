import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-gaming-border bg-gaming-surface py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-rajdhani text-gaming-text-muted">
            © 2024 John Doe. Crafted with{' '}
            <span className="neon-text-accent">⚡</span> and passion for gaming aesthetics.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
