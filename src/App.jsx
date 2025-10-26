import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b0f] text-white">
      <Navbar />
      <main>
        <Hero />
        <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Build and share your ideas with QuillTide</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-base text-gray-300 sm:text-lg">
            A modern full-stack blog platform powered by Next.js and Supabase. OTP auth, Markdown, analytics, and a delightful UI — ready for creators.
          </p>
          <FeatureGrid />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
