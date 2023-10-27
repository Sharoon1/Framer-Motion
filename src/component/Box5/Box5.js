import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Buttons from '../buttons/Buttons'
export default function Box() {
const control = useAnimation ()
return (
    <>
<div className='container'>
<div className='d-flex  mb-3'>
        
    <button type="button" class="btn btn-primary "
    onClick={() => {control.start({
        x: 750,
        transition: {duration: 2,}
    })}}>First</button>
<button type="button" class="btn btn-secondary mx-3" onClick={() => {
    control.start({
        x:0,
        transition: {duration:2,}
    })
}}>last</button>
<button type="button" class="btn btn-success" onClick={()=> {
    control.start({
        borderRadius:"50%"
    })
}}>Circle</button>
<button type="button" class="btn btn-danger mx-3"onClick={()=> {control.start({
    borderRadius:"0%"
})}}>Square</button>
<button type="button" class="btn btn-warning" onClick={()=> {
    control.stop()
}}>stop</button>
    </div>
<div className='row'>
    
    <motion.div className='col-2 p-5 card bg-danger mx-0'
    animate={control}>
<p className=' text-center '>The Box</p>

    </motion.div>
</div>
</div>
    </>
  )
}
