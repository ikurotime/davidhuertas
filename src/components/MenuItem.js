import * as React from "react";
import { FaLaptopCode, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


export const ItemHome = ({ i,section,setSection,isOpen }) => {
  return (
    <motion.li
      variants={variants}
      
    >
      <div className='menuSpan'>
        <Link to='home' smooth>
          <motion.span 
           whileHover={{ scale: 1.1 }}
           onClick={()=> {
             setSection('home')
             isOpen(false)}}
           className={section === 'home' ? 'active' : ''}>
            David Huertas
          </motion.span>
        </Link>
      </div>
      
    </motion.li>
  );
};
export const ItemPortfolio = ({ i,section,setSection,isOpen }) => {
  return (
    <motion.li
      variants={variants}
      
    >
      <div className='menuSpan'>
      <Link to='portfolio' smooth>
        <motion.span 
          whileHover={{ scale: 1.1 }}
          onClick={()=> {
            setSection('portfolio')
            isOpen(false)}}
          className={section === 'portfolio' ? 'active' : ''}>
          <FaLaptopCode/>&nbsp;Portfolio
        </motion.span>
      </Link >
      </div>
      
    </motion.li>
  );
};
export const ItemAbout = ({ i,section,setSection,isOpen }) => {
  return (
    <motion.li
      variants={variants}
      
    >
      <div className='menuSpan'>
      <Link to='about'>
        <motion.span
          whileHover={{ scale: 1.1 }}
          onClick={()=> {
            setSection('about')
            isOpen(false)}}
          className={section === 'about' ? 'active' : ''}>
          <FaInfoCircle/>&nbsp;About me
        </motion.span>
        </Link>
      </div>
      
    </motion.li>
  );
};
export const ItemContact = ({ i,section,setSection,isOpen }) => {
  return (
    <motion.li
      variants={variants}
      
    >
      <div className='menuSpan'>
      <Link to='contact'>
        <motion.span
          whileHover={{ scale: 1.1 }}
          onClick={()=> {
            setSection('home')
            isOpen(false)}}
          className={section === 'contact' ? 'active' : ''}>
          <FaEnvelope/>&nbsp;Contacto
        </motion.span>
        </Link>
      </div>
      
    </motion.li>
  );
};
export const ItemSocials = ({ i,section,setSection,isOpen }) => {
  return (
    <motion.li
      variants={variants}
      
    >
      <div className='menuSpan'>
        <Link to='socials' smooth>
        <motion.span 
        whileHover={{ scale: 1.1 }}
        onClick={()=> {
          setSection('home')
          isOpen(false)}}
        className={section === 'socials' ? 'active' : ''}>
        Redes Sociales
      </motion.span>
        </Link>
      </div>
      
    </motion.li>
  );
};