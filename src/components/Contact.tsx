'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-black/[.03] dark:bg-white/[.04]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-10 px-3 rounded-md border border-black/[.08] dark:border-white/[.12] bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20" 
                placeholder="Your name" 
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-10 px-3 rounded-md border border-black/[.08] dark:border-white/[.12] bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20" 
                placeholder="you@example.com" 
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-28 p-3 rounded-md border border-black/[.08] dark:border-white/[.12] bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20" 
                placeholder="Tell me about your trip..." 
              />
            </div>
            <button 
              type="submit" 
              className="h-10 px-5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Send
            </button>
          </form>
          
          <div className="text-sm space-y-4">
            <div>
              <div className="font-medium">Email</div>
              <a href="mailto:guide@example.com" className="hover:underline">guide@example.com</a>
            </div>
            <div>
              <div className="font-medium">Instagram</div>
              <a href="#" className="hover:underline">@vins.guide</a>
            </div>
            <div>
              <div className="font-medium">WhatsApp</div>
              <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
            </div>
            <div>
              <div className="font-medium">Response Time</div>
              <span>Usually within 2 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

