import Menu from './components/menu/Menu'
import { Fragment, useEffect, useState } from 'react'
import vc from './img/version_control.svg'
import './fonts/GTWalsheimPro/GTWalsheimPro-Medium.ttf'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { CardPortfolio, BigCircle, BigCircle2 } from './components/menu/Anim.js'
import { TitleText } from './components/title/TitleText'
import  {MenuMobile}  from './components/menu/MenuMobile'

import { motion } from "framer-motion"

function App() {

  const [section, setSection] = useState('home') 
  const [menu, setMenu] = useState()
    
    const widthListener = () =>{
      if(window.innerWidth > 1300){
        setMenu(true)
      }else{
        setMenu(false)
      }
    }

    useEffect(() => {
      widthListener()
    }, [])

    window.addEventListener('resize',widthListener)
    
  
  return (
    <Fragment>
    <div className="App">
      { menu ? <Menu section={section} />:null}
      {menu ? null : <MenuMobile section={section} setSection={setSection}/>}
      <section id='home' className="title-section">
        <nav className='navbar'>
          <IconContext.Provider value={{className:'icons'}}>
           <div className='nav-container'>
             <a href='https://github.com/ikurotime'target='_blank'rel='noreferrer'>
               <FaGithub size={42}/></a>
               <FaLinkedinIn size={42}/> 
           </div>
          </IconContext.Provider>    
        </nav>
        <BigCircle/>
        <BigCircle2/>
        <div className='title-container'>
          <TitleText/>
         <div>
           <motion.img whileTap={{scale: 1.1}} alt='version_control_image' src={vc} />
         </div>
        </div>
      </section>
      <section id='portfolio' className='portfolio-section'>
        <CardPortfolio/>
        <motion.h2>
          PORTFOLIO
        </motion.h2>
        
      <h3>Aqui puedes encontrar algunos de mis proyectos, los que más me gustan, personalmente.</h3>
      <div className='proyect-container'>
        <div className='row'>
          <motion.div whileHover={{scale: 1.7}} className='proyect'/>
          <motion.div whileHover={{scale: 1.7}} className='proyect'/>
        </div>
        <div className='row'>
          <motion.div whileHover={{scale: 1.7}} className='proyect'/>
          <motion.div whileHover={{scale: 1.7}} className='proyect'/>
        </div>
      </div>
      </section>
      <section id='about' className='detail-section'>
      <motion.h2>
          SOBRE MÍ
        </motion.h2>
      </section>
      <section id='contact' className='contact-section'>
      <motion.h2>
          CONTACTO
        </motion.h2>
      </section>
      <section id='socials' className='socials-section'>
      <motion.h2>
          GITHUB Y MÁS
        </motion.h2>
      </section>
    </div>
    </Fragment>
  );
}

export default App;
