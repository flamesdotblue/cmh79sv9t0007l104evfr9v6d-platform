import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b0f]/20 via-[#0b0b0f]/40 to-[#0b0b0f]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
          >
            Publish boldly with a platform built for creators
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-2xl text-base text-gray-200 sm:text-lg"
          >
            QuillTide blends beautiful writing tools, OTP-secured accounts, and social features into a frictionless blogging experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button className="rounded-md bg-gradient-to-tr from-orange-500 to-red-600 px-5 py-3 text-sm font-semibold text-white shadow shadow-orange-500/20 hover:opacity-90 transition">
              Start writing
            </button>
            <button className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              Explore posts
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
