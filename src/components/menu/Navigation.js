import * as React from "react";
import { motion } from "framer-motion";
import { ItemHome, ItemAbout, ItemContact, ItemPortfolio, ItemSocials } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({section, setSection, isOpen}) => (
  <motion.ul className='menu-Ul' variants={variants}>
    
      <ItemHome section={section} setSection={setSection} isOpen={isOpen} />
      <ItemPortfolio section={section} setSection={setSection} isOpen={isOpen} />
      <ItemAbout section={section} setSection={setSection} isOpen={isOpen} />
      <ItemContact section={section} setSection={setSection} isOpen={isOpen} />
      <ItemSocials section={section} setSection={setSection} isOpen={isOpen} />
    
  </motion.ul>
);

