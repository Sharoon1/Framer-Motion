import React, { useState } from 'react'
import { motion } from 'framer-motion'
export default function Box() {

return (
<div className='container'>
<div className='row'>
    <motion.div
     className='col-2 mt-5 mb-5 p-5 card bg-danger'
    animate={{
      scale: [1,1.4,1.4,1,1],
      borderRadius: ["20%","20%","40%","40%","20%"],
      rotate:[0,0,270,270,0]

    }}
    >
<p className=' text-center '>The Box</p>

    </motion.div>
</div>
</div>
  )
}

