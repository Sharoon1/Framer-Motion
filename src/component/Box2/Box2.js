import React from 'react'
import { motion } from 'framer-motion'
export default function Box2() {
  return (
    <div className='container'>
      <div className='row'>

    <motion.div className=' mt-5 col-2 py-5 bg-info card'
    drag
    dragConstraints={{
      left:-50,
      right:900,
      top:20,
      bottom:20,
    }}
    whileHover={{
      scale:1.1,
    }}
    whileTap={{
      scale:0.9,
    }}
    whileDrag={{
      opacity:.6
    }}
    >
<p className='text-center '>Box2</p>
      </motion.div>
    </div>
    </div>
  )
}
