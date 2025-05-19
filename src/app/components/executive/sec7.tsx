'use client';
import { useState } from "react";
import Image from "next/image";

const performanceData = [
    { number: "+100", label: "Partner companies" },
    { number: "+200", label: "Missions completed last year" },
    { number: "48 HOURS", label: "To find an interim manager." },
    { number: "2", label: "Offices for coverage in France, in Lille and Paris." },
];

export default function Section7() {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? performanceData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIndex((prev) => (prev === performanceData.length - 1 ? 0 : prev + 1));
    };

    const { number, label } = performanceData[index];

    return (
        <section className="w-full">
            <div>
                <Image
                    className="w-full h-[200px] md:h-[300px] lg:h-[60dvh] object-cover"
                    src="/full.jpg"
                    alt="Our team or partners"
                    width={1920}
                    height={1080}
                    priority
                />
            </div>
            <div className="bg-[#A4BCB0] box-border px-6 py-16 text-center  md:h-[300px] lg:h-[60dvh]">
                <h4 className="text-lg md:text-xl font-semibold mb-6">
                    OUR PERFORMANCE IN FIGURES
                </h4>

                {/* Mobile Carousel */}
                <div className="block md:hidden">
                    <div className="flex justify-center items-center gap-8 mb-6">
                        <button onClick={handlePrev} aria-label="Previous">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="34"
                                viewBox="0 0 14.921 26.883"
                                className="text-black"
                                aria-hidden="true"
                            >
                                <path
                                    d="M2236.089,3670.3,2224,3682.623l12.089,11.728"
                                    transform="translate(-2222.582 -3668.883)"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>

                        <div className="w-[240px] h-[70px] flex items-center justify-center">
                            <h2 className="text-3xl font-bold">{number}</h2>
                        </div>

                        <button onClick={handleNext} aria-label="Next">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="34"
                                viewBox="0 0 14.921 26.883"
                                className="text-black rotate-180"
                                aria-hidden="true"
                            >
                                <path
                                    d="M2236.089,3670.3,2224,3682.623l12.089,11.728"
                                    transform="translate(-2222.582 -3668.883)"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="h-[64px] flex items-center justify-center">
                        <p className="text-base font-medium px-4">{label}</p>
                    </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:flex justify-center items-start gap-10 mt-6">
                    {performanceData.map((item, i) => (
                        <div
                            key={i}
                            className="w-[240px] h-[130px] md:h-[150px] lg:h-[180px] flex flex-col items-center justify-center text-center"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{item.number}</h2>
                            <p className="text-base md:text-lg lg:text-xl font-medium">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
