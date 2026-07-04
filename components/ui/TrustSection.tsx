"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  ClipboardCheck,
  Layers,
  Warehouse,
  Factory,
  HardHat,
  PenTool,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const services: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    icon: Building2,
    title: "Warehouse Construction Company",
    description:
      "Complete warehouse construction services, from planning and design to fabrication and final project delivery.",
  },
  {
    icon: ClipboardCheck,
    title: "Turnkey Warehouse Construction",
    description:
      "End-to-end turnkey warehouse construction with engineering, civil works, steel fabrication, and installation under one contract.",
  },
  {
    icon: Layers,
    title: "PEB Warehouse Construction",
    description:
      "Expert PEB Warehouse Construction Company delivering durable, cost-efficient pre-engineered warehouse buildings.",
  },
  {
    icon: Warehouse,
    title: "Warehouse Shed Construction",
    description:
      "High-quality warehouse shed construction and industrial shed construction for logistics, manufacturing, and storage facilities.",
  },
  {
    icon: Factory,
    title: "Industrial Warehouse Construction",
    description:
      "Reliable industrial warehouse construction for factories, distribution centers, and commercial warehouse projects.",
  },
  {
    icon: HardHat,
    title: "PEB Building Contractors",
    description:
      "Trusted PEB Building Contractors specializing in steel structure warehouses with optimized structural designs.",
  },
  {
    icon: PenTool,
    title: "Design & Build Warehouse Company",
    description:
      "Complete design build warehouse company solutions covering design, engineering, procurement, and construction.",
  },
  {
    icon: Wrench,
    title: "Warehouse Construction Contractors",
    description:
      "Experienced warehouse construction contractors delivering warehouse expansion, modernization, and turnkey industrial building projects.",
  },
];

export default function TrustSection() {
  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-slate-50 to-white text-[#0A2A4A] py-20 md:py-24 border-b border-[#0A2A4A]/10 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0A2A4A 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
        >
          <span className="text-sm font-inter font-black tracking-widest text-[#FFAC03] uppercase mb-4 block">
            Our Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-black tracking-tight mb-6 text-[#0A2A4A]">
            Our Warehouse Construction Services
          </h2>
          <p className="text-lg font-roboto font-medium text-slate-600 leading-relaxed">
            As a leading{" "}
            <strong className="font-bold text-[#0A2A4A]">
              Warehouse Construction Company
            </strong>
            , we deliver{" "}
            <strong className="font-bold text-[#0A2A4A]">
              turnkey warehouse construction
            </strong>
            ,{" "}
            <strong className="font-bold text-[#0A2A4A]">
              PEB warehouse construction
            </strong>
            , and{" "}
            <strong className="font-bold text-[#0A2A4A]">
              industrial warehouse construction
            </strong>{" "}
            solutions designed for faster execution, optimized costs, and
            long-term performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  i,
}: {
  service: (typeof services)[number];
  i: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInViewMobile = useInView(cardRef, { margin: "-49% 0px -49% 0px" });
  const Icon = service.icon;

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: i * 0.06, duration: 0.45 }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      className={`group relative flex flex-col h-full rounded-2xl border p-6 md:p-7 transition-all duration-300 ${
        isHovered
          ? "border-[#FFAC03]/40 bg-[#0A2A4A] shadow-xl shadow-[#0A2A4A]/15 -translate-y-1"
          : "border-[#0A2A4A]/10 bg-white shadow-sm"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-5">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
            isHovered
              ? "bg-[#FFAC03] scale-105"
              : "bg-[#FFAC03]/12"
          }`}
        >
          <Icon
            className={`h-6 w-6 transition-colors duration-300 ${
              isHovered ? "text-[#0A2A4A]" : "text-[#FFAC03]"
            }`}
            strokeWidth={2.25}
          />
        </div>
        <span
          className={`font-inter font-black text-sm tracking-tighter transition-colors duration-300 ${
            isHovered ? "text-[#FFAC03]" : "text-[#0A2A4A]/20"
          }`}
        >
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>

      <h3
        className={`font-inter font-black text-lg leading-snug tracking-tight mb-3 transition-colors duration-300 ${
          isHovered ? "text-white" : "text-[#0A2A4A]"
        }`}
      >
        {service.title}
      </h3>

      <p
        className={`font-roboto font-medium text-[15px] leading-relaxed flex-1 transition-colors duration-300 ${
          isHovered ? "text-white/75" : "text-slate-600"
        }`}
      >
        {service.description}
      </p>

      <div
        className={`mt-5 h-0.5 w-10 rounded-full transition-all duration-300 ${
          isHovered ? "w-16 bg-[#FFAC03]" : "bg-[#FFAC03]/40"
        }`}
      />
    </motion.div>
  );
}
