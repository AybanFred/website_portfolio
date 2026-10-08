import { Code, Headset, ChartColumn } from 'lucide-react'
import PortraitFrame from './PortraitFrame'
import about from '../assets/about.png'

const About = ({ darkMode }) => {
  const badges = [
    {label: 'Full Stack Developer', Icon: Code,
      pos: 'bottom-6 -left-4 sm:-left-10', delay: 0},
    {label: 'Virtual Assistant', Icon: Headset,
      pos: 'top-1/3 -right-4 sm:-right-10', delay: 0.8},
    {label: 'Data Analyst', Icon: ChartColumn,
      pos: 'bottom-[12%] -right-4 sm:-right-10', delay: 1.6},
  ];

  return (
    <section 
    id="about"
    className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6`}>
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2
      gap-8 sm:gap-12 items-center">
        <figure
        data-aos='fade-up'
        data-aos-delay='300'
        className="flex flex-wrap justify-center gap-4 relative order-2 lg-order-1">
          <PortraitFrame
          src={about}
          alt="Ivant"
          badges={badges}
          darkMode={darkMode}
          shape="circle"
          className="w-72 sm:w-80 lg:w-96"
          data-aos="zoom-in"
          data-aos-delay="400" />

        </figure>
        <article
        data-aos='fade-left'
        data-aos-delay='300'
        className='text-center lg:text-left relative order-1 lg:order-2'>
          <header>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6
            text-transparent bg-linear-to-r from-brand-navy to-brand-blue
            dark:from-brand-sky dark:to-brand-blue bg-clip-text'
            data-aos='fade-up'
            data-aos-delay='300'>
                About Me
            </h1>
          </header>
          <p className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed
            bg-linear-to-r from-brand-navy/10 to-brand-navy/5 p-4 sm:p-6
            rounded-xl sm:rounded-2xl backdrop-blur-sm
            ${darkMode ? 'text-brand-sky' : 'text-brand-navy'}`}
            data-aos='fade-up'
            data-aos-delay='500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate facere consequatur repellat nulla natus explicabo, nesciunt quia, corrupti nihil labore architecto nam fugiat maxime, nobis nostrum laboriosam totam facilis.
          </p>
          <div
          className='flex flex-wrap justify-center lg:justify-start gap-4
          sm:gap-6 lg:gap-8 mb-6 sm:mb-8'>
            <div
            className='text-center'
            data-aos='zoom-in'
            data-aos-delay='600'>
              <div className='text-2xl sm:text-3xl lg:text-4xl font-bold
              text-brand-navy dark:text-brand-blue'>
                  5+
              </div>
              <div className={`text-xs sm:text-sm lg:text-base
                 ${darkMode ? 'text-brand-sky' : 'text-brand-navy'}`}>
                Education
              </div>

            </div>
            <div
            className='text-center'
            data-aos='zoom-in'
            data-aos-delay='600'>
              <div className='text-2xl sm:text-3xl lg:text-4xl font-bold
              text-brand-navy dark:text-brand-blue'>
                  5+
              </div>
              <div className={`text-xs sm:text-sm lg:text-base
                 ${darkMode ? 'text-brand-sky' : 'text-brand-navy'}`}>
                Years Experience
              </div>

            </div>
            <div
            className='text-center'
            data-aos='zoom-in'
            data-aos-delay='600'>
              <div className='text-2xl sm:text-3xl lg:text-4xl font-bold
              text-brand-navy dark:text-brand-blue'>
                  5+
              </div>
              <div className={`text-xs sm:text-sm lg:text-base
                 ${darkMode ? 'text-brand-sky' : 'text-brand-navy'}`}>
                Projects Completed
              </div>

            </div>
          </div>
          <button
          className={`w-full sm:w-auto inline-flex
                                items-center justify-center
                                border-2 border-brand-blue py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgb(96,139,193,0.7)]
                                rounded-full text-base sm:text-lg font-semibold transition-all
                                duration-300 transform
                                ${darkMode ? 'text-brand-cream bg-brand-blue/10' : 'text-brand-navy bg-white/90'}`}
                                data-aos='fade-up'
                                data-aos-delay='800'>
            Learn More
          </button>

        </article>
      </div>

    </section>
  )
}

export default About