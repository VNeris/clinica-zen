import React from 'react'


import relaximg from '../assets/relaximg.webp'
import acupuncture1 from '../assets/acupuncture1.png'
import acupuncture2 from '../assets/acupuncture2.png'
import acupuncture3 from '../assets/acupuncture3.png'
import acupuncture4 from '../assets/acupuncture4.png'
import medical from '../assets/medical.png'



const About = () => {
  return (
    <section id="Sobre">


        <div className='flex items-center gap-10 justify-center'>
            <div className='grid gap-10'>
                <h2 className='font-semibold text-2xl'>Quem nós somos</h2>
                <p className='w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veritatis, veniam omnis obcaecati dolorem provident ad fugit quasi modi tempora aliquam, necessitatibus a saepe, debitis sed laboriosam cum eum officia.</p>
                <button className='flex items-center justify-center hover:bg-bizarre-700 bg-bizarre-400 text-white p-3 text-lg w-56 rounded-xl'>Entre em contato</button>
            </div>
              <img src={relaximg} className='drop-shadow-md' alt="" />
        </div>

        <div className='grid gap-x-20 gap-y-5 items-center justify-items-center container mx-auto grid-cols-2 grid-rows-2'>
          
            <div className='flex items-center gap-x-10 shadow-md p-5 hover:scale-105 transition-transform ease-linear duration-200'>
              <img src={acupuncture2} className='w-20 brightness-0' alt="" />
              <div className='flex flex-col'>
                <h2 className='text-bizarre-400 font-semibold text-2xl'>Terapia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam, sed corporis dolorem quod neque delectus dolores porro molestias. Explicabo.</p>
              </div>
            </div>



            <div className='flex items-center gap-10 shadow-md p-5 hover:scale-105 transition-transform ease-linear duration-200'>
              <img src={acupuncture3} className='w-20 brightness-0' alt="" />
              <div className='flex flex-col'>
                <h2 className='text-bizarre-400 font-semibold text-2xl'>Orelha</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam, sed corporis dolorem quod neque delectus dolores porro molestias. Explicabo.</p>
              </div>
            </div>


            <div className='flex items-center gap-10 shadow-md p-5 hover:scale-105 transition-transform ease-linear duration-200'>
              <img src={acupuncture4} className='w-20 brightness-0' alt="" />
              <div className='flex flex-col'>
                <h2 className='text-bizarre-400 font-semibold text-2xl'>Natural</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam, sed corporis dolorem quod neque delectus dolores porro molestias. Explicabo.</p>
              </div>
            </div>


            <div className='flex items-center gap-10 shadow-md p-5 hover:scale-105 transition-transform ease-linear duration-200'>
              <img src={medical} className='w-20 brightness-0' alt="" />
              <div className='flex flex-col'>
                <h2 className='text-bizarre-400 font-semibold text-2xl'>Exames</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam, sed corporis dolorem quod neque delectus dolores porro molestias. Explicabo.</p>
              </div>
            </div>


        </div>
    </section>
  )
}

export default About