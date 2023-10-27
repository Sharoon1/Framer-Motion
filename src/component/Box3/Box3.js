import React from 'react'
import { motion } from 'framer-motion'
import { renderIntoDocument } from 'react-dom/test-utils'
export default function Box3() {
const boxVarient = {
hidden:{
    x:'-100vw',},
    visible:{x:'0', 
when:"beforeChildren"
}

}
const listVarient = {
    hidden:{
        x:'-10vw',},
        visible:{x:'0', 
   staggerChildren:0.2,
    }
    
    }
    return (
    <>
    <div className='container'>
<div className='row'>
    <motion.div className='col-2 mt-5 p-5 card bg-warning '
variants={boxVarient}
animate="visible"
initial='hidden'
    >
        <p id='mape' className='text-center  box'>Box3</p>
        {[1,2,3 ].map(box => {
            return < motion.li getElementById="boxItem"
            variants={listVarient}></motion.li>
    })}
    </motion.div>
</div>
    </div>
    </>
  )
}
