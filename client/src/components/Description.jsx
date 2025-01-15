import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div 
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center
    my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-grey-500 mb-8'> Turn your imagination into visuals </p>


      
    <div className='flex flex-row gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
        <div>
            <h2 className='text-3xl font-medium max-w-lg mb-4'>Transform Text Into Stunning Visuals</h2>
            <p className='text-grey-600 mb-4'>Our innovative text-to-image platform turns your words into captivating visuals in seconds. Simply input your text, 
                and watch it come to life as unique and creative images. Perfect for designers, marketers, and creative enthusiasts!</p>
                <p className='text-grey-600'>Simply enter your text in the input field, choose your desired style or theme, and click the generate button.
                     Our AI-powered tool will process your text and create a high-quality image tailored to your input. It's fast, easy, and fun!</p>

        </div>
    </div>









    </motion.div>
  )
}

export default Description
