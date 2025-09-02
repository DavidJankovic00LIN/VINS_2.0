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
    <section id="contact" className="bg-gradient-to-b from-[#fd8112] to-[#0085ca]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-white">Kontakt</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-white font-medium">Ime</label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-10 px-3 rounded-md border border-white/30 bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all text-white placeholder-white/70" 
                placeholder="Vaše ime" 
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-white font-medium">E-mail</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-10 px-3 rounded-md border border-white/30 bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all text-white placeholder-white/70" 
                placeholder="vi@primer.com" 
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-white font-medium">Poruka</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-28 p-3 rounded-md border border-white/30 bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all text-white placeholder-white/70" 
                placeholder="Napišite mi o vašem putovanju..." 
              />
            </div>
            <button 
              type="submit" 
              className="h-10 px-5 rounded-full bg-white text-[#0085ca] text-sm font-medium hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Pošalji
            </button>
          </form>
          
                                             <div className="text-sm space-y-4">
              <div className="p-4 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30">
                <div className="font-medium text-white">E-mail</div>
                <a href="mailto:guide@example.com" className="text-white/90 hover:text-white transition-colors">guide@example.com</a>
              </div>
              <div className="p-4 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30">
                <div className="font-medium text-white">Instagram</div>
                <a href="#" className="text-white/90 hover:text-white transition-colors">@vins.guide</a>
              </div>
              <div className="p-4 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30">
                <div className="font-medium text-white">WhatsApp</div>
                <a href="tel:+1234567890" className="text-white/90 hover:text-white transition-colors">+1 (234) 567-890</a>
              </div>
              <div className="p-4 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30">
                <div className="font-medium text-white">Vreme odgovora</div>
                <span className="text-white/90">Obično u roku od 2 sata</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}


