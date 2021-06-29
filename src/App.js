import Menu from './components/Menu'
import { Fragment, useEffect, useState } from 'react'
import vc from './img/version_control.svg'
import './fonts/GTWalsheimPro/GTWalsheimPro-Medium.ttf'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { CardPortfolio, BigCircle, BigCircle2, SpacePortfolio } from './components/Anim.js'
import { TitleText } from './components/TitleText'
import  {Example}  from './components/Example'

import { motion } from "framer-motion"

function App() {

  const [section, setSection] = useState('home') 
  const [menu, setMenu] = useState()
  
  const scrollListener = ()=>{
      if(window.scrollY > 400){
        setSection('portfolio')
      }else{
        setSection('home')
      }
    }
    
    const widthListener = ()=>{
      if(window.innerWidth > 1000){
        setMenu(true)
      }else{
        setMenu(false)
      }
    }

  useEffect(() => {
    widthListener()
    window.addEventListener('resize',widthListener)
    window.addEventListener('scroll', scrollListener)
  }, [section])
  return (
    <Fragment>
    <div className="App">
      { menu ? <Menu section={section} setSection={setSection}/>:null}
      <section id='home' className="title-section">
      {menu ? null : <Example section={section} setSection={setSection}/>}
        <nav className='navbar'>
          
          <IconContext.Provider value={{className:'icons'}}>
           <div className='nav-container'>
             <a href='https://github.com/ikurotime' 
             target='_blank'
             rel='noreferrer'>
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
           <motion.img 
           whileTap={{scale: 1.1}}
           alt='version_control_image' 
           src={vc} />
         </div>
        </div>
      </section>
      <section id='portfolio' className='portfolio-section'>
        <CardPortfolio/>
        <motion.h2>
          PORTFOLIO
        </motion.h2>
      <h3>Aqui puedes encontrar algunos de mis proyectos, los que más me gustan, personalmente.</h3>
        
      </section>
      <section className='detail-section'>
      <SpacePortfolio/>
      </section>
    </div>
    </Fragment>
  );
}

export default App;
