"use client";

import { motion } from "framer-motion";
import { ArrowRight, Home, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#FFAC03]/5 flex items-center justify-center px-6 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#FFAC03]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-[#0A2A4A]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 mb-8">
              <div className="relative w-12 h-12">
                <Image
                  src="/ini.png"
                  alt="Inbuilt Infra Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-normal text-2xl tracking-tight text-[#0A2A4A]" style={{ fontFamily: 'var(--font-instrument-serif)' }}>
                Inbuilt Infra
              </span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-6"
            >
              <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFAC03] to-[#FF8800] mb-4" style={{ fontFamily: 'var(--font-instrument-serif)' }}>
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-normal text-[#0A2A4A] mb-4" style={{ fontFamily: 'var(--font-instrument-serif)' }}>
                Page Not Found
              </h2>
              <p className="text-lg font-inter text-slate-600 leading-relaxed mb-8">
                The page you're looking for doesn't exist or has been moved. Let's get you back on track.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-2 bg-[#0A2A4A] text-white px-8 py-4 rounded-full font-inter font-bold hover:bg-[#0d3558] transition-all shadow-xl shadow-[#0A2A4A]/20 active:scale-95"
              >
                <Home className="w-5 h-5" />
                Back to Home
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#FFAC03] text-[#0A2A4A] px-8 py-4 rounded-full font-inter font-bold hover:bg-[#FFAC03]/5 transition-all active:scale-95"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-12 pt-8 border-t border-slate-200"
            >
              <p className="text-sm font-inter font-semibold text-slate-500 mb-4">Quick Links</p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/#why-us" className="text-sm font-inter text-slate-600 hover:text-[#FFAC03] transition-colors">
                  Why Us
                </Link>
                <span className="text-slate-300">|</span>
                <Link href="/#industries" className="text-sm font-inter text-slate-600 hover:text-[#FFAC03] transition-colors">
                  Industries
                </Link>
                <span className="text-slate-300">|</span>
                <Link href="/#process" className="text-sm font-inter text-slate-600 hover:text-[#FFAC03] transition-colors">
                  Process
                </Link>
                <span className="text-slate-300">|</span>
                <Link href="/#portfolio" className="text-sm font-inter text-slate-600 hover:text-[#FFAC03] transition-colors">
                  Portfolio
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/Inbuilt_infra_Landing_Page_Assets/vertical-shot-metal-structure-bright-sky.jpg"
                alt="PEB Structure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A2A4A]/40 via-transparent to-[#FFAC03]/20" />

              {/* Floating Search Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center"
                >
                  <Search className="w-12 h-12 text-white" />
                </motion.div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FFAC03]/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0A2A4A]/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
