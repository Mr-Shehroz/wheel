import Image from "next/image";

export default function Section8() {
    return (
        <section className="w-full px-6 py-16 bg-white text-center">
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    YOUR FUTURE PARTNERS
                </h2>
            </div>
            <div className="max-w-[700px] lg:max-w-5xl xl:max-w-full mx-auto mb-12 text-gray-700 space-y-4">
                <p>
                    Accounting, insurance, administrative procedures... It`s never a walk in the park.
                </p>
                <p>
                    That`s why we`ve surrounded ourselves with partners who are skilled in these various areas: they make life easier for our independent consultants and allow them to focus 200% on their work!
                </p>
            </div>
            <div className="flex flex-wrap gap-6 items-center justify-center max-w-[700px] lg:max-w-5xl xl:max-w-full mx-auto">
                {["p1", "p2", "p3", "p4", "p5"].map((img, i) => (
                    <div
                        key={i}
                        className="w-28 h-28 sm:w-32 md:w-40 lg:w-52 relative"
                    >
                        <Image
                            src={`/${img}.png`}
                            alt={`Partner ${i + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
