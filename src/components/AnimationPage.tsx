import {motion} from 'framer-motion';
import React from 'react'

    const animation = {
        initial: {opacity: 0, x:100},
        animate: {opacity: 1, x: 0},
        exit: {opacity: 0, x: -100},
        
    }

export const AnimationPage: React.FC<{}>  = ({children}) => {
  return (
    <motion.div variants={animation} initial='initial' animate='animate' exit='exit' transition={{duration: '1.8'}}>
        {children}                
    </motion.div>
    )
}

