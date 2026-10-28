import { useEffect, useRef, useState } from 'react'
import { Rocket } from 'lucide-react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import ProjectSlideshow from './ProjectSlideshow'

import project1 from '../assets/icons/project illustrations/lgu-tracking/DTMS Showcase@1x.png'
import remindMe1 from '../assets/icons/project illustrations/remind-me/cover-1080x1080.png'
import remindMe2 from '../assets/icons/project illustrations/remind-me/desktop-1080x1080.png'
import remindMe3 from '../assets/icons/project illustrations/remind-me/screens-1080x1080.png'
import vantixFit1 from '../assets/icons/project illustrations/vantixfit-ai/vantixfit-ai-thumbnail-1080x1080.png'
import vantixFit2 from '../assets/icons/project illustrations/vantixfit-ai/vantixfit-ai-desktop-1080x1080.png'
import vantixFit3 from '../assets/icons/project illustrations/vantixfit-ai/vantixfit-ai-screens-1080x1080.png'

const ProjectCard = ({ project, index, darkMode }) => {
    const [expanded, setExpanded] = useState(false)
    const [overflowing, setOverflowing] = useState(false)
    const descRef = useRef(null)

    // Detect whether the clamped description is actually cut off, and re-check on resize
    useEffect(() => {
        const el = descRef.current
        if (!el) return
        const measure = () => {
            if (!expanded) setOverflowing(el.scrollHeight > el.clientHeight + 1)
        }
        measure()
        const observer = new ResizeObserver(measure)
        observer.observe(el)
        return () => observer.disconnect()
    }, [expanded, project.desc])

    const textColor = darkMode ? "var(--color-brand-sky)" : "var(--color-brand-navy)"

    return (
        <div
            style={{
                background: darkMode ? 'linear-gradient(to right, var(--color-brand-night-2), var(--color-brand-night))'
                    : 'linear-gradient(to right, #ffffff, var(--color-brand-cream))',
                borderColor: darkMode ? 'var(--color-brand-navy)' : 'var(--color-brand-sky)'
            }}
            className='group flex flex-col min-w-0 rounded-xl border duration-300 hover:border-brand-blue/60
            transition-all'
            data-aos='fade-up'
            data-aos-delay={index * 100}>
            {project.images ? (
                <ProjectSlideshow images={project.images} title={project.title} />
            ) : (
                // Same square frame as the slideshows; the fill matches the showcase image's flat background
                <div className='aspect-square overflow-hidden rounded-t-xl bg-[#eef2f5]'>
                    <img src={project.image}
                        alt={project.title}
                        className='w-full h-full object-contain group-hover:scale-105
                        transition-transform duration-500' />
                </div>
            )}
            <div className='p-4 flex flex-col flex-1'>
                <h3 className='text-lg font-bold mb-2 wrap-break-word'
                    style={{ color: darkMode ? "var(--color-brand-cream)" : "var(--color-brand-ink)" }}>
                    {project.title}
                </h3>
                <p
                    ref={descRef}
                    className={`text-sm wrap-break-word ${expanded ? '' : 'line-clamp-4'}`}
                    style={{ color: textColor }}>
                    {project.desc}
                </p>
                {(overflowing || expanded) ? (
                    <button
                        type='button'
                        onClick={() => setExpanded((e) => !e)}
                        aria-expanded={expanded}
                        className='self-start mt-1 mb-3 text-sm font-semibold text-brand-blue
                        hover:underline underline-offset-4 cursor-pointer'>
                        {expanded ? 'See less' : 'See more'}
                    </button>
                ) : <div className='mb-3' />}
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
                <div className='flex flex-wrap gap-2 mt-auto'>
                    {/* Github link */}
                    <a href={project.github}
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
                    {project.demo ? (
                        <a href={project.demo}
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
                    ) : (
                        // No recording yet: keep the button visible but disabled. Add `demo: '<url>'` to the project to enable it.
                        <button
                            type='button'
                            disabled
                            title='Demo coming soon'
                            style={{
                                background: 'var(--gradient-brand)'
                            }}
                            className='flex-1 flex items-center justify-center gap-1.5 text-white
                                    px-3 py-2 text-sm rounded-lg opacity-50 cursor-not-allowed'
                            data-aos='zoom-in'
                            data-aos-delay='400'>
                            <FaExternalLinkAlt className='text-sm' />
                            <span>Demo</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

const Projects = ({ darkMode }) => {
    const projects = [
        {
            id: 1,
            title: 'Document Tracking System',
            desc: "Designed and developed the DTMS (Version 3.0) for the Secretariat of the Mayor's Office using Laravel, in coordination with the IT Department Manager. It logs, routes and tracks official documents between offices, with live status updates for every hand-off. Role-based access covers Office OIC, Staff, Supervisor and Administrator accounts, with an admin dashboard of system totals, a filterable tracking log, activity and access logs, user management and an archive. A public tracker lets anyone search a tracking number and follow the document's timeline.",
            image: project1,
            tags: ['Laravel', 'Livewire', 'MySQL'],
            github: 'https://github.com/AybanFred/lgu-file-tracking',
            demo: 'https://drive.google.com/file/d/1Cl8q2XKppyaoKEpzmYAobNPWgzhl7FrQ/view?usp=sharing'
        },
        {
            id: 2,
            title: 'Remind Me',
            desc: "Designed and developed a productivity web app for upskilling and job hunting, with a task list, Kanban board and calendar, a Pomodoro focus timer, time tracking with project reports, and an AI coach that breaks goals into tasks. Built with Vue 3 and Supabase, and installable as a PWA.",
            images: [remindMe1, remindMe2, remindMe3],
            tags: ['Vue 3', 'Vite', 'Supabase', 'Tailwind CSS', 'DaisyUI'],
            github: 'https://github.com/AybanFred/remind-me'
        },
        {
            id: 3,
            title: 'VantixFit AI',
            desc: "Designed and developed an AI-powered job hunting app. Paste a job description and it parses the requirements, matches them against your Master Profile of experience, projects and skills, then generates a tailored, ATS-friendly resume and cover letter with Claude. It never invents skills: it only rephrases and reorders real data, and missing skills go to a gaps list. Built with Ionic, Vue 3 and a FastAPI backend, with Supabase for auth, storage and row-level security, and runs as a web and Android app.",
            images: [vantixFit1, vantixFit2, vantixFit3],
            tags: ['Vue 3', 'Vite', 'Python', 'FastAPI', 'Supabase', 'Ionic', 'DaisyUI'],
            github: 'https://github.com/AybanFred/jobfit-ai'
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
                        <ProjectCard key={project.id} project={project} index={index} darkMode={darkMode} />
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