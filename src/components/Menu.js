import React from 'react'
import { FaLaptopCode, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import {Link} from 'react-scroll'
import { motion } from "framer-motion"

export default function Menu({section,setSection}) {
    return (
        <aside>
    <div className='sideMenu'>
      <div>
        <Link to='home' smooth>
          <motion.span 
           whileHover={{ scale: 1.1 }}
           onClick={()=> setSection('home')}
           className={section === 'home' ? 'active' : ''}>
            David Huertas
          </motion.span>
        </Link>
      </div>
      <div>
      <Link to='portfolio' smooth>
        <motion.span 
          whileHover={{ scale: 1.1 }}
          onClick={()=> setSection('portfolio')}
          className={section === 'portfolio' ? 'active' : ''}>
          <FaLaptopCode/>&nbsp;Portfolio
        </motion.span>
      </Link >
        <Link to='about'>
        <motion.span
          whileHover={{ scale: 1.1 }}
          onClick={()=> setSection('about')}
          className={section === 'about' ? 'active' : ''}>
          <FaInfoCircle/>&nbsp;About me
        </motion.span>
        </Link>
      <Link to='contact'>
        <motion.span
          whileHover={{ scale: 1.1 }}
          onClick={()=> setSection('contact')}
          className={section === 'contact' ? 'active' : ''}>
          <FaEnvelope/>&nbsp;Contacto
        </motion.span>
      </Link>
     
      </div>
      <div>
      <motion.span 
        whileHover={{ scale: 1.1 }}
        onClick={()=> setSection('socials')}
        className={section === 'socials' ? 'active' : ''}>
        Redes Sociales
      </motion.span>
      </div>
    </div>
  </aside>
    )
}
