import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

export default function Category({
	to, text, emote, mobile, toggleOpen, isOpen,
}) {
	return (
		<div>
			{isOpen
				? (
					<Link to={to} smooth spy offset={mobile ? -20 : -100} activeClass="active">
						<motion.span
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={
								mobile ? () => { toggleOpen(false) } : null
							}
						>
							{emote}
							{text}
						</motion.span>
					</Link>
				)
				: null}
		</div>
	)
}
