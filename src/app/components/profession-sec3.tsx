"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Section3() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div>
            <section className="relative lg:flex justify-end mt-10">
                {/* Rotated heading */}
                <div className="lg:absolute lg:-left-70 lg:-rotate-90 top-[50dvh] mb-10 lg:mb-0">
                    <div className="w-10 h-1 bg-white mb-4 lg:mb-0 lg:-ml-4"></div>
                    <h2 className="text-4xl md:text-5xl md:w-[40%] lg:w-full lg:text-left mx-auto text-center font-bold leading-tight lg:leading-[100px]">
                        SUPER SELECTIVE MISSIONS
                    </h2>
                </div>

                {/* Mission and Image Container */}
                <div className="flex flex-col md:flex-row items-center mt-40 md:mt-0 group relative w-full justify-end">
                    {/* Mission labels */}
                    <div className="flex md:flex-col flex-col-reverse rotate-90 md:rotate-0 md:gap-1 transition-all duration-300">
                        <Link
                            href="#"
                            onMouseEnter={() => setHovered("engineering")}
                            onMouseLeave={() => setHovered(null)}
                            className={`bg-[#a6c3d1] h-[70px] md:h-[112px] xl:h-[112px] rounded-l-2xl text-center flex items-center justify-center transition-all duration-300
                                ${hovered && hovered !== "engineering"
                                    ? "ml-[50px] md:ml-[84px] xl:ml-[250px] w-[250px] md:w-[300px] xl:w-[300px]"
                                    : "ml-0 w-[300px] md:w-[384px] xl:w-[550px]"
                                }`}
                        >
                            ENGINEERING
                        </Link>
                        <Link
                            href="#"
                            onMouseEnter={() => setHovered("tech")}
                            onMouseLeave={() => setHovered(null)}
                            className={`bg-[#f4ddc5] h-[70px] md:h-[112px] xl:h-[112px] rounded-l-2xl text-center flex items-center justify-center transition-all duration-300
                                ${hovered && hovered !== "tech"
                                    ? "ml-[50px] md:ml-[84px] xl:ml-[250px] w-[250px] md:w-[300px] xl:w-[300px]"
                                    : "ml-0 w-[300px] md:w-[384px] xl:w-[550px]"
                                }`}
                        >
                            TECH
                        </Link>
                        <Link
                            href="#"
                            onMouseEnter={() => setHovered("advice")}
                            onMouseLeave={() => setHovered(null)}
                            className={`bg-[#a4bcb0] h-[70px] md:h-[112px] xl:h-[112px] rounded-l-2xl text-center flex items-center justify-center transition-all duration-300
                                ${hovered && hovered !== "advice"
                                    ? "ml-[50px] md:ml-[84px] xl:ml-[250px] w-[250px] md:w-[300px] xl:w-[300px]"
                                    : "ml-0 w-[300px] md:w-[384px] xl:w-[550px]"
                                }`}
                        >
                            ADVICE
                        </Link>
                    </div>

                    {/* Image container */}
                    <div className="relative mt-11 md:mt-0 h-[90dvh] lg:h-[110dvh] w-full md:w-[40%] xl:w-[80dvh] shrink-0">
                        {/* Default image */}
                        <Image
                            className={`object-cover absolute inset-0 w-full h-full transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"
                                }`}
                            src="/wow-mission.jpg"
                            alt="default"
                            fill
                        />
                        {/* Engineering Image */}
                        <Image
                            className={`object-cover absolute inset-0 w-full h-full transition-opacity duration-500 ${hovered === "engineering" ? "opacity-100" : "opacity-0"
                                }`}
                            src="/eng.jpg"
                            alt="engineering"
                            fill
                        />
                        {/* Tech Image */}
                        <Image
                            className={`object-cover absolute inset-0 w-full h-full transition-opacity duration-500 ${hovered === "tech" ? "opacity-100" : "opacity-0"
                                }`}
                            src="/tech.jpg"
                            alt="tech"
                            fill
                        />
                        {/* Advice Image */}
                        <Image
                            className={`object-cover absolute inset-0 w-full h-full transition-opacity duration-500 ${hovered === "advice" ? "opacity-100" : "opacity-0"
                                }`}
                            src="/advice.jpg"
                            alt="advice"
                            fill
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
