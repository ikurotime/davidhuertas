import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

export default function Project({content}) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = () => setIsOpen(!isOpen)

	return (
		<motion.div layout whileHover={toggleOpen} onTap={toggleOpen} className='project'>
			<AnimatePresence>{isOpen && <Content content={content}/>}</AnimatePresence> 
		</motion.div>
	)
}
export function Content({content}) {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<div>
				<p className='card-text'>
					{content}
				</p>
				
			</div>
		</motion.div>
		
	)
}
