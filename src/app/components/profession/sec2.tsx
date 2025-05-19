'use client';
import { motion } from 'framer-motion';

export default function Section2() {
    return (
        <div className="relative">
            <section className="w-full h-[80dvh] bg-black text-white flex flex-col justify-center items-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="space-y-2 mb-6 text-center"
                >
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold">WHEELOFWORK,</p>
                    <p className="text-lg sm:text-xl italic">SECRIT WHEEL ET NON WILL</p>
                    <p className="text-sm sm:text-md uppercase tracking-widest">TOUT EST LHAS</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    className="space-y-4 flex flex-col md:flex-row md:justify-center md:items-center md:gap-10 md:space-y-0 text-center md:text-left"
                >
                    <p className="text-sm sm:text-base leading-relaxed w-full md:w-[40%] mx-auto md:mx-0">
                        It`s not the need to work at all costs that matters,
                        it`s the power to use one`s talent fully and in the
                        best place. To find one`s place in the world and
                        shine brightly in it.
                    </p>
                    <button className="relative overflow-hidden group inline-block text-sm md:text-lg px-6 py-3 rounded-full border-2 border-white bg-white text-black transition duration-500">
                        <span className="relative z-10 group-hover:text-white transition duration-500">
                            WoW Executive
                        </span>
                        <span className="absolute inset-0 bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                    </button>

                </motion.div>
            </section>
        </div>
    );
}
