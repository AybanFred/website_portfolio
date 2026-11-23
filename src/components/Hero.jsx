import { useCallback, useState } from 'react'
import { Eye, Mail } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import CVModal from './CVModal'
import Typewriter from './Typewriter'
import TypeOnce from './TypeOnce'
import { FaPython, FaReact, FaLaravel, FaVuejs, FaHtml5, FaCss3Alt, FaGithub, FaLinkedin } from 'react-icons/fa'
import profile from '../data/profile'
import canva from '../assets/canva.svg'
import hero from '../assets/hero2.png'
import hi from '../assets/hi.png'
import CV from '../assets/CV.pdf'

// Rotating "I build ..." line under the headline. Keep these short so they fit on phones.
const buildWords = ['web apps', 'AI agents', 'automations', 'CRM pipelines'];
const socialIcons = [
    {Icon: FaGithub, alt: 'GitHub', href: profile.contact.socials.find((s) => s.name === 'GitHub').url},
    {Icon: FaLinkedin, alt: 'LinkedIn', href: profile.contact.socials.find((s) => s.name === 'LinkedIn').url},
];

const gradientText = {
    background: 'var(--gradient-brand-text)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent'
};

const headline = [
    {text: 'Full Stack & '},
    {text: 'AI Automation Developer', style: gradientText},
];

const Hero = ({ darkMode }) => {
    // Floating tech icons around the hero image. Use `Icon` for a react-icons
    // component or `src` for an image file; `pos` places it around the image.
    const techIcons = [
        {name: 'Python', Icon: FaPython, color: '#3776AB', pos: 'top-[-2%] left-[55%]'},
        {name: 'React', Icon: FaReact, color: '#61DAFB', pos: 'top-[14%] right-[-3%]'},
        {name: 'Vue', Icon: FaVuejs, color: '#4FC08D', pos: 'top-[46%] right-[-5%]'},
        {name: 'Laravel', Icon: FaLaravel, color: '#FF2D20', pos: 'bottom-[12%] right-[1%]'},
        {name: 'HTML', Icon: FaHtml5, color: '#E34F26', pos: 'bottom-[-3%] left-[50%]'},
        {name: 'CSS', Icon: FaCss3Alt, color: '#1572B0', pos: 'bottom-[14%] left-[-3%]'},
        {name: 'Canva', src: canva, pos: 'top-[42%] left-[-5%]'},
    ];
    const reduceMotion = useReducedMotion();
    const [cvOpen, setCvOpen] = useState(false);
    // The role line waits for the headline to finish typing.
    const [headlineDone, setHeadlineDone] = useState(false);
    const handleHeadlineDone = useCallback(() => setHeadlineDone(true), []);

    const darkTheme = {
        textPrimary: 'text-brand-cream',
        textSecondary: 'text-brand-sky',
        buttonSecondary: `text-brand-cream border-2 border-brand-blue
        hover:bg-brand-navy`,
        decorativeCircle: 'bg-brand-blue opacity-10',
    };

    const lightTheme = {
        textPrimary: 'text-brand-ink',
        textSecondary: 'text-brand-navy',
        buttonSecondary: `text-brand-navy border-2 border-brand-navy
        hover:bg-brand-navy hover:text-white`,
        decorativeCircle: 'bg-brand-blue opacity-20',
    };

    const theme = darkMode ? darkTheme : lightTheme;


  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
        <section 
        id='home'
        data-aos='fade-up'
        data-aos-delay='body-font z-10'>
            <div className='container mx-auto flex px-4 sm:px-8 lg:px-14
            py-12 lg:py-14 flex-col lg:flex-row items-center justify-between
            lg:mt-14 mt-14'>
                <div className='lg:w-1/2 w-full flex flex-col items-center
                lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
                    <p className={`text-sm sm:text-base font-semibold tracking-wide mb-3 ${theme.textSecondary}`}
                        data-aos='fade-up'
                        data-aos-delay='400'>
                        Ivant Fred Ondoy <span className='opacity-60'>·</span>{' '}
                        <span style={gradientText}>VantixFlow</span>
                    </p>
                    <h1 className={`title-font text-3xl sm:text-4xl
                        lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
                        data-aos='fade-up'
                        data-aos-delay='500'>
                        <TypeOnce
                            segments={headline}
                            onDone={handleHeadlineDone} />
                    </h1>
                    <h2 className={`title-font text-xl sm:text-2xl lg:text-3xl mb-4
                        font-semibold min-h-[1.6em] ${theme.textPrimary}`}
                        data-aos='fade-up'
                        data-aos-delay='550'>
                        I build{' '}
                        <Typewriter
                            words={buildWords}
                            start={headlineDone}
                            style={gradientText} />
                    </h2>
                    <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md 
                    sm:max-w-lg ${theme.textSecondary}`}
                    data-aos='fade-up'
                    data-aos-delay='600'>
                        Cum Laude IT graduate with nearly 2 years of experience building full stack web apps
                        and AI automation: Make, GoHighLevel and Airtable workflows, plus LLM chat and voice
                        agents, with React, Vue, Laravel and Supabase.
                    </p>
                    {/* Buttons */}
                    <div className='w-full pt-4 sm:pt-6'>
                        <div className='flex flex-col sm:flex-row justify-center lg:justify-start
                        gap-3 sm:gap-4'
                        data-aos='fade-up'
                        data-aos-delay='700'>
                            <button type='button' onClick={() => setCvOpen(true)}
                                className='w-full sm:w-auto inline-flex
                                items-center justify-center text-white bg-linear-to-r from-brand-navy to-brand-blue
                                border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(96,139,193,0.7)]
                                rounded-full text-base sm:text-lg font-semibold transition-all
                                duration-300 transform'>
                                <Eye className='w-4 h-4 sm:h-5 sm:w-5 mr-2'/>
                                View CV
                            </button>
                            <a href="#contact" className='w-full sm:w-auto'>
                                <button className={`w-full sm:w-auto inline-flex
                                items-center ${theme.buttonSecondary} justify-center
                                border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(96,139,193,0.7)]
                                rounded-full text-base sm:text-lg font-semibold transition-all
                                duration-300 transform`}>
                                    <Mail className='w-4 h-4 sm:h-5 sm:w-5 mr-2'/>
                                    Contact Me
                                </button>

                            </a>

                        </div>

                    </div>
                    <div className='flex justify-center lg:justify-start gap-3 mt-6'
                    data-aos='fade-up'
                    data-aos-delay='800'>
                        {socialIcons.map(({ Icon, alt, href }) => (
                            <a key={alt}
                            href={href}
                            target='_blank'
                            rel='noreferrer'
                            aria-label={alt}
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-xl
                            transition-all duration-300 hover:scale-110 hover:shadow-[0_0_24px_rgb(96,139,193,0.7)]
                            ${darkMode ? 'bg-brand-navy text-brand-cream' : 'bg-brand-sky text-brand-navy'}`}>
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Image */}
                <div
                className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0
                flex justify-center'
                data-aos='fade-left'
                data-aos-delay='400'>
                    <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
                    <div className='relative overflow-hidden rounded-full'>
                        <img 
                        src={hero} 
                        alt="Ivant Fred Ondoy"
                        className='w-full h-auto object-over transform hover:scale-105
                        transition-transform duration-500' />

                    </div>
                    <img 
                    src={ hi }
                    alt="Hi icon" 
                    className='absolute -top-4 sm:top-4 left-12 sm:left-20
                    w-14 h-14 sm:w-20 sm:h-20 object-contain animate-bounce
                    opacity-90 z-10'/>

                    {techIcons.map((tech, index) => (
                        <motion.div
                        key={tech.name}
                        aria-hidden='true'
                        className={`absolute z-10 flex items-center justify-center
                        rounded-2xl shadow-lg backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12
                        lg:w-14 lg:h-14 ${tech.pos}
                        ${darkMode ? 'bg-brand-night-2/90' : 'bg-white/90'}`}
                        animate={reduceMotion ? undefined : {
                            y: [0, -14, 0],
                            rotate: [0, 6, -6, 0],
                        }}
                        transition={{
                            duration: 3.5 + (index % 3) * 0.7,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: index * 0.35,
                        }}
                        whileHover={{ scale: 1.2 }}>
                            {tech.Icon ? (
                                <tech.Icon className='text-xl sm:text-2xl lg:text-3xl'
                                style={{ color: tech.color }} />
                            ) : (
                                <img src={tech.src} alt=''
                                className='w-1/2 h-1/2 object-contain' />
                            )}
                        </motion.div>
                    ))}

                    </div>

                </div>

            </div>
            <div
            className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64
            sm:h-64 ${theme.decorativeCircle} rounded-full mix-blend-multiply
            filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block`}>

            </div>

        </section>

        <CVModal
        open={cvOpen}
        onClose={() => setCvOpen(false)}
        file={CV}
        downloadName='Ivant-Fred-Ondoy-CV.pdf'
        darkMode={darkMode} />

    </div>
  );
}

export default Hero