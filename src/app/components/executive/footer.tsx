import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#e8e9ee] text-black px-6 py-12 text-sm md:text-base">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between md:px-10 lg:px-0 items-center space-y-10">

                {/* Logo */}
                <Image
                    src="/ex-logo.svg"
                    alt="Logo"
                    width={180}
                    height={100}
                    className="w-[180px]"
                    priority
                />

                {/* Nav Links in 3 Columns */}
                <div className="grid grid-cols-3 gap-6 lg:text-start text-center text-sm md:text-base lg:text-lg">
                    <div className="space-y-2">
                        <div>Wheel of Work Executive</div>
                        <div>Interim Manager</div>
                        <div>Business</div>
                        <div>The club</div>
                    </div>
                    <div className="space-y-2">
                        <div>Blog</div>
                        <div>Contact</div>
                        <div>I Sponsor</div>
                        <div>Wheel of Work Freelance</div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="text-start text-gray-500 text-xs md:text-sm lg:text-base space-y-1">
                    <p>Wheel of Work</p>
                    <p>hello@wheelofwork.com</p>
                    <p>35a Avenue de la Marne</p>
                    <p>/ 59290 <strong className="text-black">Wasquehal</strong></p>
                    <p>Photo Credit: Jonathan Alexandre</p>
                    <p>Legal notices</p>
                    <p>Protection of personal data</p>
                    <p>General Conditions of Use</p>
                    <p>Cookie management</p>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-400">in</p>
                </div>
            </div>
        </footer>
    );
}
