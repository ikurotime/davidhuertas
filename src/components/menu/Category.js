import React from 'react'
import {Link} from 'react-scroll'
import { motion } from "framer-motion"

export default function Category({to,text,emote,mobile,isOpen}) {
    return (
        <div>
        <Link to={to} smooth spy activeClass='active'>
          <motion.span 
           whileHover={{ scale: 1.1 }}
           whileTap={{scale: 0.9}}
           onClick={
            mobile ?()=> { isOpen(false)} : null}
           >     
            {emote}&nbsp;{text}
          </motion.span>
        </Link>
      </div>
    )
}
