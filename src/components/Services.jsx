import { ArrowRight, Bot, Check, ChartColumn, Code, Headset, Palette } from 'lucide-react'

const Services = ({ darkMode }) => {
    const services = [
        {
            title: 'Web Development',
            desc: 'Fast, responsive websites and web apps built end to end.',
            Icon: Code,
            points: ['Laravel & Vue.js apps', 'REST APIs & databases', 'Deployment with Docker'],
        },
        {
            title: 'Virtual Assistance',
            desc: 'Reliable day-to-day support so you can focus on growth.',
            Icon: Headset,
            points: ['Inbox & calendar management', 'Customer support', 'Research & admin tasks'],
        },
        {
            title: 'Data Analysis',
            desc: 'Turning raw data into clear, decision-ready insights.',
            Icon: ChartColumn,
            points: ['Data cleaning & reporting', 'Dashboards & visuals', 'Python-based analysis'],
        },
        {
            title: 'Graphic Design',
            desc: 'On-brand visuals that make your business look the part.',
            Icon: Palette,
            points: ['Social media graphics', 'Presentations & documents', 'Brand kits in Canva'],
        },
        {
            title: 'AI & Automation',
            desc: 'Smarter workflows that save hours of repetitive work.',
            Icon: Bot,
            points: ['AI tool integration', 'Workflow automation', 'Chatbot setup'],
        },
    ]

    return (
        <section id="services"
            style={{ backgroundColor: darkMode ? "var(--color-brand-night)" : "var(--color-brand-cream)" }}
            className='relative py-24 overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-8 lg:px-14'>
                <div className='text-center mb-14' data-aos='fade-up'>
                    <h2
                        style={{ color: darkMode ? "var(--color-brand-cream)" : "var(--color-brand-ink)" }}
                        className='text-3xl sm:text-4xl font-bold mb-3'>
                        My <span
                            style={{
                                background: 'var(--gradient-brand-text)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}>
                            Services
                        </span>
                    </h2>
                    <p
                        className='max-w-xl mx-auto'
                        style={{ color: darkMode ? "var(--color-brand-sky)" : "var(--color-brand-navy)" }}>
                        How I can help your business grow
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {services.map(({ title, desc, Icon, points }, index) => (
                        <div
                            key={title}
                            style={{
                                background: darkMode
                                    ? 'linear-gradient(to bottom right, var(--color-brand-night-2), var(--color-brand-night))'
                                    : 'linear-gradient(to bottom right, #ffffff, var(--color-brand-cream))',
                                borderColor: darkMode ? 'var(--color-brand-navy)' : 'var(--color-brand-sky)'
                            }}
                            className='group h-full p-6 rounded-2xl border transition-all duration-300
                            hover:-translate-y-2 hover:border-brand-blue/60
                            hover:shadow-[0_0_30px_rgb(96,139,193,0.25)]'
                            data-aos='fade-up'
                            data-aos-delay={index * 100}>
                            <div
                                style={{ background: 'var(--gradient-brand)' }}
                                className='w-14 h-14 rounded-xl flex items-center justify-center mb-5
                                text-white group-hover:scale-110 transition-transform duration-300'>
                                <Icon className='w-7 h-7' />
                            </div>
                            <h3
                                className='text-xl font-bold mb-2'
                                style={{ color: darkMode ? "var(--color-brand-cream)" : "var(--color-brand-ink)" }}>
                                {title}
                            </h3>
                            <p
                                className='text-sm mb-5 leading-relaxed'
                                style={{ color: darkMode ? "var(--color-brand-sky)" : "var(--color-brand-navy)" }}>
                                {desc}
                            </p>
                            <ul className={`space-y-2 pt-4 border-t ${darkMode
                                ? 'border-brand-navy'
                                : 'border-brand-sky'}`}>
                                {points.map((point) => (
                                    <li key={point}
                                        className='flex items-center gap-2 text-sm'
                                        style={{ color: darkMode ? "var(--color-brand-sky)" : "var(--color-brand-navy)" }}>
                                        <Check className={`w-4 h-4 shrink-0 ${darkMode
                                            ? 'text-brand-blue'
                                            : 'text-brand-navy'}`} />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Call to action fills the sixth grid slot */}
                    <div
                        className='h-full p-6 rounded-2xl flex flex-col items-center justify-center
                        text-center text-white'
                        style={{ background: 'var(--gradient-brand)' }}
                        data-aos='fade-up'
                        data-aos-delay={services.length * 100}>
                        <h3 className='text-xl font-bold mb-2'>Have a project in mind?</h3>
                        <p className='text-sm mb-5 text-white/85'>
                            Let's talk about how I can help.
                        </p>
                        <a href='#contact'
                            className='inline-flex items-center gap-2 px-6 py-2.5 rounded-full
                            bg-white text-brand-navy font-semibold text-sm hover:scale-105
                            hover:shadow-lg transition-all'>
                            Get in touch
                            <ArrowRight className='w-4 h-4' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services
