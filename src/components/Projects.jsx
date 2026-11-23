import { useEffect, useRef, useState } from 'react'
import { Bot, Database, FileLock2, Workflow } from 'lucide-react'
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
                    {/* Demo: only shown once a project has a live link. Add `demo: '<url>'` to the project to show it. */}
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
                    ) : null}
                </div>
            </div>
        </div>
    )
}

// Professional AI automation and full stack work. Client details stay private, so each is written
// as problem / solution / result. Add `image: <import>` to a study to show a screenshot of a
// Make scenario or GoHighLevel pipeline (with sensitive details hidden) at the top of its card.
const caseStudies = [
    {
        title: 'Workflow Automation: Make, GoHighLevel & Airtable',
        Icon: Workflow,
        problem: 'Client and project data lived in separate tools, so it had to be re-entered by hand and records drifted out of sync.',
        solution: 'Built Make scenarios and Google Cloud API integrations, plus CRM pipelines in GoHighLevel and Airtable, to move data between platforms automatically.',
        result: 'Automated pipelines and database-driven workflows that keep project and client data consistent without manual copying.',
        tags: ['Make.com', 'GoHighLevel', 'Airtable', 'Google Cloud'],
    },
    {
        title: 'AI Voice & Chat Agents',
        Icon: Bot,
        problem: 'Customers and staff needed quick answers and workflow help at any hour, without waiting on a person.',
        solution: 'Integrated LLM-powered voice and chat agents into company systems, and built Gemini/OpenAI chatbots with prompt engineering, Prism PHP, Laravel and Vue.',
        result: 'Conversational support and workflow assistance over both text and voice.',
        tags: ['LLMs', 'Prompt Engineering', 'OpenAI', 'Gemini', 'Prism PHP'],
    },
    {
        title: 'Bid Vault System',
        Icon: FileLock2,
        problem: 'Bid documents and project workflows needed one secure, organized home instead of scattered files.',
        solution: 'Built a full stack web app with React, TypeScript and Supabase for secure document management and project workflows.',
        result: 'A scalable, cloud-based system for managing business documents securely.',
        tags: ['React', 'TypeScript', 'Supabase'],
    },
    {
        title: 'Advanced Path Analysis System',
        Icon: Database,
        problem: 'Users needed to turn raw data into analysis they could act on.',
        solution: 'Built a web platform with Laravel and Vue.js, using MongoDB for storage and Python for data processing.',
        result: 'Efficient data processing with visualizations that support decisions.',
        tags: ['Laravel', 'Vue.js', 'MongoDB', 'Python'],
    },
]

const CaseStudyCard = ({ study, index, darkMode }) => {
    const { title, Icon, problem, solution, result, tags, image } = study
    return (
        <div
            style={{
                background: darkMode ? 'linear-gradient(to right, var(--color-brand-night-2), var(--color-brand-night))'
                    : 'linear-gradient(to right, #ffffff, var(--color-brand-cream))',
                borderColor: darkMode ? 'var(--color-brand-navy)' : 'var(--color-brand-sky)'
            }}
            className='flex flex-col min-w-0 rounded-xl border p-5 sm:p-6 transition-all duration-300
            hover:border-brand-blue/60'
            data-aos='fade-up'
            data-aos-delay={index * 100}>
            {image && (
                <img src={image} alt={`${title} screenshot`} className='w-full rounded-lg mb-4' />
            )}
            <div className='flex items-center gap-3 mb-4'>
                <div
                    style={{ background: 'var(--gradient-brand)' }}
                    className='w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-white'>
                    <Icon className='w-5 h-5' />
                </div>
                <h4 className='text-lg font-bold wrap-break-word'
                    style={{ color: darkMode ? 'var(--color-brand-cream)' : 'var(--color-brand-ink)' }}>
                    {title}
                </h4>
            </div>
            <dl className='space-y-3 text-sm mb-4'>
                {[['Problem', problem], ['Solution', solution], ['Result', result]].map(([label, text]) => (
                    <div key={label}>
                        <dt className='font-semibold text-brand-blue'>{label}</dt>
                        <dd style={{ color: darkMode ? 'var(--color-brand-sky)' : 'var(--color-brand-navy)' }}>{text}</dd>
                    </div>
                ))}
            </dl>
            <div className='flex flex-wrap gap-1.5 mt-auto'>
                {tags.map((tag) => (
                    <span
                        key={tag}
                        style={{
                            backgroundColor: darkMode ? 'var(--color-brand-navy)' : 'var(--color-brand-sky)',
                            color: darkMode ? 'var(--color-brand-sky)' : 'var(--color-brand-navy)'
                        }}
                        className='px-2 py-1 text-xs rounded-full'>
                        {tag}
                    </span>
                ))}
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
                        Real systems built for real users: full stack apps and AI automation.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} darkMode={darkMode} />
                    ))}
                </div>

                <div className='text-center mb-8 mt-16' data-aos='fade-up'>
                    <h3
                        style={{ color: darkMode ? "var(--color-brand-cream)" : "var(--color-brand-ink)" }}
                        className='text-2xl sm:text-3xl font-bold mb-3'>
                        AI Automation <span
                            style={{
                                background: 'var(--gradient-brand-text)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}>
                            Case Studies
                        </span>
                    </h3>
                    <p
                        className='max-w-xl mx-auto'
                        style={{ color: darkMode ? "var(--color-brand-sky)" : "var(--color-brand-navy)" }}>
                        Professional work with client details kept private: the problem, what I built, and the result.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard key={study.title} study={study} index={index} darkMode={darkMode} />
                    ))}
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