import * as React from "react";
import { FaLaptopCode, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Category from "./Category";

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


export const ItemHome = ({ isOpen }) => {
  return (
    <motion.li variants={variants}>
      <div className='menuSpan'>  
        <Category to='home' text='David Huertas' isOpen={isOpen} mobile/>
      </div>
    </motion.li>
  );
};
export const ItemPortfolio = ({ isOpen }) => {
  return (
    <motion.li variants={variants}>
      <div className='menuSpan'>  
      <Category to='portfolio' emote={<FaLaptopCode/>} text='Portfolio' isOpen={isOpen} mobile/>
      </div>
    </motion.li>
  );
};
export const ItemAbout = ({ isOpen }) => {
  return (
    <motion.li variants={variants}>
      <div className='menuSpan'>  
      <Category to='about' emote={<FaInfoCircle/>} text='About me' isOpen={isOpen} mobile/>
      </div>
    </motion.li>
  );
};
export const ItemContact = ({ isOpen }) => {
  return (
    <motion.li variants={variants}>
      <div className='menuSpan'>  
      <Category to='contact' emote={<FaEnvelope/>} text='Contacto' isOpen={isOpen} mobile/>
      </div>
    </motion.li>
  );
};
export const ItemSocials = ({isOpen }) => {
  return (
    <motion.li variants={variants}>
      <div className='menuSpan'>  
      <Category to='socials' text='Redes Sociales' isOpen={isOpen} mobile/>
      </div>
    </motion.li>
  );
};