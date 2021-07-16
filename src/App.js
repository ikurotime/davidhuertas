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
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		message: ''
	})
	const { username, email, message} = formData
	const widthListener = () => {
		if (window.innerWidth > 1300) {
			setMenu(true)
		} else {
			setMenu(false)
		}
	}
	
	const handleChange = e =>{
		setFormData({
			...formData,
			[e.target.name] : e.target.value
		})
	}

	const handleSubmit = e =>{
		e.preventDefault()
		console.log(formData)
		
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
									<a href="https://www.linkedin.com/in/david-huertas-8378941b0/" target="_blank" rel="noreferrer">
										<FaLinkedinIn size={42} />
									</a>
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
							<motion.div layout className="about-container">
								<motion.div layout className='about-info'>
									{/* <motion.img layout alt="pfp" /> */}
									<motion.p layout className="aboutText">
              👋 Hi, I&apos;m David Huertas, a junior developer
										<br />
										<br />

              · 👀 I&apos;m interested in apps and software development
										<br />
              · 🌱 I&apos;m currently learning React, TypeScript and Redux, and Web Development as a whole
										<br />
              · 🔭 My goal: expand my knowledge and grow as a developer
										<br />
              · ⚡ I guess im bilingual
									</motion.p>	
								</motion.div>
						
								<motion.ul  className='projects' layout initial={{ borderRadius: 25 }}>
									<Card img={<FaReact size={45} color='#61DBFB' />} title='&nbsp;React' content='I really like React, im constantly learning better ways to achieve the results I want. This website uses React too.'/>
									<Card img={<IoLogoJavascript color='#f0db4f' size={45} />} title='&nbsp;JavaScript'  content='Since a few of my projects are made with React, you can tell I know Javascript, Im very confortable using Express.js and Node.js'/>
									<Card img={<DiMongodb color='#4DB33D' size={45}/>} title='&nbsp;MongoDB'  content='I used MongoDB in a some projects and it went really well, I find it quite simple but still i have a lot lo learn about it.'/>
									<Card img={<FaPython size={45} color='#FFD43B' />} title='&nbsp;Python' content='Python is the first language that I really started to learn, I have knowledge of web scrapping, bots and simple backend with Flask.'/>
								</motion.ul>
							</motion.div>
						
					
						</section>
						<section id="contact" className="contact-section">
							<motion.h2 layout>
            CONTACTO
							</motion.h2>
							<motion.div layout className="contact-container">
								<motion.form layout className="contact-form" onSubmit={handleSubmit}>
									<label className='input-label' htmlFor="username">Nombre</label>
									<input type="text" name="username" className='input-field' onChange={handleChange} value={username}/>
									<label className='input-label' htmlFor="email">Email</label>
									<input type="email" name="email" className='input-field'onChange={handleChange} value={email}/>
									<label className='input-label' htmlFor="message">Mensaje</label>
									<textarea name="message"  cols="35" rows="10" className='input-textarea' onChange={handleChange} value={message}></textarea>
									<button className='submit-button' type="submit">Enviar</button>
								</motion.form>
							</motion.div>
							
						</section>
					</AnimateSharedLayout>	
				</motion.div>
			</div>
			
		</Fragment>
	)
}

export default App
