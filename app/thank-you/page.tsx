"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2A4A] via-[#164a7a] to-[#0A2A4A] flex items-center justify-center px-6 py-12">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #FFAC03 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-2xl w-full bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-16 h-16">
            <Image
              src="/ini.png"
              alt="Inbuilt Infra Logo"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FFAC03] to-[#FF8800] flex items-center justify-center shadow-xl">
            <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={3} />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-5xl font-inter font-black text-[#0A2A4A] mb-4"
        >
          Thank You!
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-600 font-roboto font-medium mb-8 leading-relaxed"
        >
          Your enquiry has been submitted successfully. Our team will contact you shortly to discuss your project requirements.
        </motion.p>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-slate-50 rounded-2xl p-6 mb-8"
        >
          <p className="text-sm text-slate-600 font-roboto font-medium">
            We typically respond within <span className="font-bold text-[#0A2A4A]">24 hours</span>.
            <br />
            For urgent inquiries, please call us at{" "}
            <a href="tel:+917823967391" className="text-[#FFAC03] font-bold hover:underline">
              +91 78239 67391
            </a>
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-[#FFAC03] to-[#FF8800] text-white px-8 py-4 rounded-full font-inter font-black hover:shadow-2xl hover:shadow-[#FFAC03]/40 transition-all active:scale-95 text-base"
          >
            Return to Home
          </Link>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 text-xs text-slate-400 font-roboto"
        >
          Inbuilt Infra - Leading PEB Manufacturing
        </motion.p>
      </motion.div>
    </div>
  );
}
