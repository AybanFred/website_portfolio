import { Bot, Code, Cloud, Database, BarChart3, Palette } from 'lucide-react'
import profile from '../data/profile'
import laravel from '../assets/icons/laravel.svg';
import vue from '../assets/icons/vue.svg';
import php from '../assets/icons/php.svg';
import python from '../assets/icons/python.svg';
import mongodb from '../assets/icons/mongodb.svg';
import mysql from '../assets/icons/mysql.svg';
import docker from '../assets/icons/docker.svg';
import github from '../assets/icons/github.svg';
import ai from '../assets/icons/ai.svg';
import canva from '../assets/icons/canva.svg';

// Optional logo per skill; skills without one render as plain chips.
const skillIcons = {
    'Laravel': laravel,
    'Vue.js': vue,
    'PHP': php,
    'Python': python,
    'MongoDB': mongodb,
    'MySQL': mysql,
    'Docker': docker,
    'Git & GitHub': github,
    'AI Voice & Chat Agents': ai,
    'Canva': canva,
}

// Icon for each group header, matched by the group titles in profile.skillGroups.
const groupIcons = {
    'AI Automation': Bot,
    'Full Stack Development': Code,
    'Databases & Backend': Database,
    'Cloud & DevOps': Cloud,
    'Data & Machine Learning': BarChart3,
    'Design': Palette,
}

const Skills = ({ darkMode }) => {
    const groups = profile.skillGroups
    return (
        <section id="skills"
            style={{ backgroundColor: darkMode ? "var(--color-brand-night)" : "var(--color-brand-cream)" }}
            className='py-14 relative overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-8 lg:px-14 relative'>
                <div className='text-center mb-14' data-aos='fade-up'>
                    <h2 className='sm:text-4xl text-3xl font-bold title-font mb-4'
                        style={{ color: darkMode ? 'var(--color-brand-cream)' : 'var(--color-brand-ink)' }}>
                        My <span
                            style={{
                                background: 'var(--gradient-brand-text)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}>
                            Skills
                        </span>
                    </h2>
                    <p className='text-lg max-w-2xl mx-auto leading-relaxed'
                        style={{
                            color: darkMode ? 'var(--color-brand-sky)' : 'var(--color-brand-navy)'
                        }}>
                        AI automation first, backed by full stack web development, built and used on real projects.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {groups.map(({ title, items }, index) => {
                        const GroupIcon = groupIcons[title] ?? Code
                        return (
                            <div key={title}
                                style={{
                                    background: darkMode
                                        ? 'linear-gradient(to bottom right, var(--color-brand-night-2), var(--color-brand-night))'
                                        : 'linear-gradient(to bottom right, #ffffff, var(--color-brand-cream))',
                                    borderColor: darkMode ? 'var(--color-brand-navy)' : 'var(--color-brand-sky)'
                                }}
                                className='h-full p-6 rounded-2xl border hover:border-brand-blue/40 transition-all
                                duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgb(96,139,193,0.15)]'
                                data-aos='fade-up'
                                data-aos-delay={index * 100}>
                                <div className='flex items-center mb-5'>
                                    <div
                                        style={{ background: 'var(--gradient-brand)' }}
                                        className='w-11 h-11 rounded-xl flex items-center justify-center text-white'>
                                        <GroupIcon className='w-5 h-5' />
                                    </div>
                                    <h3 className='text-lg font-bold ml-3'
                                        style={{ color: darkMode ? 'var(--color-brand-cream)' : 'var(--color-brand-ink)' }}>
                                        {title}
                                    </h3>
                                </div>
                                <ul className='flex flex-wrap gap-2'>
                                    {items.map((item) => (
                                        <li key={item}
                                            style={{
                                                backgroundColor: darkMode ? 'var(--color-brand-navy)' : 'var(--color-brand-sky)',
                                                color: darkMode ? 'var(--color-brand-cream)' : 'var(--color-brand-navy)'
                                            }}
                                            className='inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full'>
                                            {skillIcons[item] && (
                                                <img src={skillIcons[item]} alt='' className='w-4 h-4 object-contain' />
                                            )}
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills
