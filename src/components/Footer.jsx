import React from 'react';

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} QuillTide. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm text-gray-300">
            <a className="hover:text-white transition" href="#">Docs</a>
            <a className="hover:text-white transition" href="#">Privacy</a>
            <a className="hover:text-white transition" href="#">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
