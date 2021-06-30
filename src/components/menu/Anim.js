import React from 'react'
import { motion } from "framer-motion"

export function CardPortfolio() {
    return (
        <motion.div
        className='CardPortfolio'
        
      />
    )
}
export function SpacePortfolio() {
    return (
        <motion.div
        className='SpacePortfolio'
      />
    )
}
export function BigCircle() {
    return (
        <motion.div
        className='big-circle'
        initial={{rotate: 80}}
        animate={{ rotate: 440 }}
        transition={{ duration: 20 ,repeat: Infinity }}
      />
    )
}
export function BigCircle2() {
    return (
        <motion.div
        className='big-circle-2'
        initial={{rotate: 0}}
        animate={{ rotate: -360 }}
        transition={{ duration: 18 ,repeat: Infinity }}
      />
    )
}
