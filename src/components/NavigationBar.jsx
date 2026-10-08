import { useState } from "react";
import {motion} from "framer-motion";
import { a } from "framer-motion/client";
import { Sun, Moon, Menu, X } from "lucide-react";


const NavigationBar = ({darkMode, toggleDarkMode}) => {
  const [activeSection, setActiveSection] =useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    {name: 'Home', link: '#home'},
    {name: 'About', link: '#about'},
    {name: 'Skills', link: '#skills'},
    {name: 'Services', link: '#services'},
    {name: 'Projects', link: '#projects'},
    {name: 'Contact', link: '#contact'},

  ];

  const lightColors = {
    navBg: 'bg-linear-to-br from-brand-sky to-brand-cream',
    textPrimary: 'text-brand-ink',
    textSecondary: 'text-brand-navy',
    textHover: 'hover:text-brand-blue',
    textActive: 'text-brand-navy',
    indicator: 'from-brand-navy to-brand-blue',
    button: 'from-brand-navy to-brand-blue',

  };

  const darkColors = {
    navBg: 'bg-linear-to-br from-brand-night-2 to-brand-night',
    textPrimary: 'text-brand-cream',
    textSecondary: 'text-brand-sky',
    textHover: 'hover:text-white',
    textActive: 'text-brand-blue',
    indicator: 'from-brand-blue to-brand-sky',
    button: 'from-brand-navy to-brand-blue',

  };

  const colors = darkMode ? darkColors: lightColors;

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);

  };
  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
      initial={{ y: -100}}
      animate={{ y: 0}}
      transition={{duration: 0.5}}
      className={ `flex items-center justify-center ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}>
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
            {/* Logo */}
            <motion.a 
            href = "/"
            whileHover= {{scale: 1.05}}
            className="flex items-center space-x-2">
              <span className={`text-xl font-bold ${colors.textPrimary}`}>
                Portfolio<span
                className="text-brand-blue">.</span>
              </span>
            </motion.a>
            {/*Navigation Items */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <a 
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className="relative"
                >
                  <motion.span 
                  className={`font-medium transition-colors duration-300 
                  ${
                    activeSection === item.name.toLowerCase()
                    ? colors.textActive
                    : `${colors.textSecondary} ${colors.textHover}`
                  }`}
                  whileHover={{ scale: 1.05}}
                  whileTap={{ scale: 0.95}}>
                    {item.name}
                  </motion.span>
                  {activeSection === item.name.toLocaleLowerCase() && (
                    <motion.div
                    layoutId="navbar-indicator"
                    className= {`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full ${colors.indicator}`}>
                      
                    </motion.div>
                  )}
                </a>
              
              ))}

            </div>
            <div className="flex items-center space-x-2">
                {/* Dark Mode Toogle */}
                <motion.button
                whileHover={{ scale:1.1}}
                whileTap={{ scale:0.9}}
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode
                  ? 'bg-brand-navy'
                  : 'bg-brand-sky'
                } transition-colors`}
                aria-label={darkMode
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
                }>
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-yellow-300"/>
                  ) : (
                    <Moon className="w-5 h-5 text-brand-navy"/>
                  )}

                </motion.button>
                {/* Button */}

                <motion.a
                href="#contact"
                whileHover = {{ scale: 1.05}}
                whileTap={{ scale: 0.95}}
                className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-linear-to-r ${colors.button}
                text-white shadow-md hover:shadow-lg transition-shadow`}
                >
                  Hire Me

                </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-4 px-2">
              <motion.button
              whileTap={{scale:0.9}}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${darkMode
                ? 'bg-brand-navy'
                : 'bg-brand-sky'
              }`}>

                {isMenuOpen ? (
                  <X className={`w-5 h-5 ${darkMode
                    ? 'text-brand-cream'
                    : 'text-brand-navy'
                  }`}/>
                ) : (
                  <Menu className={`w-5 h-5 ${darkMode
                    ? 'text-brand-cream'
                    : 'text-brand-navy'
                  }`}/>
                )}

              </motion.button>

            </div>

        </div>
        {isMenuOpen && (
          <motion.div
          initial={{ opacity: 0, height: 0}}
          animate={{ opacity: 1, height: 'auto'}}
          exit={{ opacity:0, height: 0}}
          transition={{ duration: 0.3}}
          className={`absolute top-full left-0 right-0 mt-2 lg:hidden
            ${darkMode
              ? 'bg-brand-night/95'
              : 'bg-brand-cream/95'
            } backdrop-blur-lg rounded-xl shadow-lg border ${darkMode
              ? 'border-brand-navy'
              : 'border-brand-sky'

            }`}>
              <div className="px-4 py-3 space-y-2">
                {navItems.map((item) => (
                  <a
                  key={item.name}
                  href={item.link}
                  onClick={() => handleNavClick(item.name)}
                  className="block"
                  >
                    <motion.div
                    whileHover= {{ x:5}}
                    className={`py-3 px-4 rounded-lg text-center
                      ${
                        activeSection === item.name.toLocaleLowerCase()
                        ? darkMode ? 'bg-brand-night-2': 'bg-brand-sky/50'
                        : ''
                      }`}
                    >
                      <span
                      className={`font-medium ${
                        activeSection === item.name.toLocaleLowerCase()
                        ? colors.textActive
                        : colors.textSecondary
                      }`}
                        >
                          {item.name}

                      </span>

                    </motion.div>

                  </a>
                ))}
                <motion.a 
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.95}}
                className={`block py-3 px-4 text-center font-semibold rounded-lg bg-linear-to-r
                  ${colors.button} text-white shadow-md`}
                >
                  Hire Me

                </motion.a>
              </div>

          </motion.div>
        )}
        
      </motion.nav>
    </div>
  )
}

export default NavigationBar