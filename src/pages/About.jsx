import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>sleek is more than just an online store; it's a platform dedicated to promoting sustainable living and ethical consumption. We believe that small steps can make a big difference, and our curated collection of eco-friendly products aims to empower you to make conscious choices in your daily life.</p>
              <p>Discover a wide range of carefully selected items made from organic materials, recycled materials, or fair trade practices. We prioritize brands and suppliers committed to environmental responsibility and social well-being. Our products are designed to be both functional and long-lasting, reducing waste and minimizing your environmental footprint.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>sleek's mission is to revolutionize online shopping by providing an unparalleled customer experience. We strive to offer a vast selection of high-quality products, competitive prices, and exceptional customer service. Our goal is to make online shopping easy, convenient, and enjoyable for everyone.</p>
          </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsLetterBox />
      
    </div>
  )
}

export default About
