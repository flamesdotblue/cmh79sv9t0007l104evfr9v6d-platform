import React from 'react';
import { Rocket, Home, PenSquare, User } from 'lucide-react';

const NavLink = ({ icon: Icon, label }) => (
  <a href="#" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </a>
);

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b0b0f]/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-orange-500 to-red-600">
            <Rocket className="h-4 w-4 text-white" />
          </span>
          <span className="text-lg font-semibold tracking-tight">QuillTide</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          <NavLink icon={Home} label="Home" />
          <NavLink icon={PenSquare} label="Write" />
          <NavLink icon={User} label="Profile" />
        </nav>
        <div className="flex items-center gap-2">
          <button className="rounded-md px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Log in</button>
          <button className="rounded-md bg-gradient-to-tr from-orange-500 to-red-600 px-3 py-2 text-sm font-medium text-white shadow shadow-orange-500/20 hover:opacity-90 transition">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
