import * as React from 'react'
import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from './use-dimensions'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'

const sidebar = {
	open: (height = 1500) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(25px at 55px 52px)',
		transition: {
			delay: 0.2,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
}

export const MenuMobile = ({ section, setSection }) => {
	const [isOpen, toggleOpen] = useCycle(false, true)
	const containerRef = useRef(null)
	const { height } = useDimensions(containerRef)

	return (
		<motion.nav
			className="buttonNav"
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			custom={height}
			ref={containerRef}
		>
			<motion.div className="background" variants={sidebar} />
			<Navigation section={section} setSection={setSection} isOpen={isOpen} toggleOpen={toggleOpen} />
			<MenuToggle toggle={() => toggleOpen()} />
		</motion.nav>
	)
}
