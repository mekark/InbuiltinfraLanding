"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const specializations = [
  "Commercial warehouse builders",
  "Pharmaceutical warehouse construction",
  "Cold storage warehouse builders",
  "Multi storey warehouse construction",
  "Automated warehouse construction",
  "Pre engineered warehouse building (PEB)",
  "Steel structure warehouse construction",
  "Turnkey industrial construction",
];

const whyChooseUs = [
  "Specialized in Industrial & Logistics Infrastructure",
  "Engineering-Driven Design Approach",
  "Regulatory & Compliance Expertise",
  "Cost-Optimized Structural Systems",
  "Faster Construction with PEB Technology",
  "Scalable & Future-Ready Designs",
  "Dedicated Project Management Team",
  "End-to-End Turnkey Solutions",
];

export default function TrustSection() {
  return (
    <section
      id="why-us"
      className="bg-white text-[#0B1F3B] py-16 border-b border-[#0B1F3B]/10"
    >
      {" "}
      <div className="max-w-[90rem] mx-auto px-6">
        {/* Authority Block - Two Columns */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16">
          {" "}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
              <span className="text-[#0B1F3B]/60 font-mono text-xs tracking-[0.2em] uppercase font-bold">
                Established Expertise
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-10">
              Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC400] to-[#FF9100]">
                Trusted
              </span>
              <br />
              Warehouse
              <br />
              Construction
              <br />
              Experts.
            </h2>
            <p className="text-lg font-medium tracking-wide text-[#0B1F3B]/70 leading-relaxed max-w-lg mb-6">
              We are one of the most reliable warehouse construction companies
              specializing in high-performance industrial assets.
            </p>
            <p className="text-lg font-medium tracking-wide text-[#0B1F3B] leading-relaxed max-w-lg mb-12 border-l-2 border-[#FFC400] pl-4">
              From concept planning to commissioning, we deliver complete
              turnkey warehouse solutions tailored to your operational
              requirements.
            </p>
          </div>
          {/* Specializations List */}
          <div className="lg:w-1/2 flex flex-col justify-center bg-[#F8FAFC] p-12 lg:p-16 relative">
            {/* Cut corner visual */}
            <div
              className="absolute top-0 right-0 w-8 h-8 bg-white"
              style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-8 h-8 bg-white"
              style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
            />

            <span className="text-[#0B1F3B]/50 font-mono text-xs tracking-[0.25em] font-bold uppercase mb-12 block">
              Specializing In:
            </span>

            <div className="flex flex-col gap-5">
              {specializations.map((spec, i) => (
                <SpecListRow key={spec} spec={spec} i={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        {/* <div>
                    <div className="mb-16 border-b border-[#0B1F3B]/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter max-w-2xl">
                            Why Businesses Choose Our Warehouse Construction Company
                        </h3>
                        <p className="text-base font-bold tracking-widest uppercase text-[#0B1F3B]/50 max-w-sm text-left md:text-right">
                            We don't just build structures — <br className="hidden md:block" />we build operational efficiency.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0B1F3B]/10 border border-[#0B1F3B]/10">
                        {whyChooseUs.map((reason, i) => (
                            <TrustReasonCard key={reason} reason={reason} i={i} />
                        ))}
                    </div>
                </div> */}
      </div>
    </section>
  );
}

function SpecListRow({ spec, i }: { spec: string; i: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const isInViewMobile = useInView(rowRef, { margin: "-49% 0px -49% 0px" });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) setIsHovered(isInViewMobile);
  }, [isMobile, isInViewMobile]);

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: i * 0.05, duration: 0.5 }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      className="flex items-center gap-4 group cursor-default"
    >
      <span
        className={`font-black text-xl tracking-tighter w-6 transition-colors duration-300 ${isHovered ? "text-[#FFC400]" : "text-[#0B1F3B]/20"}`}
      >
        0{i + 1}
      </span>
      <span
        className={`text-sm md:text-base font-bold tracking-widest uppercase transition-all duration-300 ${isHovered ? "text-[#FFC400] pl-2" : "text-[#0B1F3B]"}`}
      >
        {spec}
      </span>
    </motion.div>
  );
}

function TrustReasonCard({ reason, i }: { reason: string; i: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInViewMobile = useInView(cardRef, { margin: "-49% 0px -49% 0px" });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) setIsHovered(isInViewMobile);
  }, [isMobile, isInViewMobile]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: i * 0.08, duration: 0.4 }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      className={`p-8 transition-colors flex flex-col h-full bg-white ${isHovered ? "bg-[#F8FAFC]" : ""}`}
    >
      <div
        className={`w-8 h-8 flex items-center justify-center mb-6 transition-transform duration-300 ${isHovered ? "scale-110 bg-[#FFC400]/20" : "bg-[#FFC400]/10"}`}
      >
        <svg
          className="w-4 h-4 text-[#FFC400]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="square" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h4 className="text-sm font-bold text-[#0B1F3B] tracking-widest uppercase leading-relaxed mt-auto">
        {reason}
      </h4>
    </motion.div>
  );
}
