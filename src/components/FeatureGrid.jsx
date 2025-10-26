import React from 'react';
import { ShieldCheck, Mail, PenSquare, Users, Heart } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Secure OTP Auth',
    desc: 'Supabase Auth with email OTP for sign in, sign up, and password resets. Session-based and secure.',
  },
  {
    icon: PenSquare,
    title: 'Markdown Editor',
    desc: 'Write in rich Markdown with syntax highlighting and live preview for a smooth authoring flow.',
  },
  {
    icon: Users,
    title: 'Social Features',
    desc: 'Profiles, follows, likes, and comments with replies. Grow your audience and community.',
  },
  {
    icon: Mail,
    title: 'Transactional Emails',
    desc: 'Welcome and OTP emails via Resend or Supabase. Branded templates that look great.',
  },
  {
    icon: Heart,
    title: 'Author Analytics',
    desc: 'Track post views, likes, and followers. See what resonates and refine your voice.',
  },
];

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.05]">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-orange-500/90 to-red-600/90 text-white shadow shadow-orange-500/20">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-gray-300">{desc}</p>
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-tr from-orange-500/20 to-red-600/20 blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100" />
    </div>
  );
}

function FeatureGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
      ))}
    </div>
  );
}

export default FeatureGrid;
