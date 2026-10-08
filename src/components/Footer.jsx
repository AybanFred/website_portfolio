import { FaFacebook, FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";


const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer
            style={{
                background: darkMode
                    ? 'linear-gradient(to bottom, var(--color-brand-night-2), var(--color-brand-night))'
                    : 'linear-gradient(to bottom, var(--color-brand-cream), var(--color-brand-sky))',
                borderColor: darkMode ? 'var(--color-brand-navy)' : 'var(--color-brand-blue)'
            }}
            className="border-t">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between
                    items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2 text-brand-navy dark:text-brand-cream">
                            Portfolio
                        </h3>
                        <p
                        className="text-sm"
                        style={{ color: darkMode ? "var(--color-brand-blue)" : "var(--color-brand-navy)" }}>
                            Full Stack Developer & Data Analyst & Virtual Assistant
                        </p>

                    </div>
                    <div className="flex gap-4">
                        <a href="#"
                        className="w-10 h-10 rounded-full flex bg-brand-navy dark:bg-brand-sky
                        text-white justify-center items-center hover:scale-110 transition-all
                        hover:bg-linear-to-r hover:from-brand-blue
                        hover:to-brand-navy hover:text-white dark:text-brand-navy">
                            <FaGithub />
                        </a>

                        <a href="#"
                        className="w-10 h-10 rounded-full flex bg-brand-navy dark:bg-brand-sky
                        text-white justify-center items-center hover:scale-110 transition-all
                        hover:bg-linear-to-r hover:from-brand-blue
                        hover:to-brand-navy hover:text-white dark:text-brand-navy">
                            <FaLinkedin />
                        </a>

                        <a href="#"
                        className="w-10 h-10 rounded-full flex bg-brand-navy dark:bg-brand-sky
                        text-white justify-center items-center hover:scale-110 transition-all
                        hover:bg-linear-to-r hover:from-brand-blue
                        hover:to-brand-navy hover:text-white dark:text-brand-navy">
                            <FaFacebook />
                        </a>

                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-sm flex items-center justify-end
                        gap-1 text-brand-navy/70 dark:text-brand-sky">
                            @ {currentYear} Made with
                            <FaHeart className="text-red-500"/>
                            by <span className="font-semibold text-brand-navy dark:text-brand-blue">
                                Ivant
                            </span>

                        </p>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer