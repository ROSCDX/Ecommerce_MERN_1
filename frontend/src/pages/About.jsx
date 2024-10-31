import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic libero voluptatem recusandae sapiente, blanditiis numquam porro doloremque a aut, totam aperiam necessitatibus provident amet repellendus perferendis? Omnis perspiciatis cupiditate odit. Nemo aliquam officia quod ipsam corrupti quam eum quaerat eligendi eos ullam, enim vel, aut accusamus quos iusto consectetur sequi!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium nobis at quod, error eveniet ducimus. Vero doloribus quae beatae reprehenderit voluptatum ut mollitia? Explicabo quos nisi animi at quas sint asperiores, natus optio assumenda dolor dolorem dolores voluptatem? Alias adipisci unde itaque cum saepe! Aut?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda tempora nostrum ducimus reiciendis rem fugit, veritatis dolorum deserunt similique cupiditate modi possimus inventore voluptate praesentium nesciunt ea aspernatur ipsa laboriosam! Inventore maxime ex autem itaque saepe.</p>
        </div>
      </div>

      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem molestias voluptatibus sit possimus illum dolorem quas! Nam magni iusto maxime autem ipsam ex officia recusandae?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem molestias voluptatibus sit possimus illum dolorem quas! Nam magni iusto maxime autem ipsam ex officia recusandae?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptionnal Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem molestias voluptatibus sit possimus illum dolorem quas! Nam magni iusto maxime autem ipsam ex officia recusandae?</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About
