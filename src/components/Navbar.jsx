import React from 'react'
import img from '../assets/clinica.png'

const Navbar = () => {
  return (
    <div className='flex bg-none text-white absolute justify-around w-full z-10 items-center'>

        <div className='flex items-center gap-5 text-xl'>
            <img src={img} className="w-14" alt="" />

            <p className='text-2xl'>
              <span className='text-white text-4xl'>Z</span>
              en - <span className='text-white text-3xl'>A</span>cupuncture
              </p>
        </div>



        <ul className='flex p-8 gap-10 text-xl'>
            <li className='hover:drop-shadow-brilho cursor-pointer transition-transform ease-linear'><a href="#">Home</a></li>
            <li className='hover:drop-shadow-brilho cursor-pointer transition-transform ease-linear'><a href="#Services">Serviços</a></li>
            <li className='hover:drop-shadow-brilho cursor-pointer transition-transform ease-linear'><a href="#Sobre">Sobre</a></li>
            <li className='hover:drop-shadow-brilho cursor-pointer transition-transform ease-linear'><a href="#Blog">Blog</a></li>
            <li className='hover:drop-shadow-brilho cursor-pointer transition-transform ease-linear'><a href="#Clientes">Clientes</a></li>
        </ul>



    </div>
  )
}

export default Navbar