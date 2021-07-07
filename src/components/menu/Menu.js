import React from 'react'
import { FaLaptopCode, FaEnvelope, FaInfoCircle, FaGithub} from 'react-icons/fa'

import Category from './Category'

export default function Menu() {
	return (
		<aside>
			<div className="sideMenu">
				<div>
					<Category to="home" text="&nbsp;David Huertas" isOpen />
				</div>
				<div>
					<Category to="portfolio" emote={<FaLaptopCode />} isOpen text="&nbsp;Portfolio" />
					<Category to="about" emote={<FaInfoCircle />} isOpen text="&nbsp;About me" />
					<Category to="contact" emote={<FaEnvelope />} isOpen text="&nbsp;Contacto" />
				</div>
				<div>
					<Category to="socials" emote={<FaGithub/>} text="&nbsp;Github" isOpen />
				</div>
			</div>
		</aside>
	)
}
