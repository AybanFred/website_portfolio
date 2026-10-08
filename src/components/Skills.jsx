import { div } from 'framer-motion/client'
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

const Skills = ({ darkMode }) => {
    const skills = [
    {
        name: 'Laravel', icon: laravel, level: 90,
        color: 'from-brand-navy to-brand-blue'
    },
    {
        name: 'Vue.js', icon: vue, level: 85,
        color: 'from-brand-blue to-brand-sky'
    },
    {
        name: 'PHP', icon: php, level: 88,
        color: 'from-brand-navy to-brand-blue'
    },
    {
        name: 'Python', icon: python, level: 80,
        color: 'from-brand-blue to-brand-sky'
    },
    {
        name: 'MongoDB', icon: mongodb, level: 78,
        color: 'from-brand-navy to-brand-blue'
    },
    {
        name: 'MySQL', icon: mysql, level: 82,
        color: 'from-brand-blue to-brand-sky'
    },
    {
        name: 'Docker', icon: docker, level: 70,
        color: 'from-brand-navy to-brand-blue'
    },
    {
        name: 'Git & GitHub', icon: github, level: 85,
        color: 'from-brand-blue to-brand-sky'
    },
    {
        name: 'AI Integration', icon: ai, level: 82,
        color: 'from-brand-navy to-brand-blue'
    },
    {
        name: 'Canva', icon: canva, level: 88,
        color: 'from-brand-blue to-brand-sky'
    },
    ]
    return (
        <section id="skills"
            style={{ backgroundColor: darkMode ? "var(--color-brand-night)" : "var(--color-brand-cream)" }}
            className='py-14 relative overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-8 lg:px-14 relative'>
                <div className='text-center mb-20' data-aos='fade-up'>
                    <h1 className='sm:text-4xl text-3xl font-bold title-font mb-4'
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

                    </h1>
                    <p className='text-lg max-w-2xl mx-auto leading-relaxed'
                        style={{
                            color: darkMode ? 'var(--color-brand-sky)' : 'var(--color-brand-navy)'
                        }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto f
                    </p>

                </div>
                <div className='flex flex-wrap -m-4'
                    data-aos='fade-up'
                    data-aos-delay='200'>
                    {skills.map((skill, index) => (
                        <div key={index}
                            className='p-4 lg:w-1/4 md:w-1/2 w-full'
                            data-aos='fade-up'
                            data-aos-delay={`${300 + index * 100}`}
                        >
                            <div
                                style={{
                                    background: darkMode
                                        ? 'linear-gradient(to bottom right, var(--color-brand-night-2), var(--color-brand-night))'
                                        : 'linear-gradient(to bottom right, #ffffff, var(--color-brand-cream))',
                                    borderColor: darkMode ? 'var(--color-brand-navy)' : 'var(--color-brand-sky)'
                                }}
                                className='h-full p-6 rounded-2xl border hover:border-brand-blue/40 transition-all
                        duration-300 hover:-translate-y-2 group hover:shadow-[0_0_30px_rgb(96,139,193,0.15)]'>
                                <div className='flex items-center mb-6'>
                                    <div
                                        style={{
                                            background: darkMode
                                                ? 'linear-gradient(to bottom right, var(--color-brand-navy), var(--color-brand-night-2))'
                                                : 'linear-gradient(to bottom right, #ffffff, var(--color-brand-sky))',
                                        }}
                                        className='w-16 h-16 rounded-xl p-3 flex items-center justify-center
                            group-hover:scale-110 transition-transform duration-300'>
                                        <img src={skill.icon} alt={skill.name}
                                            className='w-full h-full object-contain' />

                                    </div>
                                    <h3 className='text-xl font-bold ml-4'
                                        style={{
                                            color: darkMode
                                                ? 'var(--color-brand-cream)'
                                                : 'var(--color-brand-ink)',
                                        }}>
                                        {skill.name}
                                    </h3>

                                </div>
                                <div className='mb-2 flex justify-between items-center'>
                                    <span
                                        className='font-medium'
                                        style={{
                                            color: darkMode
                                                ? 'var(--color-brand-sky)'
                                                : 'var(--color-brand-navy)',
                                        }}>
                                        Proficiency
                                    </span>
                                    <span
                                        style={{
                                            background: 'var(--gradient-brand-text)',
                                            WebkitBackgroundClip: 'text',
                                            backgroundClip: 'text',
                                            color: 'transparent'
                                        }}
                                        className='font-bold'>
                                        {skill.level}%

                                    </span>
                                </div>
                                <div
                                    className='w-full rounded-full h-3 overflow-hidden'
                                    style={{
                                        backgroundColor: darkMode
                                            ? 'rgb(203 220 235 / 0.18)'
                                            : 'var(--color-brand-sky)',
                                    }}>
                                    <div
                                        className={`h-full rounded-full bg-linear-to-r ${skill.color}
                                transition-all duration-1000 ease-out`}
                                        style={{ width: `${skill.level}%` }}>
                                    </div>

                                </div>
                                <div className={`mt-6 pt-4 border-t ${darkMode ? 'border-brand-navy'
                                    : 'border-brand-sky'}`}>
                                        <div className='h-1 rounded-full opacity-70 group-hover:w-full transition-all
                                        duration-500 w-1/3'
                                        style={{
                                            background: 'var(--gradient-brand)',
                                            
                                        }}
                                        >

                                        </div>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Skills