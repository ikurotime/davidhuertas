import { React, Fragment, useEffect, useState,} from 'react'
import { IconContext } from 'react-icons'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { CardPortfolio, BigCircle, BigCircle2 } from './components/menu/Anim.js'
import { FaGithub, FaLinkedinIn, FaReact, FaPython} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { DiMongodb } from 'react-icons/di'
import { TitleText } from './components/title/TitleText'
import { MenuMobile } from './components/menu/MenuMobile'
import { Card } from './components/Card.js'
import Menu from './components/menu/Menu'
import vc from './img/version_control.svg'
import './fonts/GTWalsheimPro/GTWalsheimPro-Medium.ttf'

function App() {
	const [section, setSection] = useState('home')
	const [menu, setMenu] = useState()

	const widthListener = () => {
		if (window.innerWidth > 1300) {
			setMenu(true)
		} else {
			setMenu(false)
		}
	}

	useEffect(() => {
		widthListener()
	}, [])

	window.addEventListener('resize', widthListener)

	return (
		<Fragment>
			<div className="App">
				{ menu ? <Menu section={section} /> : null}
				{menu ? null : <MenuMobile section={section} setSection={setSection} />}
				<motion.div layout>
					<section id="home" className="title-section">
						<nav className="navbar">
							<IconContext.Provider value={{ className: 'icons' }}>
								<div className="nav-container">
									<a href="https://github.com/ikurotime" target="_blank" rel="noreferrer">
										<FaGithub size={42} />
									</a>
									<FaLinkedinIn size={42} />
								</div>
							</IconContext.Provider>
						</nav>
						<BigCircle />
						<BigCircle2 />
						<motion.div layout className="title-container">
							<TitleText />
							<motion.div layout>
								<motion.img whileTap={{ scale: 1.1 }} alt="version_control_image" src={vc} />
							</motion.div>
						</motion.div>
					</section>
					<section id="portfolio" className="portfolio-section">
						<CardPortfolio />
						<motion.h2 layout>
            PORTFOLIO
						</motion.h2>

						<h3>Aqui puedes encontrar algunos de mis proyectos, los que más me gustan, personalmente.</h3>
						<div className="proyect-container">
						
						</div>
					</section>
					<AnimateSharedLayout>
						<section id="about" className="detail-section">
							<motion.h2 layout>
            SOBRE MÍ
							</motion.h2>
							<motion.div layout className="aboutContainer">
								<motion.div layout className='about-info'>
									<motion.img layout alt="pfp" />
									<motion.p layout className="aboutText">
              👋 Hi, I&apos;m David Huertas, a junior developer
										<br />
										<br />

              · 👀 I&apos;m interested in apps and software development
										<br />
              · 🌱 I&apos;m currently learning React, React Native, and Web Development as a whole
										<br />
              · 🔭 My goal: expand my knowledge and grow as a developer
										<br />
              · ⚡ I guess im bilingual
									</motion.p>	
								</motion.div>
						
								<motion.ul  className='projects' layout initial={{ borderRadius: 25 }}>
									<Card img={<FaReact size={45} color='#61DBFB' />} title='&nbsp;React' content='Lorem ipsum lorem ipsum dare lorem ipsum lorem dare ipsum lore lore dare dare ipsum'/>
									<Card img={<IoLogoJavascript color='#f0db4f' size={45} />} title='&nbsp;JavaScript'  content='Lorem ipsum lorem ipsum dare lorem ipsum lorem dare ipsum lore lore dare dare ipsum'/>
									<Card img={<DiMongodb color='#4DB33D' size={45}/>} title='&nbsp;MongoDB'  content='Lorem ipsum lorem ipsum dare lorem ipsum lorem dare ipsum lore lore dare dare ipsum'/>
									<Card img={<FaPython size={45} color='#FFD43B' />} title='&nbsp;Python' content='Lorem ipsum lorem ipsum dare lorem ipsum lorem dare ipsum lore lore dare dare ipsum'/>
								</motion.ul>
							</motion.div>
						
					
						</section>
						<section id="contact" className="contact-section">
							<motion.h2 layout>
            CONTACTO
							</motion.h2>
						</section>
					</AnimateSharedLayout>	
					<section id="socials" className="socials-section">
						<motion.h2 layout>
            GITHUB Y MÁS
						</motion.h2>
					</section>
				</motion.div>
			</div>
			
		</Fragment>
	)
}

export default App
