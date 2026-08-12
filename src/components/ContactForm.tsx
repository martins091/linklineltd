"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site-data";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Website enquiry from ${name || "a visitor"}`;
    const body = `${message}\n\n— ${name}${phone ? ` · ${phone}` : ""}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:${site.emailPrimary}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-3">
      <input
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="rounded-xl border border-paper-50/15 bg-white/5 px-4 py-3 text-sm text-paper-50 placeholder:text-paper-50/40 focus:border-gold-400/60 focus:outline-none"
      />
      <input
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className="rounded-xl border border-paper-50/15 bg-white/5 px-4 py-3 text-sm text-paper-50 placeholder:text-paper-50/40 focus:border-gold-400/60 focus:outline-none"
      />
      <input
        required
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone number"
        className="rounded-xl border border-paper-50/15 bg-white/5 px-4 py-3 text-sm text-paper-50 placeholder:text-paper-50/40 focus:border-gold-400/60 focus:outline-none"
      />
      <textarea
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tell us about your team size, coverage area and what you need…"
        rows={3}
        className="rounded-xl border border-paper-50/15 bg-white/5 px-4 py-3 text-sm text-paper-50 placeholder:text-paper-50/40 focus:border-gold-400/60 focus:outline-none sm:col-span-3"
      />
      <div className="flex items-center gap-3 sm:col-span-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-bold text-ink-950 transition-transform hover:scale-[1.03]"
        >
          <Send size={15} /> Send Enquiry
        </button>
        <p className="text-xs text-paper-50/45">Opens your email app, addressed to us.</p>
      </div>
    </form>
  );
}
