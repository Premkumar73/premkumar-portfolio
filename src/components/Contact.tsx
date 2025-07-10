import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_35m3fim';
const TEMPLATE_ID = 'template_sil52xc';
const USER_ID = 'qabJvJryx6mRL1KqC';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'All fields are required!',
        description: 'Please fill in your name, email, and message.',
        variant: 'destructive',
      });
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          subject: `Message from ${formData.name}`
        },
        USER_ID
      );
      toast({
        title: 'Message Sent Successfully!',
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: 'Failed to send message',
        description: 'There was an error sending your message. Please try again later.',
        variant: 'destructive',
      });
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'premkumarcse24@gmail.com',
      href: 'mailto:premkumarcse24@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 96264 98190',
      href: 'tel:+919626498190'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sivaganga, Tamil Nadu',
      href: 'https://www.google.com/maps/place/Sivaganga,+Tamil+Nadu+630561'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Premkumar73',
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/premkumar-k-cse/',
      color: 'hover:text-secondary'
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-16 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 neon-text">
            CONTACT
          </h2>
          <p className="font-rajdhani text-xl text-gaming-text-muted max-w-2xl mx-auto">
            Feel free to contact me for opportunities, collaborations, or any queries!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="gaming-card">
            <div className="mb-8">
              <h3 className="font-orbitron font-bold text-2xl neon-text-secondary mb-3">
                SEND MESSAGE
              </h3>
              <p className="font-rajdhani text-gaming-text-muted">
                Fill out the form and I'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block font-rajdhani font-semibold text-gaming-text mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-gaming-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-rajdhani text-gaming-text"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block font-rajdhani font-semibold text-gaming-text mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-gaming-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-rajdhani text-gaming-text"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block font-rajdhani font-semibold text-gaming-text mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input border border-gaming-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-rajdhani text-gaming-text resize-none"
                  placeholder="Type your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full gaming-button font-rajdhani font-bold text-lg py-4 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="gaming-card">
              <h3 className="font-orbitron font-bold text-2xl neon-text-secondary mb-6">
                CONTACT INFO
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center gap-4 p-4 gaming-card bg-gaming-surface-hover hover:border-primary transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-gaming-primary rounded-lg flex items-center justify-center group-hover:shadow-neon transition-all duration-300">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-rajdhani font-medium text-gaming-text-muted text-sm">
                        {info.label}
                      </div>
                      <div className="font-rajdhani font-semibold text-gaming-text group-hover:neon-text transition-all duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="gaming-card">
              <h3 className="font-orbitron font-bold text-2xl neon-text-secondary mb-6">
                SOCIAL NETWORKS
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gaming-card text-center p-6 group hover:shadow-neon transition-all duration-300"
                  >
                    <social.icon className={`w-8 h-8 mx-auto mb-3 text-gaming-text-muted ${social.color} transition-colors duration-300`} />
                    <div className="font-rajdhani font-medium text-sm text-gaming-text-muted group-hover:text-gaming-text transition-colors duration-300">
                      {social.label}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;