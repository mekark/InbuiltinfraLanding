"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  HardHat,
  Building2,
  TrendingUp,
  Search,
  Layers,
  ClipboardCheck,
  Clock,
  Phone,
  Mail,
  MapPin,
  Plus,
  Minus,
  Check,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import dynamic from "next/dynamic";
import TrustSection from "@/components/ui/TrustSection";

const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false },
);

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// Client logos data
const clientLogos = [
  {
    name: "KRM School",
    image: "/Inbuilt_Infra_client_logo_asset/KRM_School.jpg",
  },
  {
    name: "MGR University",
    image: "/Inbuilt_Infra_client_logo_asset/MGR-University.png",
  },
  {
    name: "Q-Med Hospitals",
    image: "/Inbuilt_Infra_client_logo_asset/Q-Med_Hospitals.jpg",
  },
  {
    name: "SRM University",
    image: "/Inbuilt_Infra_client_logo_asset/image.png",
  },
  {
    name: "Vel Tech University",
    image: "/Inbuilt_Infra_client_logo_asset/Vel_Tech_University.png",
  },
  {
    name: "Velammal Engineering",
    image: "/Inbuilt_Infra_client_logo_asset/Velammal_Engineering.jpg",
  },
  {
    name: "Vels University",
    image: "/Inbuilt_Infra_client_logo_asset/Vels_University.png",
  },
];

// Portfolio images
const portfolioImages = [
  "/Inbuilt_infra_Landing_Page_Assets/DJI_20260221114802_0002_D.JPG.webp",
  "/Inbuilt_infra_Landing_Page_Assets/DJI_20260221115447_0014_D.JPG.webp",
  "/Inbuilt_infra_Landing_Page_Assets/DJI_20260221125211_0029_D.JPG.webp",
  "/Inbuilt_infra_Landing_Page_Assets/DJI_20260221125239_0031_D.JPG.webp",
  "/Inbuilt_infra_Landing_Page_Assets/DJI_20260221125750_0035_D.JPG.webp",
  "/Inbuilt_infra_Landing_Page_Assets/DJI_20260221145134_0057_D.JPG.webp",
  "/Inbuilt_infra_Landing_Page_Assets/DJI_20260221152650_0089_D.JPG.webp",
  "/Inbuilt_infra_Landing_Page_Assets/DJI_20260221152730_0090_D.JPG.webp",
];

// FAQ data
const faqs = [
  {
    question:
      "Why choose a pre engineered building (PEB) for industrial construction?",
    answer:
      "PEB buildings are factory-fabricated steel structures that reduce construction time and overall project cost. They enable faster project completion with higher structural quality than conventional construction.",
  },
  {
    question: "How fast can a prefab warehouse be constructed?",
    answer:
      "A prefab warehouse can typically be completed 40–50% faster because fabrication and site work happen simultaneously. This allows businesses to start operations sooner and reduce downtime.",
  },
  {
    question: "Do you offer turnkey PEB construction services?",
    answer:
      "Yes, we provide complete turnkey PEB solutions including design, fabrication, supply, and installation. Single-point execution ensures better quality control and on-time delivery.",
  },
  {
    question: "Are prefab industrial buildings customizable?",
    answer:
      "Yes, prefab industrial buildings are fully customized based on span, height, crane load, and workflow needs. Designs are tailored to maximize operational efficiency and future expansion.",
  },
  {
    question:
      "How many days will you complete my project after I confirm the order?",
    answer:
      "Project completion takes 150 days with statutory approvals and 150 days without approvals, strictly followed as per project schedule. We maintain planned timelines through in-house design, fabrication, and execution control.",
  },
  {
    question: "Is prefabrication construction cost-effective?",
    answer:
      "Prefabrication construction reduces labor costs, material wastage, and project delays. Optimized steel usage and faster installation significantly lower total project investment.",
  },
  {
    question:
      "Why should I choose Inbuilt Infra for my large industrial project?",
    answer:
      "Inbuilt Infra delivers end-to-end PEB solutions with experienced engineering, quality fabrication, and proven large-scale execution capability. Clients choose us for reliability, timely delivery, and single-point project responsibility.",
  },
  {
    question:
      "Can the PEB structure be dismantled and installed at another location?",
    answer:
      "Yes, PEB buildings are designed for modular assembly and can be dismantled and reinstalled at a different site. This makes them a flexible long-term investment for expanding businesses.",
  },
  {
    question: "Will I get design support before construction starts?",
    answer:
      "Yes, our engineering team provides detailed drawings, structural analysis, and layout planning before fabrication. This ensures clarity, approval readiness, and optimized building performance.",
  },
];

// Testimonials data with bento grid layout
const testimonials = [
  {
    quote: "Logistics & 3PL Industry",
    detail:
      "Reduced project timeline by 35%” — Inbuilt Infra delivered our 1,20,000 sq.ft logistics warehouse ahead of schedule. The structural precision, clear-span design, and fast erection process helped us operationalize quickly. Their team handled everything from design to handover seamlessly.",
    author: "Operations Head",
    company: "3PL Company",
  },
  {
    quote: "FMCG Brand",
    detail:
      "Optimized storage with superior ventilation” — For our FMCG distribution center, ventilation and space planning were critical. Inbuilt Infra designed a high-roof, clear-span warehouse that improved air circulation and pallet stacking efficiency. The build quality exceeded expectations.",

    author: "Supply Chain Director",
    company: "FMCG Industry",
  },
  {
    quote: "Manufacturing Industry",
    detail:
      "Engineered for heavy-duty operations” — We required a warehouse capable of handling heavy machinery loads and crane systems. Inbuilt Infra’s engineering team delivered a structurally robust facility with precision fabrication. Their technical expertise stood out throughout the project.",
    author: "Plant Head",
    company: "Engineering Manufacturing Firm",
  },
  {
    quote: "E-Commerce Industry",
    detail:
      "“Built for high-speed fulfillment” — Our e-commerce fulfillment center demanded rapid construction and scalability. Inbuilt Infra completed the warehouse within tight deadlines, enabling us to start peak-season operations on time.",
    author: "Infrastructure Manager",
    company: "E-Commerce Company",
  },
  {
    quote: "Automotive OEM Supplier",
    detail:
      "“Designed for high-load racking systems” — The automotive components warehouse required strong flooring and optimized column spacing. Inbuilt Infra’s structural planning allowed efficient racking installation and improved internal material flow.",
    author: "Operations Manager",
    company: "Automotive Industry",
  },
];

// Hero Background Carousel Component
function HeroBackgroundCarousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/Hero-Section-01.jpeg",
    "/Hero-Section-02.jpeg",
    "/Hero-Section-03.jpeg",
    "/Hero-Section-04.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {images.map((img, index) => (
        <motion.div
          key={img}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImage === index ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={img}
            alt={`Hero background ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            unoptimized
          />
        </motion.div>
      ))}
    </div>
  );
}

// Global Impact Section with Lottie
function GlobalImpactSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      className="relative py-20 px-6 bg-gradient-to-br from-[#0A2A4A] via-[#164a7a] to-[#0A2A4A] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Very Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.18) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Subtle diagonal lines overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,172,3,0.4) 0px, rgba(255,172,3,0.4) 1px, transparent 1px, transparent 60px)",
        }}
      />

      {/* Interactive Grid - Visible on Cursor */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 172, 3, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 172, 3, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            maskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-left"
          >
            <span className="text-sm font-inter font-black tracking-widest text-[#FFAC03] uppercase mb-4 block">
              Global Presence
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-black tracking-tight mb-6 text-white">
              Building Excellence Across India
            </h2>
            <p className="text-base md:text-lg font-roboto font-medium text-white/90 mb-10 leading-relaxed">
              From manufacturing facilities to institutional infrastructure, our
              projects span diverse industries and deliver measurable impact.
            </p>

            {/* Stats Grid - Compact */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-lg">
              {[
                {
                  number: "300",
                  suffix: "+",
                  label: "Projects Completed",
                  icon: Building2,
                },
                {
                  number: "12",
                  suffix: "+",
                  label: "Years of Excellence",
                  icon: TrendingUp,
                },
                {
                  number: "98",
                  suffix: "%",
                  label: "Client Satisfaction",
                  icon: CheckCircle2,
                },
                {
                  number: "250",
                  suffix: "+",
                  label: "Expert Team Members",
                  icon: HardHat,
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative group bg-white/8 backdrop-blur-sm rounded-lg p-2.5 border border-white/15 hover:border-white/30 transition-all duration-500"
                >
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-md bg-[#FFAC03] flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform duration-500">
                    <stat.icon
                      className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#0A2A4A]"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="text-xl md:text-2xl font-inter font-black mb-0.5 text-white">
                    <AnimatedCounter
                      end={parseInt(stat.number)}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-[8px] md:text-[9px] font-inter font-bold uppercase tracking-wider text-white/60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-10"
            >
              <p className="text-lg md:text-xl font-inter font-bold text-white/90 mb-6">
                Ready to join our growing list of satisfied clients?
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 bg-[#FFAC03] text-[#0A2A4A] px-8 py-4 rounded-full font-inter font-black hover:bg-[#FF9D00] transition-all shadow-2xl shadow-[#FFAC03]/40 active:scale-95 text-base"
              >
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Lottie Animation - Extra Large */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center lg:justify-end w-full"
          >
            <div className="w-full aspect-square max-w-[700px] md:max-w-[900px] lg:max-w-none lg:w-[110%]">
              <DotLottieReact
                src="/Construction.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Why Inbuilt Carousel Component - Auto-scrolling with 3 cards visible
function WhyInbuiltCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      icon: ClipboardCheck,
      title: "Turnkey Warehouse Construction",
      description:
        "From design to handover, we manage every stage under one contract.",
    },
    {
      icon: Layers,
      title: "PEB Warehouse Experts",
      description:
        "Engineered steel structures for faster construction and maximum durability.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "Efficient planning and execution to complete projects on schedule.",
    },
    {
      icon: Search,
      title: "Transparent Pricing",
      description:
        "Detailed estimates with optimized designs and no hidden costs.",
    },
    {
      icon: Factory,
      title: "Industrial Construction",
      description:
        "Trusted industrial building construction company for warehouses and manufacturing facilities.",
    },
    {
      icon: HardHat,
      title: "Design & Build Solutions",
      description:
        "Complete engineering, construction, and project management from one team.",
    },
  ];

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  const getCardPosition = (index: number) => {
    const diff = (index - currentIndex + features.length) % features.length;
    if (diff === 0) return "center";
    if (diff === 1 || diff === features.length - 1) return "side";
    return "hidden";
  };

  return (
    <div className="relative py-16">
      {/* Carousel Container */}
      <div className="relative h-[500px] md:h-[550px] flex items-center justify-center overflow-hidden">
        {features.map((feature, index) => {
          const position = getCardPosition(index);
          const diff =
            (index - currentIndex + features.length) % features.length;
          const isLeft = diff === features.length - 1;

          return (
            <motion.div
              key={index}
              animate={{
                scale: position === "center" ? 1 : 0.85,
                opacity:
                  position === "hidden" ? 0 : position === "center" ? 1 : 0.5,
                x:
                  position === "hidden"
                    ? isLeft
                      ? "-100%"
                      : "100%"
                    : position === "center"
                      ? "0%"
                      : isLeft
                        ? "-110%"
                        : "110%",
                zIndex: position === "center" ? 20 : 10,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute w-[85%] md:w-[420px] lg:w-[480px] pointer-events-none"
            >
              <div
                className={`bg-gradient-to-br ${position === "center" ? "from-[#FFAC03] via-[#FF8800] to-[#FFAC03]" : "from-[#0A2A4A] to-[#164a7a]"} rounded-3xl p-8 md:p-12 h-[450px] md:h-[480px] flex flex-col items-center justify-center text-center transition-all duration-600`}
              >
                {/* Icon */}
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl ${position === "center" ? "bg-white" : "bg-[#FFAC03]"} flex items-center justify-center mb-6`}
                >
                  <feature.icon
                    className={`w-10 h-10 md:w-12 md:h-12 text-[#0A2A4A]`}
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-2xl md:text-3xl font-inter font-black mb-4 ${position === "center" ? "text-[#0A2A4A]" : "text-white"}`}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-base md:text-lg font-roboto font-medium leading-relaxed ${position === "center" ? "text-[#0A2A4A]/80" : "text-white/90"} max-w-md`}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-[#0A2A4A]"
                : "w-2.5 bg-[#0A2A4A]/30 hover:bg-[#0A2A4A]/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Animated Counter Component
function AnimatedCounter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {isInView ? (
        <CountUp end={end} duration={2.5} separator="," suffix={suffix} />
      ) : (
        "0"
      )}
    </span>
  );
}

// FAQ Accordion Component
function FAQItem({
  faq,
  index,
  isOpen,
  onClick,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ delay: index * 0.05 }}
      className="border-b border-[#FFAC03]/20 last:border-0"
      whileHover={{ x: 4 }}
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-start justify-between gap-6 text-left group hover:opacity-80 transition-all duration-300"
      >
        <span className="font-inter font-bold text-lg text-[#0A2A4A] pr-8 leading-relaxed group-hover:text-[#FFAC03] transition-colors">
          {faq.question}
        </span>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFAC03]/10 flex items-center justify-center group-hover:bg-[#FFAC03] group-hover:scale-110 transition-all duration-300">
          {isOpen ? (
            <Minus
              className="w-4 h-4 text-[#FFAC03] group-hover:text-white transition-colors"
              strokeWidth={3}
            />
          ) : (
            <Plus
              className="w-4 h-4 text-[#FFAC03] group-hover:text-white transition-colors"
              strokeWidth={3}
            />
          )}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-slate-600 font-roboto font-medium leading-relaxed pr-12">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");

    const formData = new FormData(e.currentTarget);

    const projectType = formData.get("project_type");
    const timeline = formData.get("project_timeline");
    const budget = formData.get("project_budget");
    const projectDetails = formData.get("project_details");

    // Prepare the data for the API (keys must match backend field names)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: projectDetails || "",
      company: formData.get("company"),
      location: formData.get("location"),
      sqf: formData.get("sqft"),
      projectType,
      projectStartTimeline: timeline,
      projectBudget: budget,
    };

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/enquiry-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error. Please check your connection.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#FFAC03]/30 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between border-b border-black/5 bg-white/80 backdrop-blur-2xl"
      >
        <a
          href="https://inbuiltinfra.com"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="relative w-12 h-12">
            <Image
              src="/ini.png"
              alt="Inbuilt Infra Logo"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <span className="font-inter font-black text-2xl tracking-tight text-[#0A2A4A]">
            Inbuilt Infra
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8 text-sm font-inter font-bold">
          <a
            href="#hero"
            className="text-slate-600 hover:text-[#FFAC03] transition-colors"
          >
            Home
          </a>
          <a
            href="#why-us"
            className="text-slate-600 hover:text-[#FFAC03] transition-colors"
          >
            Why Us
          </a>
          <a
            href="#industries"
            className="text-slate-600 hover:text-[#FFAC03] transition-colors"
          >
            Industries
          </a>
          <a
            href="#process"
            className="text-slate-600 hover:text-[#FFAC03] transition-colors"
          >
            Process
          </a>
          <a
            href="#testimonials"
            className="text-slate-600 hover:text-[#FFAC03] transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#faq"
            className="text-slate-600 hover:text-[#FFAC03] transition-colors"
          >
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact-form"
            className="bg-[#FFAC03] text-[#0A2A4A] px-6 py-2.5 rounded-full text-sm font-inter font-black hover:bg-[#FF9D00] transition-all shadow-lg shadow-[#FFAC03]/25 active:scale-95 hover:shadow-xl hover:shadow-[#FFAC03]/30 inline-flex items-center justify-center"
          >
            Get Quote
          </a>
        </div>
      </motion.nav>

      {/* Hero Section - Left Aligned */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden bg-[#0A2A4A]"
      >
        <div className="absolute inset-0">
          <HeroBackgroundCarousel />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2A4A]/95 via-[#0A2A4A]/70 to-[#0A2A4A]/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-16 lg:py-40">
          <div className="grid lg:grid-cols-[1fr_460px] gap-10 items-center">
            {/* LEFT CONTENT */}
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start max-w-3xl order-1 lg:order-1"
            >
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#FFAC03]" />

                <span className="text-[12px] sm:text-[13px] font-inter font-black tracking-[0.2em] uppercase text-[#FFAC03]">
                  South India's #1 Trusted PEB Manufacturer — 15+ Years
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-[36px] sm:text-[52px] md:text-[68px] lg:text-[76px] font-inter font-black tracking-[-0.045em] text-white leading-[0.95]"
              >
                Build a High-Performance
                <br />
                Warehouse <br />
                <span className="block mt-4 text-[#FFAC03] text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-light tracking-[-0.03em] leading-none italic">
                  Just in 150 Days.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="mt-8 max-w-2xl font-roboto text-[18px] leading-[1.9] text-white/80"
              >
                Partner with a{" "}
                <strong className="font-bold text-white">
                  Warehouse Construction Company
                </strong>{" "}
                that takes complete ownership of your project. Whether you need
                a{" "}
                <strong className="font-bold text-white">
                  Warehouse Building Contractor
                </strong>
                ,{" "}
                <strong className="font-bold text-white">
                  PEB Warehouse Construction Company
                </strong>
                , or a{" "}
                <strong className="font-bold text-white">
                  Turnkey Warehouse Construction Company
                </strong>
                , Inbuilt Infra delivers faster execution, better engineering,
                and predictable project outcomes.
              </motion.p>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="mt-8 space-y-5"
              >
                {[
                  "Single Contract. Zero Coordination Hassles.",
                  "End-to-End Turnkey Execution",
                  "Built for Industrial Performance",
                  "Trusted by Leading Manufacturing & Logistics Companies",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#FFAC03] flex-shrink-0">
                      <Check
                        className="h-4 w-4 text-[#0A2A4A]"
                        strokeWidth={3.5}
                      />
                    </div>

                    <p className="font-roboto text-[17px] text-white/90 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </motion.div>
              {/* Reviews */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.7 }}
                className="mt-8 flex items-center gap-3"
              >
                {/* Customer Images */}
                <div className="flex -space-x-2">
                  <img
                    src="/Inbuilt_Infra_client_logo_asset/KRM_School.jpg"
                    alt="Client"
                    className="w-9 h-9 rounded-full object-cover border-2 border-[#0A2A4A] bg-white"
                  />

                  <img
                    src="/Inbuilt_Infra_client_logo_asset/MGR-University.png"
                    alt="Client"
                    className="w-9 h-9 rounded-full object-cover border-2 border-[#0A2A4A] bg-white"
                  />

                  <img
                    src="/Inbuilt_Infra_client_logo_asset/Vel_Tech_University.png"
                    alt="Client"
                    className="w-9 h-9 rounded-full object-cover border-2 border-[#0A2A4A] bg-white"
                  />
                </div>

                {/* Rating Content */}
                <div className="flex flex-col">
                  {/* Stars + Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#FFAC03] text-[#FFAC03]"
                          strokeWidth={1.8}
                        />
                      ))}
                    </div>

                    <span className="text-white font-inter font-bold text-sm">
                      4.7/5 Trusted Client Rating
                    </span>
                  </div>

                  {/* Bottom Text */}
                  <span className="text-white/70 text-[13px] font-roboto leading-relaxed">
                    500+ Successful Industrial Projects
                  </span>
                </div>
              </motion.div>

              {/* Buttons */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 mt-10"
              >
                <a
                  href="#contact-form"
                  className="group bg-[#FFAC03] text-[#0A2A4A] px-8 py-4 rounded-full font-inter font-black hover:bg-[#FF9D00] transition-all shadow-xl shadow-[#FFAC03]/30 active:scale-95 flex items-center justify-center gap-2 text-base"
                >
                  Get Free Consultation

                  <ArrowRight
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    strokeWidth={2.5}
                  />
                </a>

                <a
                  href="#portfolio"
                  className="bg-transparent border-2 border-[#FFAC03] text-[#FFAC03] px-8 py-4 rounded-full font-inter font-black hover:bg-[#FFAC03]/10 transition-all active:scale-95 text-base flex items-center justify-center"
                >
                  View Projects
                </a>
              </motion.div> */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="hidden lg:flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
              >
                {/* Call Us */}
                <a
                  href="tel:9790924754"
                  className="group bg-[#FFAC03] text-[#0A2A4A] px-8 py-4 rounded-full font-inter font-black hover:bg-[#FF9D00] transition-all shadow-xl shadow-[#FFAC03]/20 active:scale-95 flex items-center justify-center gap-3 text-base"
                >
                  <Phone className="w-5 h-5" strokeWidth={2.5} />
                  Call Us
                </a>

                {/* WhatsApp */}
                <a
                  href="https://api.whatsapp.com/send/?phone=917823967391&text=Hi%20Inbuilt%20Infra,%20I%E2%80%99m%20interested%20in%20building%20a%20warehouse.%20Please%20share%20project%20details,%20pricing,%20and%20next%20steps.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                  className="group border-2 border-[#25D366] text-[#25D366] px-8 py-4 rounded-full font-inter font-black hover:bg-[#25D366]/10 transition-all active:scale-95 flex items-center justify-center gap-3 text-base"
                >
                  <svg
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M19.11 17.21c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.16-1.34-.8-.71-1.34-1.58-1.49-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.52-.44-.45-.6-.46-.16-.01-.34-.01-.52-.01s-.47.07-.71.34c-.24.27-.93.91-.93 2.22s.96 2.58 1.09 2.76c.14.18 1.89 2.88 4.57 4.03.64.27 1.14.43 1.53.55.64.2 1.23.17 1.69.1.52-.08 1.58-.65 1.8-1.27.22-.63.22-1.16.16-1.27-.07-.11-.24-.18-.51-.32Z" />
                    <path d="M16.01 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.57-1.68a12.75 12.75 0 0 0 6.24 1.61h.01c7.06 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.64-3.75-9.05A12.7 12.7 0 0 0 16.01 3.2Zm0 23.37h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.9 1 1.04-3.8-.25-.39a10.63 10.63 0 1 1 8.91 4.9Z" />
                  </svg>
                  WhatsApp Us
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-full max-w-[460px] mx-auto lg:ml-auto order-2 lg:-mt-27"
            >
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[26px] p-4 md:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                {/* Heading */}
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-inter font-black text-white leading-tight">
                    Get Free Project Estimate
                  </h3>
                </div>

                {/* FORM */}
                <form className="space-y-3" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-white/90 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full h-10 rounded-xl border border-white/15 bg-white/10 px-3.5 font-roboto text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/30 focus:border-[#FFAC03] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-white/90 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        maxLength={10}
                        required
                        pattern="[0-9]{10}"
                        placeholder="+91 98xxx xxxxx"
                        onInput={(e) => {
                          const target = e.target as HTMLInputElement;
                          target.value = target.value.replace(/[^0-9]/g, "");
                        }}
                        className="w-full h-10 rounded-xl border border-white/15 bg-white/10 px-3.5 font-roboto text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/30 focus:border-[#FFAC03] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-white/90 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        placeholder="Organisation"
                        className="w-full h-10 rounded-xl border border-white/15 bg-white/10 px-3.5 font-roboto text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/30 focus:border-[#FFAC03] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-white/90 mb-1">
                        Email ID
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        className="w-full h-10 rounded-xl border border-white/15 bg-white/10 px-3.5 font-roboto text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/30 focus:border-[#FFAC03] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-white/90 mb-1">
                        Project Type *
                      </label>
                      <select
                        name="project_type"
                        defaultValue=""
                        required
                        className="w-full h-10 rounded-xl border border-white/15 bg-white/10 px-3.5 font-roboto text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/30 focus:border-[#FFAC03] transition-all"
                      >
                        <option value="" disabled className="text-black">
                          Select project type
                        </option>
                        <option className="text-black">
                          Industrial Warehouse
                        </option>
                        <option className="text-black">
                          Commercial Building
                        </option>
                        <option className="text-black">
                          Institutional Sector
                        </option>
                        <option className="text-black">
                          Multi-Storey Steel Building
                        </option>
                        <option className="text-black">Tensile</option>
                        <option className="text-black">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-white/90 mb-1">
                        Approximate Area *
                      </label>
                      <select
                        defaultValue=""
                        name="sqft"
                        required
                        className="w-full h-10 rounded-xl border border-white/15 bg-white/10 px-3.5 font-roboto text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/30 focus:border-[#FFAC03] transition-all"
                      >
                        <option value="" disabled className="text-black">
                          Select area
                        </option>
                        <option className="text-black">
                          10,000 – 20,000 Sq.ft
                        </option>
                        <option className="text-black">
                          20,000 – 30,000 Sq.ft
                        </option>
                        <option className="text-black">
                          30,000 – 50,000 Sq.ft
                        </option>
                        <option className="text-black">
                          Above 50,000 Sq.ft
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-white/90 mb-1">
                        Project Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        placeholder="City, State"
                        className="w-full h-10 rounded-xl border border-white/15 bg-white/10 px-3.5 font-roboto text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/30 focus:border-[#FFAC03] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-white/90 mb-1">
                        Project Start Timeline? *
                      </label>
                      <select
                        name="project_timeline"
                        defaultValue=""
                        required
                        className="w-full h-10 rounded-xl border border-white/15 bg-white/10 px-3.5 font-roboto text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/30 focus:border-[#FFAC03] transition-all"
                      >
                        <option value="" disabled className="text-black">
                          Select timeline
                        </option>
                        <option className="text-black">Immediately</option>
                        <option className="text-black">Within 1 Month</option>
                        <option className="text-black">Within 3 Months</option>
                        <option className="text-black">
                          Planning for Future
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-white/90 mb-1">
                        Project Budget *
                      </label>
                      <select
                        name="project_budget"
                        defaultValue=""
                        required
                        className="w-full h-10 rounded-xl border border-white/15 bg-white/10 px-3.5 font-roboto text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/30 focus:border-[#FFAC03] transition-all"
                      >
                        <option value="" disabled className="text-black">
                          Select budget
                        </option>
                        <option className="text-black">Below ₹50 Lakhs</option>
                        <option className="text-black">
                          ₹50 Lakhs – ₹1 Crore
                        </option>
                        <option className="text-black">
                          ₹1 Crore – ₹5 Crores
                        </option>
                        <option className="text-black">Above ₹5 Crores</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-white/90 mb-1">
                      Brief Project Details (Optional)
                    </label>
                    <textarea
                      name="project_details"
                      placeholder="Crane loads, expansion plans, special requirements..."
                      rows={2}
                      className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 font-roboto text-sm text-white placeholder:text-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/30 focus:border-[#FFAC03] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#FFAC03] to-[#FF8800] px-5 py-3 text-base font-inter font-black text-[#0A2A4A] transition-all hover:shadow-[0_20px_50px_rgba(255,172,3,0.35)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-20"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-90"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get My Free Project Estimate
                          <ArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            strokeWidth={2.5}
                          />
                        </>
                      )}
                    </span>
                  </button>

                  <p className="text-center text-[11px] leading-relaxed text-white/70 font-roboto">
                    🔒 No spam. No obligation. We call you within 4 business
                    hours.
                  </p>
                </form>
              </div>
            </motion.div>
            <div className="flex flex-col gap-4 mt-8 lg:hidden order-3">
              <a
                href="tel:9790924754"
                className="group bg-[#FFAC03] text-[#0A2A4A] px-8 py-4 rounded-full font-inter font-black hover:bg-[#FF9D00] transition-all shadow-xl shadow-[#FFAC03]/20 active:scale-95 flex items-center justify-center gap-3 text-base"
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                Call Us
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=917823967391&text=Hi%2C+I%27m+planning+a+PEB+project+of+approx+%5Bsq.ft%5D+in+%5Bcity%5D.+Please+share+details.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="group border-2 border-[#25D366] text-[#25D366] px-8 py-4 rounded-full font-inter font-black hover:bg-[#25D366]/10 transition-all active:scale-95 flex items-center justify-center gap-3 text-base"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* STATS BAR */}
      <section className="relative z-20 -mt-1 bg-[#071726] border-t border-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                number: 300,
                suffix: "+",
                label: "Projects Delivered",
                animated: true,
              },
              {
                number: 12,
                suffix: "+",
                label: "Years of Excellence",
                animated: true,
              },
              {
                number: 150,
                suffix: "",
                label: "Day Delivery Guarantee",
                animated: true,
              },
              {
                number: "98%",
                label: "On-Time Rate",
                animated: false,
              },
              {
                number: "IS 800",
                label: "Compliant Fabrication",
                animated: false,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2 sm:gap-3 py-6 px-5 border-b lg:border-b-0 border-white/5 lg:border-r last:border-r-0 border-white/10"
              >
                {/* Number */}
                <div className="flex items-baseline text-[#FFAC03] font-inter font-black text-3xl tracking-tight">
                  {item.animated ? (
                    <>
                      <CountUp
                        end={Number(item.number)}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyOnce
                      />

                      <span>{item.suffix}</span>
                    </>
                  ) : (
                    <span>{item.number}</span>
                  )}
                </div>

                {/* Label */}
                <span className="text-white/70 text-sm font-roboto leading-snug">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section - Auto Scrolling Carousel */}
      <section className="py-20 border-y border-slate-200 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <p className="text-sm font-inter font-black tracking-widest text-[#FFAC03] uppercase mb-2">
              Trusted By
            </p>
            {/* <h2 className="text-3xl font-inter font-black text-[#0A2A4A]">Leading Institutions</h2> */}
          </motion.div>

          {/* Auto-scrolling carousel */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-marquee gap-16">
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div key={index} className="relative h-20 w-40 flex-shrink-0">
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Apple Carousel */}
      <section
        id="why-us"
        className="py-20 px-6 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-sm font-inter font-black tracking-widest text-[#FFAC03] uppercase mb-4 block">
              Why Inbuilt Infra
            </span>
            <h2 className="text-5xl md:text-6xl font-inter font-black tracking-tight mb-6 text-[#0A2A4A]">
              Trusted Warehouse Construction Company
            </h2>
            <p className="text-lg font-roboto font-medium text-slate-600 leading-relaxed">
              We deliver{" "}
              <strong className="font-bold text-[#0A2A4A]">
                turnkey warehouse construction
              </strong>
              ,{" "}
              <strong className="font-bold text-[#0A2A4A]">
                PEB warehouse construction
              </strong>
              , and{" "}
              <strong className="font-bold text-[#0A2A4A]">
                industrial warehouse
              </strong>{" "}
              construction with faster execution, optimized costs, and
              long-lasting quality.
            </p>
          </motion.div>

          <WhyInbuiltCarousel />
        </div>
      </section>

      {/* Stats Section - Moved after Why Choose Us */}
      {/* <section className="py-16 bg-[#0A2A4A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #FFAC03 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { num: 15, suffix: "+", label: "Years Experience" },
              { num: 1500, suffix: "+", label: "Projects Delivered" },
              { num: 98, suffix: "%", label: "Client Satisfaction" },
              { num: 0, suffix: "", label: "Compromise Quality", special: "Zero" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="text-center group"
              >
                <div className="text-5xl lg:text-6xl font-inter font-black mb-3 text-[#FFAC03] group-hover:scale-110 transition-transform duration-500">
                  {stat.special ? stat.special : <AnimatedCounter end={stat.num} suffix={stat.suffix} />}
                </div>
                <div className="text-xs font-inter font-black uppercase tracking-widest text-slate-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}
      <TrustSection />

      {/* Industries Section */}

      {/* <section id="industries" className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <span className="text-sm font-inter font-black tracking-widest text-[#FFAC03] uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-5xl md:text-6xl font-inter font-black tracking-tight text-[#0A2A4A]">
              Industries We Serve
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Commercial *
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="card-3d group relative p-12 rounded-3xl border-2 border-[#FFAC03]/30 hover:border-[#FFAC03] transition-all duration-500 overflow-hidden"
            >
              {/* Background Image *
              <div className="absolute inset-0">
                <Image
                  src="/Commercial Developments-01.jpg"
                  alt="Commercial Developments"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A2A4A]/85 via-[#0A2A4A]/80 to-[#0A2A4A]/75" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#FFAC03] flex items-center justify-center mb-8 shadow-xl">
                  <Building2 className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                <h3 className="text-3xl font-inter font-black mb-8 text-white">
                  Commercial Developments
                </h3>

                <ul className="space-y-5">
                  {["Office Buildings", "Retail & Showrooms", "Commercial Complexes", "Business Spaces"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 font-roboto font-bold text-lg text-white">
                      <div className="w-2 h-2 rounded-full bg-[#FFAC03]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Institutional *
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="card-3d group relative p-12 rounded-3xl border-2 border-[#FFAC03]/30 hover:border-[#FFAC03] transition-all duration-500 overflow-hidden"
            >
              {/* Background Image *
              <div className="absolute inset-0">
                <Image
                  src="/Insittutional-Buildings-01.jpg"
                  alt="Institutional Buildings"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF8800]/85 via-[#FFAC03]/80 to-[#FF8800]/75" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-xl">
                  <Building2 className="w-8 h-8 text-[#FFAC03]" strokeWidth={2} />
                </div>

                <h3 className="text-3xl font-inter font-black mb-8 text-white">
                  Institutional Infrastructure
                </h3>

                <ul className="space-y-5">
                  {["Educational Institutions", "Hospitals & Healthcare", "Training Centers", "Public Buildings"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 font-roboto font-bold text-lg text-white">
                      <div className="w-2 h-2 rounded-full bg-white" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Additional Industries Grid with Background Images *
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Manufacturing",
                items: ["Food Processing", "Pharma Units", "Automobile Manufacturing", "Chemical / FMCG", "Textile"],
                bgImage: "/Manufacturing-building-01.jpg"
              },
              {
                title: "Cold Storage",
                items: ["Frozen Food Storage", "Clean Room Facilities", "Pharmaceutical Storage", "Temperature Controlled"],
                bgImage: "/Cold-Storage-01.jpeg"
              },
              {
                title: "Multi-Storey Steel",
                items: ["Hospitals & Institutional", "Corporate Offices & Hotels", "Commercial Buildings", "Mixed-Use Developments"],
                bgImage: "/Multi-Storey-steel-01.jpeg"
              }
            ].map((category, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="card-3d relative overflow-hidden rounded-2xl border-2 border-[#FFAC03]/20 hover:border-[#FFAC03] hover:shadow-2xl hover:shadow-[#FFAC03]/20 transition-all duration-500 group"
              >
                {/* Background Image *
                <div className="absolute inset-0">
                  <Image
                    src={category.bgImage}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0A2A4A]/70 via-[#0A2A4A]/75 to-[#0A2A4A]/85" />
                </div>

                {/* Content *
                <div className="relative z-10 p-8">
                  <h4 className="text-xl font-inter font-black font-bold text-white mb-6 pb-4 border-b border-white/20">
                    {category.title}
                  </h4>
                  <ul className="space-y-3">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 font-roboto font-medium text-sm text-white/90">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFAC03] mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Problem → Solution Comparison Table */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <span className="text-sm font-inter font-black tracking-widest text-[#FFAC03] uppercase mb-4 block">
              Problem → Solution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-inter font-black tracking-tight leading-snug mb-6 text-[#0A2A4A] text-balance">
              Why Choose PEB Warehouse Construction Over Conventional Warehouse
              Construction?
            </h2>
            <p className="text-base md:text-lg font-roboto font-medium text-slate-600 leading-relaxed max-w-3xl mx-auto">
              As a leading Warehouse Construction Company, we deliver Turnkey
              Warehouse Construction, PEB Warehouse Construction, and Industrial
              Warehouse Construction solutions that offer faster project
              completion, optimized costs, and superior long-term performance
              compared to conventional construction.
            </p>
          </motion.div>

          {/* Responsive Table */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="overflow-x-auto rounded-2xl border-2 border-slate-200 shadow-xl"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="bg-gradient-to-br from-slate-100 to-slate-50 p-4 md:p-6 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-red-600 text-lg md:text-xl font-bold">
                          ✕
                        </span>
                      </div>
                      <span className="text-base md:text-xl font-inter font-black text-slate-700">
                        Conventional Warehouse Construction
                      </span>
                    </div>
                  </th>
                  <th className="bg-gradient-to-br from-[#FFAC03] to-[#FF8800] p-4 md:p-6 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <CheckCircle2
                          className="w-5 h-5 md:w-6 md:h-6 text-[#FFAC03]"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-base md:text-xl font-inter font-black text-white">
                        PEB Warehouse Construction by Inbuilt Infra
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    problemTitle: "Longer Project Timelines",
                    problem:
                      "Traditional warehouse construction relies on on-site activities, increasing project duration.",
                    solutionTitle: "40–50% Faster Delivery",
                    solution:
                      "Our PEB Warehouse Construction Company uses factory-fabricated components for faster installation.",
                  },
                  {
                    problemTitle: "Higher Construction Costs",
                    problem:
                      "Material wastage and multiple contractors often increase overall project costs.",
                    solutionTitle: "Optimized Project Cost",
                    solution:
                      "As experienced PEB Building Contractors, we optimize steel usage for better value.",
                  },
                  {
                    problemTitle: "Multiple Contractors",
                    problem:
                      "Managing different vendors can cause delays and communication issues.",
                    solutionTitle: "Turnkey Warehouse Construction",
                    solution:
                      "One team manages design, engineering, fabrication, civil works, and installation.",
                  },
                  {
                    problemTitle: "Quality Depends on Site Conditions",
                    problem:
                      "Weather and labor availability can impact construction quality.",
                    solutionTitle: "Factory-Controlled Precision",
                    solution:
                      "Our PEB Construction Company delivers consistent quality with engineered steel components.",
                  },
                  {
                    problemTitle: "Limited Expansion Flexibility",
                    problem:
                      "Future modifications can be expensive and disruptive.",
                    solutionTitle: "Expandable PEB Structures",
                    solution:
                      "Designed for easy expansion as your warehouse operations grow.",
                  },
                  {
                    problemTitle: "Interior Columns Reduce Storage Space",
                    problem:
                      "Conventional buildings often limit usable floor area.",
                    solutionTitle: "Clear Span Warehouse Design",
                    solution:
                      "Column-free spaces maximize storage capacity and operational efficiency.",
                  },
                  {
                    problemTitle: "Higher Maintenance Costs",
                    problem:
                      "Concrete structures require ongoing repairs over time.",
                    solutionTitle: "Low Maintenance Steel Structures",
                    solution:
                      "Durable Steel Structure Warehouses provide long-term reliability with minimal maintenance.",
                  },
                  {
                    problemTitle: "Longer Business Downtime",
                    problem:
                      "Delayed completion postpones warehouse operations.",
                    solutionTitle: "Faster Operational Readiness",
                    solution:
                      "Our Warehouse Construction Contractors deliver projects on time, helping businesses start operations sooner.",
                  },
                ].map((item, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-200 last:border-0 hover:bg-slate-50 transition-colors"
                  >
                    <td className="p-4 md:p-6 align-top">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-600 font-bold text-xs">
                            ✕
                          </span>
                        </div>
                        <div>
                          <p className="font-inter font-bold text-slate-700 text-sm md:text-base mb-1">
                            {item.problemTitle}
                          </p>
                          <p className="font-roboto text-slate-600 leading-relaxed text-xs md:text-sm">
                            {item.problem}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 md:p-6 align-top bg-[#FFAC03]/5">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#FFAC03] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2
                            className="w-3.5 h-3.5 text-white"
                            strokeWidth={3}
                          />
                        </div>
                        <div>
                          <p className="font-inter font-bold text-[#0A2A4A] text-sm md:text-base mb-1">
                            {item.solutionTitle}
                          </p>
                          <p className="font-roboto text-[#0A2A4A]/80 leading-relaxed text-xs md:text-sm">
                            {item.solution}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-12 text-center"
          >
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 bg-[#0A2A4A] text-white px-8 py-4 rounded-full font-roboto font-bold hover:bg-[#0d3558] transition-all shadow-xl shadow-[#0A2A4A]/20 active:scale-95"
            >
              Start Your PEB Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Process Section - REIMAGINED */}
      <section
        id="process"
        className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-sm font-inter font-black tracking-widest text-[#FFAC03] uppercase mb-4 block">
              Our Process
            </span>
            <h2 className="text-5xl md:text-6xl font-inter font-black tracking-tight mb-6 text-[#0A2A4A]">
              How we deliver excellence.
            </h2>
          </motion.div>

          {/* Timeline Style Process */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFAC03] via-[#FFAC03]/50 to-transparent" />

            <div className="space-y-16">
              {[
                {
                  step: "Consultation & Requirement Analysis",
                  desc: "Understanding scope, structural needs, and site conditions.",
                  num: "01",
                },
                {
                  step: "Engineering Design & Planning",
                  desc: "Detailed CAD and structural optimizations for load-bearing.",
                  num: "02",
                },
                {
                  step: "Cost Optimization & Approval",
                  desc: "Transparent quoting and strict timeline locking.",
                  num: "03",
                },
                {
                  step: "Fabrication & Execution",
                  desc: "Precision manufacturing and safe on-site setup.",
                  num: "04",
                },
                {
                  step: "Quality Inspection",
                  desc: "Multi-stage checks for compliance standard validation.",
                  num: "05",
                },
                {
                  step: "Project Delivery",
                  desc: "Handover with complete as-built documentation.",
                  num: "06",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? "" : "md:direction-rtl"}`}
                >
                  {/* Number - Alternates side */}
                  <div
                    className={`${i % 2 === 0 ? "md:order-1 md:flex md:justify-end md:pr-16" : "md:order-2 md:flex md:justify-start md:pl-16"} hidden md:flex`}
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFAC03] to-[#FF8800] flex items-center justify-center shadow-xl">
                      <span className="font-inter font-black text-3xl text-white">
                        {item.num}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`${i % 2 === 0 ? "md:order-2 md:pl-16" : "md:order-1 md:pr-16"}`}
                  >
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#FFAC03]/50 hover:shadow-2xl transition-all duration-500 group">
                      {/* Mobile number */}
                      <div className="flex items-center gap-4 mb-4 md:hidden">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFAC03] to-[#FF8800] flex items-center justify-center">
                          <span className="font-inter font-black text-xl text-white">
                            {item.num}
                          </span>
                        </div>
                        <h3 className="font-inter font-black text-xl text-[#0A2A4A] flex-1">
                          {item.step}
                        </h3>
                      </div>
                      {/* Desktop title */}
                      <h3 className="font-inter font-black text-xl text-[#0A2A4A] mb-4 hidden md:block">
                        {item.step}
                      </h3>
                      <p className="text-slate-600 font-roboto font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FFAC03] border-4 border-white shadow-lg z-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Enhanced Layout */}
      <section
        id="portfolio"
        className="py-20 px-6 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <span className="text-sm font-inter font-black tracking-widest text-[#FFAC03] uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="text-5xl md:text-6xl font-inter font-black tracking-tight mb-6 text-[#0A2A4A]">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg font-roboto font-medium text-slate-600 max-w-3xl mx-auto">
              Delivering world-class pre-engineered buildings across diverse
              industries. Every project showcases our commitment to engineering
              excellence and structural precision.
            </p>
          </motion.div>

          {/* Enhanced Asymmetric Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-12 gap-4 md:gap-6"
          >
            {/* Large featured image */}
            <motion.div
              variants={scaleIn}
              className="col-span-12 md:col-span-8 row-span-2 relative aspect-[16/10] md:aspect-[16/11] rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-500"
            >
              <Image
                src={portfolioImages[0]}
                alt="Featured Project"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A4A]/80 via-[#0A2A4A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl md:text-3xl font-inter font-black text-white mb-2">
                  Featured Project
                </h3>
                <p className="text-white/90 font-roboto font-medium">
                  Premium institutional infrastructure delivered on schedule
                </p>
              </div>
            </motion.div>

            {/* Two medium images */}
            {[portfolioImages[1], portfolioImages[2]].map((img, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="col-span-12 md:col-span-4 relative aspect-square md:aspect-auto md:row-span-1 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-500"
              >
                <Image
                  src={img}
                  alt={`Project ${i + 2}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A4A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}

            {/* Row of three small images */}
            {[portfolioImages[3], portfolioImages[4], portfolioImages[5]].map(
              (img, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="col-span-6 md:col-span-4 relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-500"
                >
                  <Image
                    src={img}
                    alt={`Project ${i + 4}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFAC03]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ),
            )}

            {/* Last two images */}
            {[portfolioImages[6], portfolioImages[7]].map((img, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="col-span-6 md:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-500"
              >
                <Image
                  src={img}
                  alt={`Project ${i + 7}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A4A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-16 text-center"
          >
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 bg-[#FFAC03] text-[#0A2A4A] px-10 py-5 rounded-full font-inter font-black hover:bg-[#FF9D00] transition-all shadow-xl shadow-[#FFAC03]/30 active:scale-95 text-lg"
            >
              Start Your Project Today
              <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Global Impact Section - WOW FACTOR */}
      <GlobalImpactSection />

      {/* Testimonials Section - Auto-Scrolling Marquee */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-sm font-inter font-black tracking-widest text-[#FFAC03] uppercase mb-4 block">
              Client Success
            </span>
            <h2 className="text-5xl md:text-6xl font-inter font-black tracking-tight text-[#0A2A4A]">
              What Our Clients Say
            </h2>
          </motion.div>
        </div>

        {/* Auto-scrolling carousel */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee gap-6">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[400px] bg-white p-8 rounded-2xl border-2 border-[#FFAC03]/20 hover:border-[#FFAC03] hover:shadow-2xl hover:shadow-[#FFAC03]/10 transition-all duration-500"
                >
                  <div className="w-12 h-1 bg-gradient-to-r from-[#FFAC03] to-[#FF8800] mb-6" />

                  <div className="mb-6">
                    {/* 5 Star Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#FFAC03] text-[#FFAC03]"
                          strokeWidth={1.8}
                        />
                      ))}
                    </div>
                    {/* Quote */}
                    <h3 className="font-inter font-black text-lg text-[#0A2A4A] leading-tight">
                      "{testimonial.quote}"
                    </h3>
                  </div>

                  <p className="font-roboto font-medium text-sm text-slate-600 leading-relaxed mb-6">
                    {testimonial.detail}
                  </p>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="font-inter font-bold text-[#0A2A4A]">
                      {testimonial.author}
                    </div>
                    <div className="text-sm font-roboto font-medium text-slate-500 mt-1">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* URGENCY CTA SECTION */}

      <section className="relative py-20 bg-[#fff] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative rounded-[36px] bg-[#0A2A4A] overflow-hidden border border-white/5">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#FFAC03]/10 blur-3xl rounded-full" />

            <div className="relative z-10 grid lg:grid-cols-[1.2fr_auto] gap-10 items-center px-8 md:px-14 py-12 md:py-16">
              {/* LEFT CONTENT */}
              <div>
                {/* Small Label */}
                <div className="inline-flex items-center gap-2 mb-5 flex-wrap">
                  <span className="text-[#FFAC03] uppercase tracking-[0.18em] text-[12px] font-inter font-black">
                    Project Calendar Update — July 2026
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-white font-inter font-black text-4xl md:text-5xl leading-[1.05] tracking-[-0.04em] max-w-3xl">
                  Production Slots for Q3 2026
                  <br />
                  Are Filling Fast.
                </h2>

                {/* Description */}
                <p className="mt-7 text-white/75 text-[17px] leading-[1.9] max-w-2xl font-roboto">
                  Inbuilt Infra manages multiple large-scale projects
                  simultaneously — but our engineering calendar operates on a
                  first-confirmed basis. Projects enquired this month receive a
                  complimentary site feasibility assessment.
                </p>
              </div>

              {/* RIGHT BUTTONS */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:min-w-[240px]">
                {/* CTA */}
                <a
                  href="#contact-form"
                  className="group inline-flex items-center justify-center rounded-2xl bg-[#FFAC03] px-8 py-4 text-[#071726] font-inter font-black text-base transition-all hover:bg-[#FF9D00] active:scale-[0.98]"
                >
                  <span className="flex items-center gap-2">
                    Reserve My Slot
                    <ArrowRight
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      strokeWidth={2.5}
                    />
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://api.whatsapp.com/send/?phone=917823967391&text=Hi%20Inbuilt%20Infra,%20I%E2%80%99m%20interested%20in%20building%20a%20warehouse.%20Please%20share%20project%20details,%20pricing,%20and%20next%20steps.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-8 py-4 text-white font-inter font-black text-base transition-all hover:bg-[#20c45a] active:scale-[0.98]"
                >
                  <svg
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M19.11 17.21c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.16-1.34-.8-.71-1.34-1.58-1.49-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.52-.44-.45-.6-.46-.16-.01-.34-.01-.52-.01s-.47.07-.71.34c-.24.27-.93.91-.93 2.22s.96 2.58 1.09 2.76c.14.18 1.89 2.88 4.57 4.03.64.27 1.14.43 1.53.55.64.2 1.23.17 1.69.1.52-.08 1.58-.65 1.8-1.27.22-.63.22-1.16.16-1.27-.07-.11-.24-.18-.51-.32Z" />
                    <path d="M16.01 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.57-1.68a12.75 12.75 0 0 0 6.24 1.61h.01c7.06 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.64-3.75-9.05A12.7 12.7 0 0 0 16.01 3.2Zm0 23.37h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.9 1 1.04-3.8-.25-.39a10.63 10.63 0 1 1 8.91 4.9Z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY INBUILT INFRA */}
      <section className="relative py-24 overflow-hidden bg-[#0A2A4A]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/why-inbuilt-bg.jpg"
            alt="Industrial Facility"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0A2A4A]/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Top Content */}
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FFAC03]" />
              <span className="text-[#FFAC03] uppercase tracking-[0.18em] text-sm font-inter font-black">
                Why Inbuilt Infra
              </span>
            </div>

            <h2 className="text-white font-inter font-black text-2xl sm:text-3xl md:text-4xl leading-snug tracking-tight text-balance">
              Trusted Warehouse Construction Company for Faster, Smarter Project
              Delivery
            </h2>

            <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-3xl font-roboto">
              Delivering{" "}
              <strong className="font-bold text-white">
                Turnkey Warehouse Construction
              </strong>
              ,{" "}
              <strong className="font-bold text-white">
                PEB Warehouse Construction
              </strong>
              , and{" "}
              <strong className="font-bold text-white">
                Industrial Warehouse Construction
              </strong>{" "}
              with fixed pricing, faster timelines, and factory-engineered
              precision.
            </p>
          </div>

          {/* GRID */}
          <div className="mt-12 md:mt-16 rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-md">
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "40% Faster",
                  subtitle: "PEB Warehouse Construction",
                  description:
                    "Factory-fabricated steel components reduce construction time by up to 40% compared to conventional warehouse construction.",
                },
                {
                  title: "Fixed Price",
                  subtitle: "Transparent Project Cost",
                  description:
                    "Detailed BOQs and optimized steel design ensure predictable pricing with no hidden project costs.",
                },
                {
                  title: "150 Days",
                  subtitle: "Turnkey Warehouse Delivery",
                  description:
                    "Complete turnkey warehouse construction from design to handover with committed project timelines.",
                },
                {
                  title: "IS 800",
                  subtitle: "Engineered Quality",
                  description:
                    "Every warehouse is designed and fabricated in compliance with IS 800 standards for safety and durability.",
                },
                {
                  title: "One Team",
                  subtitle: "Single-Point Execution",
                  description:
                    "Our Warehouse Construction Contractors manage design, engineering, fabrication, civil works, and installation under one contract.",
                },
                {
                  title: "300+ Projects",
                  subtitle: "Industrial Construction Expertise",
                  description:
                    "Trusted Industrial Building Construction Company delivering warehouses, factories, logistics parks, and PEB buildings across South India.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group border-b border-white/10 lg:border-b-0 lg:border-r last:border-r-0 border-white/10 p-8 md:p-10 hover:bg-white/[0.03] transition-all duration-300"
                >
                  <h3 className="text-[#FFAC03] text-4xl font-inter font-black tracking-tight">
                    {item.title}
                  </h3>

                  <h4 className="mt-5 text-white text-xl font-inter font-bold">
                    {item.subtitle}
                  </h4>

                  <p className="mt-5 text-white/70 text-[15px] leading-[1.9] font-roboto">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - FLOATING WITH IMAGE OVERLAY */}

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-sm font-inter font-black tracking-widest text-[#FFAC03] uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="text-5xl md:text-6xl font-inter font-black tracking-tight mb-6 text-[#0A2A4A]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg font-roboto font-medium text-slate-600">
              Everything you need to know about our PEB solutions.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={activeFaq === index}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </motion.div>
        </div>
      </section>
      {/* Lead Capture CTA - FULL WIDTH */}
      <section
        id="contact-form"
        className="relative overflow-hidden py-24 bg-[#0A2A4A] text-white"
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#FFAC03]/5 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_520px] gap-16 items-start">
            {/* LEFT SIDE */}
            <div className="text-white pt-6">
              {/* Label */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FFAC03]" />

                <span className="text-[#FFAC03] uppercase tracking-[0.18em] text-[12px] font-inter font-black">
                  Start Your Project
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-inter font-black leading-snug tracking-tight text-balance max-w-xl">
                Get a Free Engineering Estimate in 24 Hours.
              </h2>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-[18px] leading-[1.9] text-white/75 font-roboto">
                Tell us about your project. Our engineering team calls within 24
                hours, visits your site within 72 hours, and delivers a
                fixed-price BOQ within 5 working days — zero cost, zero
                obligation.
              </p>

              {/* Bullet Points */}
              <div className="mt-10 space-y-5">
                {[
                  "Fixed-price BOQ — no hidden items, no provisional sums",
                  "150-day delivery guarantee written into the contract",
                  "Single project manager dedicated to your project",
                  "IS 800 compliant fabrication — structural certificate on handover",
                  "Trusted by SRM, Vel Tech, MGR University & 500+ projects",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#FFAC03]/10 border border-[#FFAC03]/20 flex-shrink-0">
                      <Check
                        className="h-4 w-4 text-[#FFAC03]"
                        strokeWidth={3}
                      />
                    </div>

                    <p className="text-white/90 font-roboto text-[16px] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              {/* <div className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-md p-7 max-w-xl">

                <div className="space-y-5">

                  {/* Phone 
                  <div className="flex items-center gap-4">

                    <div className="w-11 h-11 rounded-full bg-[#FFAC03]/10 border border-[#FFAC03]/20 flex items-center justify-center flex-shrink-0">
                      <Phone
                        className="w-4 h-4 text-[#FFAC03]"
                        strokeWidth={2.5}
                      />
                    </div>

                    <a
                      href="tel:+917823967391"
                      className="text-white/90 font-roboto hover:text-[#FFAC03] transition-colors"
                    >
                      +91 78239 67391
                    </a>
                  </div>

                  {/* WhatsApp *
                  <div className="flex items-center gap-4">

                    <div className="w-11 h-11 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0">

                      <svg
                        viewBox="0 0 32 32"
                        className="w-4 h-4 fill-[#25D366]"
                        aria-hidden="true"
                      >
                        <path d="M19.11 17.21c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.16-1.34-.8-.71-1.34-1.58-1.49-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.52-.44-.45-.6-.46-.16-.01-.34-.01-.52-.01s-.47.07-.71.34c-.24.27-.93.91-.93 2.22s.96 2.58 1.09 2.76c.14.18 1.89 2.88 4.57 4.03.64.27 1.14.43 1.53.55.64.2 1.23.17 1.69.1.52-.08 1.58-.65 1.8-1.27.22-.63.22-1.16.16-1.27-.07-.11-.24-.18-.51-.32Z" />
                        <path d="M16.01 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.57-1.68a12.75 12.75 0 0 0 6.24 1.61h.01c7.06 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.64-3.75-9.05A12.7 12.7 0 0 0 16.01 3.2Zm0 23.37h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.9 1 1.04-3.8-.25-.39a10.63 10.63 0 1 1 8.91 4.9Z" />
                      </svg>
                    </div>

                    <a
                      href="https://api.whatsapp.com/send/?phone=917823967391&text=Hi%2C+I%27m+planning+a+PEB+project+of+approx+%5Bsq.ft%5D+in+%5Bcity%5D.+Please+share+details.&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/90 font-roboto hover:text-[#25D366] transition-colors"
                    >
                      WhatsApp us directly
                    </a>
                  </div>

                  {/* Email *
                  <div className="flex items-center gap-4">

                    <div className="w-11 h-11 rounded-full bg-[#FFAC03]/10 border border-[#FFAC03]/20 flex items-center justify-center flex-shrink-0">
                      <Mail
                        className="w-4 h-4 text-[#FFAC03]"
                        strokeWidth={2.5}
                      />
                    </div>

                    <a
                      href="mailto:info@inbuiltinfra.com"
                      className="text-white/90 font-roboto hover:text-[#FFAC03] transition-colors"
                    >
                      info@inbuiltinfra.com
                    </a>
                  </div>

                  {/* Address *
                  <div className="flex items-start gap-4">

                    <div className="w-11 h-11 rounded-full bg-[#FFAC03]/10 border border-[#FFAC03]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin
                        className="w-4 h-4 text-[#FFAC03]"
                        strokeWidth={2.5}
                      />
                    </div>

                    <p className="text-white/90 font-roboto leading-relaxed">
                      First Floor, ZUBII Manor, 7th Avenue,
                      Ashok Nagar, Chennai – 600083
                    </p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* RIGHT FORM */}
            {/* KEEP YOUR EXISTING UPDATED FORM HERE */}
            {/* Right - Form */}
            <div className="bg-white rounded-[28px] p-5 md:p-6 shadow-2xl w-full max-w-xl lg:max-w-none mx-auto border border-[#FFAC03]/20 relative overflow-hidden">
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFAC03] via-[#FF8800] to-[#FFAC03]" />

              {/* Heading */}
              <div className="mb-4">
                <h3 className="text-[#0A2A4A] text-2xl font-inter font-black tracking-tight">
                  Request Free Engineering Estimate
                </h3>

                <p className="mt-1.5 text-slate-500 text-sm leading-relaxed font-roboto">
                  Our engineering team reviews your requirements and responds
                  within 24 business hours.
                </p>
              </div>

              {/* FORM */}
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-slate-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="w-full h-10 rounded-xl border border-slate-200 bg-slate-50 px-3.5 font-roboto text-sm text-[#0A2A4A] focus:border-[#FFAC03] focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-slate-600 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98xxx xxxxx"
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(/[^0-9]/g, "");
                      }}
                      className="w-full h-10 rounded-xl border border-slate-200 bg-slate-50 px-3.5 font-roboto text-sm text-[#0A2A4A] focus:border-[#FFAC03] focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-slate-600 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Organisation"
                      required
                      className="w-full h-10 rounded-xl border border-slate-200 bg-slate-50 px-3.5 font-roboto text-sm text-[#0A2A4A] focus:border-[#FFAC03] focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-slate-600 mb-1">
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      className="w-full h-10 rounded-xl border border-slate-200 bg-slate-50 px-3.5 font-roboto text-sm text-[#0A2A4A] focus:border-[#FFAC03] focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-slate-600 mb-1">
                      Project Type *
                    </label>
                    <select
                      name="project_type"
                      required
                      defaultValue=""
                      className="w-full h-10 rounded-xl border border-slate-200 bg-slate-50 px-3.5 font-roboto text-sm text-[#0A2A4A] focus:border-[#FFAC03] focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/10 transition-all"
                    >
                      <option value="" disabled>
                        Select project type
                      </option>
                      <option className="text-black">
                        Industrial Warehouse
                      </option>
                      <option className="text-black">
                        Commercial Building
                      </option>
                      <option className="text-black">
                        Institutional Sector
                      </option>
                      <option className="text-black">
                        Multi-Storey Steel Building
                      </option>
                      <option className="text-black">Tensile</option>
                      <option className="text-black">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-slate-600 mb-1">
                      Approximate Area *
                    </label>
                    <select
                      name="sqft"
                      required
                      defaultValue=""
                      className="w-full h-10 rounded-xl border border-slate-200 bg-slate-50 px-3.5 font-roboto text-sm text-[#0A2A4A] focus:border-[#FFAC03] focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/10 transition-all"
                    >
                      <option value="" disabled>
                        Select area
                      </option>
                      <option>10,000 – 20,000 Sq.ft</option>
                      <option>20,000 – 30,000 Sq.ft</option>
                      <option>30,000 – 50,000 Sq.ft</option>
                      <option>Above 50,000 Sq.ft</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-slate-600 mb-1">
                      Project Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="City, State"
                      className="w-full h-10 rounded-xl border border-slate-200 bg-slate-50 px-3.5 font-roboto text-sm text-[#0A2A4A] focus:border-[#FFAC03] focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-slate-600 mb-1">
                      Project Start Timeline? *
                    </label>
                    <select
                      name="project_timeline"
                      required
                      defaultValue=""
                      className="w-full h-10 rounded-xl border border-slate-200 bg-slate-50 px-3.5 font-roboto text-sm text-[#0A2A4A] focus:border-[#FFAC03] focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/10 transition-all"
                    >
                      <option value="" disabled>
                        Select timeline
                      </option>
                      <option>Immediately</option>
                      <option>Within 1 Month</option>
                      <option>Within 3 Months</option>
                      <option>Planning for Future</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-slate-600 mb-1">
                      Project Budget *
                    </label>
                    <select
                      name="project_budget"
                      required
                      defaultValue=""
                      className="w-full h-10 rounded-xl border border-slate-200 bg-slate-50 px-3.5 font-roboto text-sm text-[#0A2A4A] focus:border-[#FFAC03] focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/10 transition-all"
                    >
                      <option value="" disabled>
                        Select budget
                      </option>
                      <option>Below ₹50 Lakhs</option>
                      <option>₹50 Lakhs – ₹1 Crore</option>
                      <option>₹1 Crore – ₹5 Crores</option>
                      <option>Above ₹5 Crores</option>
                    </select>
                  </div>
                </div>

                {/* Project Details - full width */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.12em] font-inter font-black text-slate-600 mb-1">
                    Brief Project Details (Optional)
                  </label>
                  <textarea
                    name="project_details"
                    placeholder="Crane loads, expansion plans, special requirements..."
                    rows={2}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 font-roboto text-sm resize-none text-[#0A2A4A] focus:border-[#FFAC03] focus:outline-none focus:ring-2 focus:ring-[#FFAC03]/10 transition-all"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#FFAC03] to-[#FF8800] px-6 py-3 font-inter font-black text-[#0A2A4A] text-base transition-all hover:shadow-xl hover:shadow-[#FFAC03]/30 active:scale-[0.99] disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting
                      ? "Submitting..."
                      : "Get My Free Engineering Estimate"}

                    <ArrowRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      strokeWidth={2.5}
                    />
                  </span>
                </button>

                {/* Footer Note */}
                <p className="text-center text-slate-500 text-[13px] leading-relaxed font-roboto">
                  🔒 100% confidential. No spam. Our engineering team calls
                  within 24 business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A2A4A] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src="/ini.png"
                    alt="Inbuilt Infra Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-inter font-black text-2xl">
                  Inbuilt Infra
                </span>
              </div>
              <p className="text-white/70 font-roboto font-medium text-sm leading-relaxed mb-6">
                With 15+ years of experience, Inbuilt Infra is a trusted
                construction contractor known for delivering high-quality,
                durable, and efficient solutions tailored to diverse project
                needs.
              </p>

              {/* Social Media Links */}
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61563459030303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#FFAC03] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/inbuiltinfra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#FFAC03] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/InbuiltInfra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#FFAC03] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/104104327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#FFAC03] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@InbuiltInfra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#FFAC03] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Major Services */}
            <div>
              <h3 className="font-inter font-black text-white mb-6">
                Major Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <span className="text-white/70 font-roboto font-medium text-sm">
                    Tensile Roofing
                  </span>
                </li>
                <li>
                  <span className="text-white/70 font-roboto font-medium text-sm">
                    PEB Manufacturing
                  </span>
                </li>
                <li>
                  <span className="text-white/70 font-roboto font-medium text-sm">
                    Civil Construction
                  </span>
                </li>
                <li>
                  <span className="text-white/70 font-roboto font-medium text-sm">
                    Retractable Roofing
                  </span>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="font-inter font-black text-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://drive.google.com/file/d/1ybzwTzDPe-Z2CjosGf7uBwF_-Dzm49QM/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#FFAC03] font-roboto font-medium text-sm transition-colors"
                  >
                    Download Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-white/70 hover:text-[#FFAC03] font-roboto font-medium text-sm transition-colors"
                  >
                    View Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#why-us"
                    className="text-white/70 hover:text-[#FFAC03] font-roboto font-medium text-sm transition-colors"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact-form"
                    className="text-white/70 hover:text-[#FFAC03] font-roboto font-medium text-sm transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-inter font-black text-white mb-6">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FFAC03] flex-shrink-0 mt-0.5" />
                  <a
                    href="tel:+917823967391"
                    className="text-white/70 hover:text-[#FFAC03] font-roboto font-medium text-sm transition-colors"
                  >
                    +91 78239 67391
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#FFAC03] flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:info@inbuiltinfra.com"
                    className="text-white/70 hover:text-[#FFAC03] font-roboto font-medium text-sm transition-colors"
                  >
                    info@inbuiltinfra.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FFAC03] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 font-roboto font-medium text-sm">
                    First Floor, ZUBII Manor bearion O No.27E/N 57E at 7th
                    Avenue, Ashok Nagar, Chennai-600083
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 font-roboto text-sm">
              © {new Date().getFullYear()} Inbuilt Infra. All rights reserved.
              Precision PEB Manufacturing.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://docs.google.com/document/d/1-cpWd_swti9O-nymegOZTETI7oAXnKk3Siuq80Z99QY/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#FFAC03] font-roboto text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://docs.google.com/document/d/1H01vz4HcpDuDjLeCMfkAWceIgECTi909BguIQQr2yas/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#FFAC03] font-roboto text-sm transition-colors"
              >
                Terms &amp; Conditions
              </a>
              <a
                href="https://docs.google.com/document/d/1VxIuu1PDzr4vViNsLEOY4EUNbc7dWjkjfiGk5RZdd_A/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#FFAC03] font-roboto text-sm transition-colors"
              >
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
