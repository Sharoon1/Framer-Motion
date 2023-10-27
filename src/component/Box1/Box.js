import React, { useState } from 'react'
import { motion } from 'framer-motion'
export default function Box() {
const [isAnimeting,setIsAnimeting] = useState(false)
return (
<div className='container'>
<div className='row'>
    <motion.div className='col-2 p-5 card bg-danger'
    animate={{
        x:isAnimeting ? 750: 0 ,
        opacity:isAnimeting ? 2 : .9,
        rotate:isAnimeting ? 360 : 0,
    }}

    initial={{
        opacity:.4,

    }}
    transition={{
        type:'spring',
        stiffness:100,
        damping:3
    }}
   onClick={() => setIsAnimeting(!isAnimeting)} >
<p className=' text-center '>The Box</p>

    </motion.div>
</div>
</div>
  )
}
