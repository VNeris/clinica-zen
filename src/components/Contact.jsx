import React from 'react'

import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";




const Contact = () => {
  return (
    <section className='mt-20'>

        <div className='bg-bizarre-600 grid grid-cols-3 p-8 text-white'>
            <div className='col-span-2 justify-items-start ms-60 text-start'>
                <h2 className='text-3xl'>O que você está esperando?</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, nihil!</p>
            </div>
            <button className='text-bizarre-600 bg-white w-60 rounded-xl hover:drop-shadow-brilho-escuro transition-transform ease-linear'>entre em contato</button>
        </div>

        <footer className='container mx-auto mt-10'>
            <div className='grid grid-cols-3 mb-10'>

                <div className='flex flex-col items-center'>
                    <BsFillTelephoneFill className='text-3xl mb-5'/>
                    11-977992725
                </div>

                <div className='flex flex-col items-center'>
                    <IoLocationSharp className='text-3xl mb-5'/>
                    <p className='text-center'>R. Ponta Grossa, Cidade Soberana 50 <br /> Guarulhos - SP</p>
                </div>

                <div className='flex flex-col items-center'>
                    <FaRegEnvelope  className='text-3xl mb-5'/>
                    vinipaiva50@gmail.com
                </div>
            </div>
            <p className='py-10 text-center'>Copyright ©2024 VNeris. All rights reserved.</p>
        </footer>
    </section>  

)
}

export default Contact