"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const missions = [
  {
    title: "Flora test",
    category: "Advice",
    details: ["0 month mission", "500€ /day", "Lille", ".NET"],
    hoverBg: "hover:bg-yellow-100",
  },
  {
    title: "Senior AMOA Business Analyst",
    category: "Advice",
    details: [
      "12-month mission",
      "600€ /day",
      "Lille",
      "AMOA, English, Change management, User training, Transformation management, Process management, Organizational transformation, Change support, digital transformation",
    ],
    hoverBg: "hover:bg-blue-100",
  },
  {
    title: "Bilingual Marketing Director EN",
    category: "Advice",
    details: [
      "6-month mission",
      "950€ /day",
      "Lille",
      "English, Team Management, Marketing, Brand Management, Digital Marketing",
    ],
    hoverBg: "hover:bg-pink-100",
  },
  {
    title: "Management controller",
    category: "Advice",
    details: ["9-month mission", "450€ /day", "Lille", "Management control, Retail, Excel"],
    hoverBg: "hover:bg-green-100",
  },
];

export default function Section9() {
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? missions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === missions.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 1280) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % missions.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [windowWidth]);

  const visibleCards =
    windowWidth >= 1280 ? 3 : windowWidth >= 768 ? 2 : 1;

  return (
    <section className="bg-black text-white px-6 py-16 w-full xl:flex">
      <div className="xl:flex flex-col items-start xl:px-20">
        <div className="text-center xl:text-start mb-8">
          <h2 className="text-2xl md:text-3xl xl:text-6xl font-bold">YOUR FUTURE MISSIONS</h2>
        </div>

        <div className="max-w-3xl mx-auto text-center xl:text-start text-gray-300 mb-10">
          <p>
            Wheel of Work carefully selects its partner companies based on the quality of their work,
            the intelligence of their processes, and their vision for their profession.
            Your future awaits!
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 mb-10">
          <button onClick={handlePrev} aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 14.921 26.883" className="text-white">
              <path d="M2236.089,3670.3,2224,3682.623l12.089,11.728" transform="translate(-2222.582 -3668.883)" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
          <button onClick={handleNext} aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 14.921 26.883" className="text-white rotate-180">
              <path d="M2236.089,3670.3,2224,3682.623l12.089,11.728" transform="translate(-2222.582 -3668.883)" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-center overflow-hidden w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-7xl px-4 transition-all duration-300">
          <AnimatePresence initial={false} mode="wait">
            {[...Array(visibleCards)]
              .map((_, i) => missions[(current + i) % missions.length])
              .map((mission, index) => (
                <motion.div
                  key={`${mission.title}-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-white text-black rounded-xl shadow-md p-6 h-[320px] flex flex-col justify-center transition-colors duration-300 ${mission.hoverBg}`}
                >
                  <h3 className="text-xl font-bold text-center mb-1">{mission.title}</h3>
                  <p className="text-md font-semibold text-center text-black mb-4">{mission.category}</p>
                  <ul className="space-y-2 text-sm text-black overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pr-2">
                    {mission.details.map((item, idx) => {
                      const icons = ["/calendar.png", "/star.png", "/location.png", "/skills.png"];
                      return (
                        <li key={idx} className="flex items-start gap-2">
                          {idx < 4 && (
                            <Image
                              src={icons[idx]}
                              alt={`icon-${idx}`}
                              width={16}
                              height={16}
                              className="mt-1"
                            />
                          )}
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
