import { useState } from 'react'
import { Eye, Mail } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import CVModal from './CVModal'
import { FaPython, FaReact, FaLaravel, FaVuejs, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import canva from '../assets/canva.svg'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import github from '../assets/github.png'
import facebook from '../assets/facebook.png'
import hero from '../assets/hero2.png'
import hi from '../assets/hi.png'
import CV from '../assets/CV.pdf'

const Hero = ({ darkMode }) => {
    // Each PNG has different transparent padding around its circle, so `scale`
    // compensates to make the visible circles the same size.
    const socialIcons = [
        {icon: instagram, alt: 'Instagram', scale: 1.63},
        {icon: tiktok, alt: 'TikTok', scale: 1.64},
        {icon: github, alt: 'Github', scale: 1},
        {icon: facebook, alt: 'Facebook', scale: 1.09},
    ];
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
                    <div className='flex justify-center lg:justify-start
                    gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
                        {socialIcons.map((social, index) => (
                            <a 
                            key={index}
                            href='#'
                            target='_blank'
                            data-aos-delay={`${400 + index * 100}`}
                            className='transform hover:scale-110 transition-transform
                            duration-300'>
                                <img src={social.icon} alt = {social.alt}
                                style={{ scale: social.scale }}
                                className={`w-8 h-8 sm:w-10 sm:h-10 object-contain
                                    ${darkMode
                                        ? ''
                                        : 'filter brightness-75'}`}/>

                            </a>
                        ))}

                    </div>

                    <h1 className={`title-font text-3xl sm:text-4xl
                        lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
                        data-aos='fade-up'
                        data-aos-delay='500'>
                        Hi, I'm Ivant!
                    </h1>
                    <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md 
                    sm:max-w-lg ${theme.textSecondary}`}
                    data-aos='fade-up'
                    data-aos-delay='600'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quam laboriosam quidem reiciendis. Excepturi quaerat at quod, praesentium nam molestiae incidunt, vitae, asperiores accusamus a suscipit. Vero voluptates quisquam omnis!
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
                </div>

                {/* Image */}
                <div
                className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0
                flex justify-center'
                data-aos='fade-left'
                data-aos-delay='400'>
                    <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
                    <div className='relative overflow-hidden'>
                        <img 
                        src={hero} 
                        alt="My Image"
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
        downloadName='Ivant-CV.pdf'
        darkMode={darkMode} />

    </div>
  );
}

export default Hero