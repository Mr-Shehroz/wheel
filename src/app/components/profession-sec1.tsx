"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Section1() {
  const buttons = [
    { label: "I am a freelancer", style: "white" }, // first button
    { label: "I am a business", style: "white" },
    { label: "I sponsor", style: "black" }, // third button
  ];

  return (
    <section className="w-full flex flex-col-reverse lg:items-end lg:flex-row mt-20 md:mt-0">
      {/* Left: Image and buttons */}
      <div className="relative w-full h-[70vh] lg:h-[85dvh] lg:ml-6">
        <Image
          className="h-full w-full object-cover"
          src="/home.jpg"
          height={100}
          width={100}
          alt="home"
        />

        {/* Circle */}
        <motion.svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] w-[80%]"
          fill="none"
          stroke="white"
          strokeWidth={4}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            initial={{ opacity: 0, r: "45%", rotateZ: 0 }}
            animate={{ opacity: 1, rotateZ: 360, r: "40%" }}
            transition={{ duration: 1.5 }}
            cx="50%"
            cy="50%"
            r="40%"
          />
        </motion.svg>

        {/* Desktop Buttons */}
        <div className="absolute hidden lg:flex flex-col gap-3 items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
          {buttons.map((btn, idx) => {
            const baseBg = btn.style === "black" ? "bg-black" : "bg-white";
            const baseText = btn.style === "black" ? "text-white" : "text-black";

            // Instead of dynamic class strings, define fixed hover text color classes:
            const hoverTextClass =
              idx === 0
                ? "group-hover:text-white"
                : idx === 2
                ? "group-hover:text-black"
                : btn.style === "black"
                ? "group-hover:text-black"
                : "group-hover:text-white";

            const hoverBgClass =
              idx === 0
                ? "bg-black"
                : idx === 2
                ? "bg-white"
                : btn.style === "black"
                ? "bg-white"
                : "bg-black";

            const originClass = idx === 2 ? "origin-left" : "origin-left";

            return (
              <button
                key={btn.label}
                className={`relative overflow-hidden group w-60 md:w-64 py-3 md:py-4 rounded-full text-sm md:text-base
                  ${baseBg} ${baseText} transition duration-500`}
              >
                <span
                  className={`relative z-10 transition-colors duration-500 ${hoverTextClass}`}
                >
                  {btn.label}
                </span>
                <span
                  className={`absolute inset-0 ${hoverBgClass} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out ${originClass} z-0`}
                ></span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right: Text and Mobile Buttons */}
      <div className="bg-[#a6c3d1] lg:w-[70%] h-[80dvh] md:h-screen flex flex-col justify-center items-center text-black px-6 md:px-8">
        <div className="text-center z-50 space-y-2">
          <h2 className="text-4xl md:text-7xl font-bold">SUPER</h2>
          <h2 className="text-4xl md:text-7xl font-bold">QUALIFIED</h2>
          <h2 className="text-4xl md:text-7xl font-bold">TALENTS</h2>
          <pre className="text-sm md:text-base mt-4 italic">Talent agents .</pre>
        </div>

        {/* Mobile Buttons */}
        <div className="lg:hidden flex flex-col gap-3 items-center px-4 mt-6">
          {buttons.map((btn, idx) => {
            const baseBg = btn.style === "black" ? "bg-black" : "bg-white";
            const baseText = btn.style === "black" ? "text-white" : "text-black";

            const hoverTextClass =
              idx === 0
                ? "group-hover:text-white"
                : idx === 2
                ? "group-hover:text-black"
                : btn.style === "black"
                ? "group-hover:text-black"
                : "group-hover:text-white";

            const hoverBgClass =
              idx === 0
                ? "bg-black"
                : idx === 2
                ? "bg-white"
                : btn.style === "black"
                ? "bg-white"
                : "bg-black";

            const originClass = idx === 2 ? "origin-left" : "origin-right";

            return (
              <button
                key={btn.label}
                className={`relative overflow-hidden group w-60 md:w-64 py-3 md:py-4 rounded-full text-sm md:text-base
                  ${baseBg} ${baseText} transition duration-500`}
              >
                <span
                  className={`relative z-10 transition-colors duration-500 ${hoverTextClass}`}
                >
                  {btn.label}
                </span>
                <span
                  className={`absolute inset-0 ${hoverBgClass} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out ${originClass} z-0`}
                ></span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
