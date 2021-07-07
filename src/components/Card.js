import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Card({content, img, title}) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = () => setIsOpen(!isOpen)

	return (
		<motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }} className="proyect">
			<motion.div layout className='card-title'>
				{img}
				{title}
			</motion.div>
			<AnimatePresence>{isOpen && <Content content={content}/>}</AnimatePresence> 
		</motion.li>
	)
}
export function Content({content}) {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div>
				<p>
					{content}
				</p>
				
			</div>
		</motion.div>
		
	)
}
