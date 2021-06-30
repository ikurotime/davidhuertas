import React from 'react'
import { FaLaptopCode, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import Category from './Category';
export default function Menu() {
    return (
        <aside>
    <div className='sideMenu'>
      <div>
        <Category to='home' text='David Huertas'/>
      </div>
      <div>
        <Category to='portfolio' emote={<FaLaptopCode/>} text='Portfolio'/>
        <Category to='about' emote={<FaInfoCircle/>} text='About me'/>
        <Category to='contact' emote={<FaEnvelope/>} text='Contacto'/>
      </div>
      <div>
        <Category to='socials' text='Github'/>
      </div>
    </div>
  </aside>
    )
}
