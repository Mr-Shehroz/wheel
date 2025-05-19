export default function Section6() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center lg:items-start px-6">
                {/* Heading */}
                <div>
                    <h4 className="text-3xl sm:text-4xl font-semibold text-black uppercase tracking-wide">
                        (SUPER) TALENT AGENT
                    </h4>
                </div>

                {/* Description and CTA */}
                <div className="space-y-6">
                    <p className="text-base sm:text-lg text-black">
                        Whether you`re a company seeking change or an interim manager looking for a new challenge, our agents open the doors to a world of opportunities, freedom, choice, and challenges.
                    </p>
                    <p className="text-base sm:text-lg text-black">
                        By choosing Wheel of Work, enter a unique collaboration, where each project becomes an exceptional experience, regardless of its duration. Ready to shake up your professional life?
                    </p>
                    <button
                        className="relative overflow-hidden group inline-block text-sm md:text-lg px-6 py-3 rounded-full border-2 border-black bg-black text-white transition duration-500"
                    >
                        <span className="relative z-10 group-hover:text-black transition duration-500">
                            Contact us
                        </span>
                        <span className="absolute inset-0 bg-white scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                    </button>
                </div>
            </div>
        </section>
    );
}
