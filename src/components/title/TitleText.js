import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SplitText } from './SplitText'

export function TitleText() {
	return (
		<div>
			<h1 className="GTW">
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 1 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<SplitText
							initial={{ y: '100%' }}
							animate="visible"
							variants={{
								visible: (i) => ({
									y: 0,
									transition: {
										delay: i * 0.2,
									},
								}),
							}}
						>
              Hola, soy
						</SplitText>
						<br />
						<SplitText
							initial={{ y: '100%' }}
							animate="visible"
							variants={{
								visible: () => ({
									y: 0,
									transition: {
										delay: 0.3,
									},
								}),
							}}
						>
              David 
						</SplitText>
						<br />
						<SplitText
							initial={{ y: '100%' }}
							animate="visible"
							variants={{
								visible: () => ({
									y: 0,
									transition: {
										delay: 0.5,
									},
								}),
							}}
						>
              Huertas
						</SplitText>
					</motion.div>

				</AnimatePresence>

			</h1>
			<h3>
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 1 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<SplitText
							initial={{ y: '100%' }}
							animate="visible"
							variants={{
								visible: (i) => ({
									y: 0,
									transition: {
										delay: i * 0.3,
									},
								}),
							}}
						>
              Full Stack Developer
						</SplitText>
					</motion.div>

				</AnimatePresence>
			</h3>

		</div>
	)
}
