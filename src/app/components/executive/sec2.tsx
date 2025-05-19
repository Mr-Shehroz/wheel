"use client";
import { useState } from "react";

const carouselItems = [
    {
        title: "DETERMINATION",
        description:
            "Our project managers are committed to supporting you in all your projects! They are proactive and quickly find interim managers who match the transformation challenges of our partner companies. They are also committed to offering independent consultants impactful assignments that meet their ambitions and desire for professional development.",
    },
    {
        title: "PERFORMANCE",
        description:
            "Our interim management firm guarantees you performance in all your projects. Our firm has developed a community of over 2,000 interim managers, ready to meet your company's needs. This constant drive for performance enabled us to complete over 200 projects last year!",
    },
    {
        title: "EXCELLENCY",
        description:
            "Excellence is essential to ensuring you have the best interim manager within your organization or contribute to a high-impact project. This excellence translates into end-to-end support for our partner companies and freelancers. We've even created a club to bring our interim managers together for various events!",
    },
    {
        title: "REQUIREMENT",
        description:
            "Our project managers are highly demanding, both in the meticulous selection of freelancers during the recruitment process and in the selection of projects they decide to offer to their network of interim managers. This high standard is reflected in reference checks during the selection process, support throughout the project, access to a management platform, and more.",
    },
];

export default function Section2() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="py-16 bg-white">
            <div className="text-center mb-10 px-7 lg:w-[40%] xl:w-[30%] mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                    WHY USE WHEEL OF WORK
                </h1>
            </div>

            {/* Carousel on Mobile */}
            <div className="flex items-center justify-center gap-4 px-4 mb-6 md:hidden">
                <button onClick={handlePrev} aria-label="Previous">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="30"
                        viewBox="0 0 14.921 26.883"
                        className="text-black"
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

                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
                    {carouselItems[currentIndex].title}
                </h2>

                <button onClick={handleNext} aria-label="Next">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="30"
                        viewBox="0 0 14.921 26.883"
                        className="rotate-180 text-black"
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

            {/* Headings on Desktop */}
            <div className="hidden md:flex justify-center px-4 w-full xl:max-w-6xl xl:mx-auto gap-10">
                {carouselItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`font-semibold transition-all duration-300 ${
                            currentIndex === index
                                ? "text-black underline underline-offset-6 text-2xl"
                                : "text-black hover:text-black text-lg"
                        }`}
                    >
                        {item.title}
                    </button>
                ))}
            </div>

            {/* Indicators on Desktop */}
            <div className="hidden md:flex justify-center px-4 w-full xl:max-w-6xl xl:mx-auto mb-8">
                {carouselItems.map((_, index) => (
                    <div
                        key={index}
                        className={`border border-black w-[179px] transition-colors duration-300 ${
                            currentIndex === index ? "bg-black" : "bg-transparent"
                        }`}
                    ></div>
                ))}
            </div>

            {/* Description */}
            <div className="px-6 w-full xl:max-w-4xl mx-auto text-center">
                <p className="text-base sm:text-lg text-black">
                    {carouselItems[currentIndex].description}
                </p>
            </div>
        </section>
    );
}
