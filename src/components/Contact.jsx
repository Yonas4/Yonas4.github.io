import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 border-t border-dark-border">
      <div className="bg-dark-card border border-dark-border rounded-3xl p-8 md:p-16 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Let's create something <br /> <span className="text-gold italic">amazing</span> together.
            </h2>
            <p className="text-gray-400 mb-8 max-w-md">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center border border-dark-border text-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:yonas.12336@gmail.com" className="text-white hover:text-gold transition-colors">yonas.12336@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center border border-dark-border text-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+967778420917" className="text-white hover:text-gold transition-colors">+967 778420917</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center border border-dark-border text-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white">Aden, Yemen</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-white text-black font-medium rounded-lg hover:bg-gold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
