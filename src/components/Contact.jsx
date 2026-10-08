import { MessageCircle, Sparkles } from 'lucide-react'
import PortraitFrame from './PortraitFrame'
import contactImg from '../assets/contact.png'

const Contact = ({ darkMode }) => {
    const badges = [
        {label: "Let's Talk", Icon: MessageCircle,
            pos: 'top-[14%] right-0 sm:-right-6', delay: 0},
        {label: 'Open to Projects', Icon: Sparkles,
            pos: 'top-[32%] right-0 sm:-right-10', delay: 0.8},
    ];

    return (
        <section id='contact'
            style={{ backgroundColor: darkMode ? "var(--color-brand-night)" : "var(--color-brand-cream)" }}
            className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-10 md:mb-12"
                    data-aos='fade-up'>
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
                        style={{ color: darkMode ? "var(--color-brand-cream)" : "var(--color-brand-ink)" }}>
                        Get In <span
                            style={{
                                background: 'var(--gradient-brand-text)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}>
                            Touch
                        </span>

                    </h2>
                    <p
                        className="text-base sm:text-lg md:text-xl"
                        style={{ color: darkMode ? "var(--color-brand-sky)" : "var(--color-brand-navy)" }}>
                        Let's discuss your project
                    </p>

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6
            sm:gap-8 md:gap-10 items-center">
                    <div className="flex justify-center order-2 lg:order-1"
                        data-aos='fade-right'>
                        <PortraitFrame
                            src={contactImg}
                            alt="Ivant at his desk"
                            badges={badges}
                            darkMode={darkMode}
                            flip
                            className='w-full max-w-xs sm:max-w-sm lg:max-w-md' />
                    </div>
                    <form
                        style={{
                            background: darkMode ? 'linear-gradient(to right, var(--color-brand-night-2), var(--color-brand-night))'
                                : 'linear-gradient(to right, #ffffff, var(--color-brand-cream))',
                            borderColor: darkMode ? 'var(--color-brand-navy)' : 'var(--color-brand-sky)'
                        }}
                        className='rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border
                shadow-lg order-1 lg:order-2'
                        data-aos='fade-left'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4'>
                            <input type="text"
                                placeholder='First Name'
                                style={{
                                    backgroundColor: darkMode ? "var(--color-brand-navy)" : "#ffffff",
                                    borderColor: darkMode ? 'var(--color-brand-blue)' : 'var(--color-brand-sky)',
                                    color: darkMode ? 'var(--color-brand-cream)' : 'var(--color-brand-ink)'
                                }}
                                className='w-full px-3 sm:px-4 py-2 sm:py-3
                         rounded-lg text-sm sm:text-base focus:border-brand-blue
                         focus-ring-2 focus-ring-brand-blue/20 transition-all'
                                required />

                            <input type="text"
                                placeholder='Last Name'
                                style={{
                                    backgroundColor: darkMode ? "var(--color-brand-navy)" : "#ffffff",
                                    borderColor: darkMode ? 'var(--color-brand-blue)' : 'var(--color-brand-sky)',
                                    color: darkMode ? 'var(--color-brand-cream)' : 'var(--color-brand-ink)'
                                }}
                                className='w-full px-3 sm:px-4 py-2 sm:py-3
                         rounded-lg text-sm sm:text-base focus:border-brand-blue
                         focus-ring-2 focus-ring-brand-blue/20 transition-all'
                                required />

                            <input type="email"
                                placeholder='Email Address'
                                style={{
                                    backgroundColor: darkMode ? "var(--color-brand-navy)" : "#ffffff",
                                    borderColor: darkMode ? 'var(--color-brand-blue)' : 'var(--color-brand-sky)',
                                    color: darkMode ? 'var(--color-brand-cream)' : 'var(--color-brand-ink)'
                                }}
                                className='w-full px-3 sm:px-4 py-2 sm:py-3 sm:col-span-2
                         rounded-lg text-sm sm:text-base focus:border-brand-blue
                         focus-ring-2 focus-ring-brand-blue/20 transition-all'
                                required />

                            <input type="tel"
                                placeholder='Phone Number'
                                style={{
                                    backgroundColor: darkMode ? "var(--color-brand-navy)" : "#ffffff",
                                    borderColor: darkMode ? 'var(--color-brand-blue)' : 'var(--color-brand-sky)',
                                    color: darkMode ? 'var(--color-brand-cream)' : 'var(--color-brand-ink)'
                                }}
                                className='w-full px-3 sm:px-4 py-2 sm:py-3 sm:col-span-2
                         rounded-lg text-sm sm:text-base focus:border-brand-blue
                         focus-ring-2 focus-ring-brand-blue/20 transition-all'
                                required />

                            <textarea rows='4'
                                placeholder='Your Message'
                                style={{
                                    backgroundColor: darkMode ? "var(--color-brand-navy)" : "#ffffff",
                                    borderColor: darkMode ? 'var(--color-brand-blue)' : 'var(--color-brand-sky)',
                                    color: darkMode ? 'var(--color-brand-cream)' : 'var(--color-brand-ink)'
                                }}
                                className='w-full px-3 sm:px-4 py-2 sm:py-3 sm:col-span-2
                         rounded-lg text-sm sm:text-base focus:border-brand-blue
                         focus-ring-2 focus-ring-brand-blue/20 transition-all mb-4 sm:mb-6
                         resize-none'
                                required />

                            <button
                                type='submit'
                                style={{
                                    background: 'var(--gradient-brand)'
                                }}
                                className='w-full py-2 sm:py-3 text-white sm:col-span-2 font-semibold rounded-lg
                    text-sm sm:text-base hover:shadow-brand-blue/25
                    hover:scale-[1.02] transition-all'>
                                Send Message

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </section>
    );
};

export default Contact