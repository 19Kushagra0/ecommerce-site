'use client';

import { useState } from 'react';
import { Mail, Clock, Camera, Hash, MessageCircle, CheckCircle } from 'lucide-react';

const SUBJECTS = ['Order Issue', 'Collaboration', 'General'];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General', message: '' });
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(true);
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-skull-neon-pink text-xs uppercase tracking-[0.35em] mb-2">Reach out</p>
          <h1 className="font-display text-7xl gradient-skull">TALK TO THE DEAD</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Form */}
          <div className="bg-skull-dark rounded-2xl border border-skull-border card-glow p-8">
            {success ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6">
                <CheckCircle className="w-16 h-16 text-green-400" />
                <h2 className="font-display text-3xl text-skull-text">MESSAGE RECEIVED</h2>
                <p className="text-skull-muted max-w-xs">
                  The dead have heard you. We&apos;ll get back to you within 24 hours. Keep the
                  neon burning.
                </p>
                <button
                  onClick={() => { setSuccess(false); setForm({ name: '', email: '', subject: 'General', message: '' }); }}
                  className="px-6 py-2 border border-skull-border rounded-xl text-skull-muted hover:border-skull-neon-pink/40 hover:text-skull-neon-pink transition-colors text-sm"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 className="font-display text-2xl text-skull-text mb-2">DROP US A LINE</h2>

                <div>
                  <label className="text-skull-muted text-xs uppercase tracking-widest block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-skull-card border border-skull-border rounded-xl px-4 py-3 text-sm text-skull-text placeholder:text-skull-muted outline-none focus:border-skull-neon-purple/60 focus:ring-2 focus:ring-skull-neon-purple/20 transition-all"
                  />
                </div>

                <div>
                  <label className="text-skull-muted text-xs uppercase tracking-widest block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-skull-card border border-skull-border rounded-xl px-4 py-3 text-sm text-skull-text placeholder:text-skull-muted outline-none focus:border-skull-neon-purple/60 focus:ring-2 focus:ring-skull-neon-purple/20 transition-all"
                  />
                </div>

                <div>
                  <label className="text-skull-muted text-xs uppercase tracking-widest block mb-2">Subject</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-skull-card border border-skull-border rounded-xl px-4 py-3 text-sm text-skull-text outline-none focus:border-skull-neon-purple/60 focus:ring-2 focus:ring-skull-neon-purple/20 transition-all appearance-none cursor-pointer"
                  >
                    {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-skull-muted text-xs uppercase tracking-widest block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what's on your mind..."
                    className="w-full bg-skull-card border border-skull-border rounded-xl px-4 py-3 text-sm text-skull-text placeholder:text-skull-muted outline-none focus:border-skull-neon-purple/60 focus:ring-2 focus:ring-skull-neon-purple/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-skull-neon-pink text-white font-bold rounded-xl hover:brightness-110 active:scale-[0.98] transition-all duration-150 shadow-lg shadow-skull-neon-pink/20"
                >
                  Send Message 💀
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            {[
              {
                icon: <Mail className="w-5 h-5 text-skull-neon-pink" />,
                title: 'Email',
                value: 'drop@skulldrop.gg',
                sub: 'For orders, collabs, and everything else',
              },
              {
                icon: <Clock className="w-5 h-5 text-skull-neon-purple" />,
                title: 'Response Time',
                value: 'Within 24 hours',
                sub: 'We reply faster when the servers are quiet',
              },
            ].map((card) => (
              <div key={card.title} className="bg-skull-dark rounded-2xl border border-skull-border card-glow p-6 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-skull-card flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <p className="text-skull-muted text-xs uppercase tracking-widest mb-1">{card.title}</p>
                  <p className="text-skull-text font-semibold">{card.value}</p>
                  <p className="text-skull-muted text-xs mt-0.5">{card.sub}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-skull-dark rounded-2xl border border-skull-border card-glow p-6">
              <p className="text-skull-muted text-xs uppercase tracking-widest mb-5">Find us on</p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <Hash className="w-5 h-5" />, label: 'X / Twitter', handle: '@skulldrop_gg', color: 'text-skull-neon-blue' },
                  { icon: <Camera className="w-5 h-5" />, label: 'Instagram', handle: '@skulldrop', color: 'text-skull-neon-pink' },
                  { icon: <MessageCircle className="w-5 h-5" />, label: 'Discord', handle: 'discord.gg/skulldrop', color: 'text-skull-neon-purple' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className={`flex items-center gap-3 ${social.color} hover:opacity-80 transition-opacity`}
                  >
                    {social.icon}
                    <div>
                      <div className="text-sm font-medium text-skull-text">{social.label}</div>
                      <div className="text-xs text-skull-muted">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
