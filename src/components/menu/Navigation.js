import * as React from 'react'
import { motion } from 'framer-motion'
import Category from './Category'
import { FaLaptopCode, FaEnvelope, FaInfoCircle } from 'react-icons/fa'


// import {
// 	ItemHome, ItemAbout, ItemContact, ItemPortfolio, ItemSocials,
// } from './MenuItem'

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
}
const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
}
export const Navigation = ({toggleOpen, isOpen
}) => (
	<motion.ul className="menu-Ul" variants={variants}>
		<motion.li variants={itemVariants}>
			<div className="menuSpan">
				<Category to="home" text="David Huertas" isOpen={isOpen} toggleOpen={toggleOpen} mobile />
			</div>
		</motion.li>
		<motion.li variants={itemVariants}>
			<div className="menuSpan">
				<Category to="portfolio" emote={<FaLaptopCode />} text="Portfolio" isOpen={isOpen} toggleOpen={toggleOpen} mobile />
			</div>
		</motion.li>
		<motion.li variants={itemVariants}>
			<div className="menuSpan">
				<Category to="about" emote={<FaInfoCircle />} text="About me" isOpen={isOpen} toggleOpen={toggleOpen} mobile />
			</div>
		</motion.li>
		<motion.li variants={itemVariants}>
			<div className="menuSpan">
				<Category to="contact" emote={<FaEnvelope />} text="Contacto" isOpen={isOpen} toggleOpen={toggleOpen} mobile />
			</div>
		</motion.li>
	</motion.ul>
)
