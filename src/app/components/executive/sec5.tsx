export default function Section5() {
    return (
        <section className="relative bg-[url('/club.jpg')] bg-cover bg-center w-full py-20 text-white">
            {/* Overlay */}
            <div className="absolute inset-0 z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center px-6 space-y-6">
                <h4 className="text-lg sm:text-xl font-semibold uppercase tracking-wide">
                    JOIN THE EXECUTIVE CLUB
                </h4>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    Welcome to the Club!
                </h2>
                <p className="text-base sm:text-lg max-w-3xl mx-auto">
                    Expand your network, share your expertise, discuss your project and business issues, and participate in exclusive, high-end events by joining our Executive Club of independent professionals.
                </p>
                <button className="relative overflow-hidden group inline-block text-sm md:text-lg px-6 py-3 rounded-full border-2 border-white bg-white text-black transition duration-500">
                    <span className="relative z-10 group-hover:text-white transition duration-500">
                        Learn more
                    </span>
                    <span className="absolute inset-0 bg-black scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                </button>
            </div>
        </section>
    );
}
