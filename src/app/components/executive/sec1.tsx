import Image from "next/image";

export default function Section1() {
    return (
        <section className="py-12 lg:pt-0 mt-20 lg:mt-0">
            <div className="w-full px-4 flex flex-col lg:flex-row items-center gap-10 relative">

                {/* Text Section */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4 z-10 relative xl:left-34">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold lg:mt-28">
                        INTERIM MANAGER: YOUR CHALLENGES, OUR EXPERTISE
                    </h1>
                    <p className="text-base w-full max-w-[480px]">
                        Since 2020, Wheel of Work has been supporting businesses in their transformation, as well as freelancers in developing their professional careers.
                    </p>
                    <p className="text-lg w-full max-w-[480px]">
                        <strong>Our ambition?</strong> To enable businesses to collaborate with the best independent consultants more easily and quickly.
                    </p>
                    <div className="flex flex-col gap-4 mt-6 max-w-[250px]">
                        <button className="relative overflow-hidden group inline-block text-base md:text-lg px-6 py-3 rounded-full border-2 border-black bg-black text-white transition duration-500">
                            <span className="relative z-10 group-hover:text-black transition duration-500">
                                I am a manager
                            </span>
                            <span className="absolute inset-0 bg-white scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                        </button>
                        <button className="relative overflow-hidden group inline-block text-base md:text-lg px-6 py-3 rounded-full border-2 border-black bg-black text-white transition duration-500">
                            <span className="relative z-10 group-hover:text-black transition duration-500">
                                I am a business
                            </span>
                            <span className="absolute inset-0 bg-white scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative z-0">
                    <Image
                        src="/2.jpg"
                        alt="Wheel of Work"
                        width={800}
                        height={500}
                        className="w-full h-auto object-cover lg:min-h-screen"
                    />
                    <div className="absolute box-border w-fit px-4 py-4 bg-white shadow-white shadow-lg rounded-xl -bottom-10 right-10">
                        <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3">
                            Monetize your network
                        </h4>
                        <button className="relative overflow-hidden group inline-block text-sm md:text-lg px-6 py-3 rounded-full border-2 border-black bg-black text-white transition duration-500">
                            <span className="relative z-10 group-hover:text-black transition duration-500">
                                I sponsor
                            </span>
                            <span className="absolute inset-0 bg-white scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
