import { Rocket } from 'lucide-react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import project1 from '../assets/DTMS logo.png'

const Projects = ({ darkMode }) => {
    const projects = [
        {
            id: 1,
            title: 'Document Tracking System',
            desc: "Designed and developed the DTMS for the Secretariat of the Mayor's Office using Laravel, in coordination with the IT Department Manager.",
            image: project1,
            tags: ['Laravel', 'Livewire', 'MySQL']
        },
    ]
    return (
        <section id="projects"
            style={{ backgroundColor: darkMode ? "var(--color-brand-night)" : "var(--color-brand-cream)" }}
            className='relative py-24'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-10'
                    data-aos='fade-up'
                    data-aos-delay='300'
                    style={{ color: darkMode ? "var(--color-brand-cream)" : "var(--color-brand-ink)" }}
                >
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
                            Projects
                        </span>
                    </h2>
                    <p
                        className='max-w-xl mx-auto'
                        style={{ color: darkMode ? "var(--color-brand-sky)" : "var(--color-brand-navy)" }}>
                        Real systems built for real users. Here's some of my recent work.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            style={{
                                background: darkMode ? 'linear-gradient(to right, var(--color-brand-night-2), var(--color-brand-night))'
                                    : 'linear-gradient(to right, #ffffff, var(--color-brand-cream))',
                                borderColor: darkMode ? 'var(--color-brand-navy)' : 'var(--color-brand-sky)'
                            }}
                            className='group rounded-xl border duration-300 hover:border-brand-blue/60
                            transition-all'
                            data-aos='fade-up'
                            data-aos-delay={index * 100}>
                            <div className='h-36 overflow-hidden rounded-t-xl'>
                                <img src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover group-hover:scale-110
                                    transition-transform duration-500' />

                            </div>
                            <div className='p-4'
                            >
                                <h3 className='text-lg font-bold mb-2'
                                    style={{ color: darkMode ? "var(--color-brand-cream)" : "var(--color-brand-ink)" }}>
                                    {project.title}
                                </h3>
                                <p
                                    className='text-sm mb-3'
                                    style={{ color: darkMode ? "var(--color-brand-sky)" : "var(--color-brand-navy)" }}>
                                    {project.desc}
                                </p>
                                <div className='flex flex-wrap gap-1.5 mb-4'>
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                backgroundColor: darkMode ? "var(--color-brand-navy)" : "var(--color-brand-sky)",
                                                color: darkMode ? "var(--color-brand-sky)" : 'var(--color-brand-navy)'
                                            }}
                                            className='px-2 py-1 text-xs rounded-full'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className='flex gap-2'>
                                    {/* Github link */}
                                    <a href="https://github.com/AybanFred/lgu-file-tracking"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            backgroundColor: darkMode ? "var(--color-brand-navy)" : "var(--color-brand-sky)",
                                            color: darkMode ? "var(--color-brand-cream)" : 'var(--color-brand-navy)'
                                        }}
                                        className='flex-1 flex items-center justify-center gap-1.5
                                                px-3 py-2 text-sm rounded-lg hover:shadow-lg hover:shadow-brand-blue/25 transition-colors'
                                        data-aos='zoom-in'
                                        data-aos-delay='300'>
                                        <FaGithub className='text-sm' />
                                        <span>Code</span>
                                    </a>
                                    {/* Demo */}
                                    <a href="https://drive.google.com/file/d/1Cl8q2XKppyaoKEpzmYAobNPWgzhl7FrQ/view?usp=sharing"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            background: 'var(--gradient-brand)'
                                        }}
                                        className='flex-1 flex items-center justify-center gap-1.5 text-white
                                                px-3 py-2 text-sm rounded-lg hover:shadow-lg
                                                hover:shadow-brand-blue/25 transition-all'
                                        data-aos='zoom-in'
                                        data-aos-delay='400'>
                                        <FaExternalLinkAlt className='text-sm' />
                                        <span>Demo</span>
                                    </a>

                                </div>

                            </div>
                        </div>
                    ))}
                    {/* Placeholder card until more projects are added */}
                    <div
                        style={{
                            borderColor: darkMode ? 'var(--color-brand-blue)' : 'var(--color-brand-navy)',
                            backgroundColor: darkMode ? 'rgb(96 139 193 / 0.06)' : 'rgb(19 62 135 / 0.04)'
                        }}
                        className='rounded-xl border-2 border-dashed min-h-72 p-6 flex flex-col
                        items-center justify-center text-center gap-3'
                        data-aos='fade-up'
                        data-aos-delay={projects.length * 100}>
                        <Rocket className='w-10 h-10 text-brand-blue animate-bounce' />
                        <h3 className='text-lg font-bold'
                            style={{ color: darkMode ? "var(--color-brand-cream)" : "var(--color-brand-ink)" }}>
                            More projects coming soon
                        </h3>
                        <p className='text-sm max-w-56'
                            style={{ color: darkMode ? "var(--color-brand-sky)" : "var(--color-brand-navy)" }}>
                            I'm cooking up something new. Check back soon, or hire me to build yours next.
                        </p>
                        <a href='#contact'
                            className='mt-1 text-sm font-semibold underline underline-offset-4
                            text-brand-blue hover:text-brand-navy dark:hover:text-brand-sky transition-colors'>
                            Start a project
                        </a>
                    </div>
                </div>
                {/* <div
                    className='text-center mt-10'>
                    <a href="#"
                        style={{
                            background: 'var(--gradient-brand)'
                        }}
                        className='inline-flex items-center gap-2 text-white font-semibold
                                                px-7 py-4 text-sm rounded-full hover:shadow-lg
                                                hover:shadow-brand-blue/25 transition-all'
                        data-aos='zoom-in'
                        data-aos-delay='400'>
                            <FaGithub className='text-sm' />
                                        <span>View All Projects</span>
                        <FaExternalLinkAlt className='text-sm' />
                        
                    </a>

                </div> */}

            </div>

        </section>
    );
};

export default Projects