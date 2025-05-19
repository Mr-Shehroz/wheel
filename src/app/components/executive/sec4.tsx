import Image from "next/image";

export default function Section4() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto grid xl:grid-cols-2 gap-10 items-center">

                {/* Text Content */}
                <div className="space-y-6 px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black relative xl:left-30">
                        RECRUIT WITH AN INTERIM MANAGEMENT FIRM
                    </h2>
                    <p className="text-base sm:text-lg text-black">
                        Are you eager to explore new projects? Do you want to join companies that share your values? Do you want to participate in the transformation of prestigious businesses?
                    </p>
                    <p className="text-base sm:text-lg text-black">

                        Our firm offers you the highest quality offers possible to meet your ambitions. Together, let`s achieve your goals by pushing the boundaries!
                    </p>

                    <button className="relative overflow-hidden group inline-block text-sm md:text-lg px-6 py-3 rounded-full border-2 border-black bg-black text-white transition duration-500">
                        <span className="relative z-10 group-hover:text-black transition duration-500">
                            Learn more
                        </span>
                        <span className="absolute inset-0 bg-white scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                    </button>
                </div>
                {/* Image */}
                <div>
                    <Image
                        className="w-full md:h-[430px] lg:h-[500px] xl:h-[600px] h-auto object-cover"
                        src="/landing2.jpg"
                        alt="Landing Visual"
                        width={800}
                        height={600}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
