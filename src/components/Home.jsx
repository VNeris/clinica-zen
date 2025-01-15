import React from 'react'



import acupuncture1 from '../assets/acupuncture1.png'
import acupuncture2 from '../assets/acupuncture2.png'
import acupuncture3 from '../assets/acupuncture3.png'
import acupuncture4 from '../assets/acupuncture4.png'
import medical from '../assets/medical.png'



const Home = () => {
  return (
    <section>

        <div className='Background w-100 h-svh flex flex-col justify-center items-center sticky'>
            <div className=' flex flex-col justify-center items-center text-white'>
                <h2 className='text-6xl'>
                    <span className='text-bizarre-300 text-6xl'>Melhore </span>sua saúde geral.
                </h2>
                <p className='text-center mt-3'> Lorem ipsum dolor sit amet consectetur, <br />adipisicing elit. Maxime, velit reprehenderit ipsa doloribus</p>
            </div>
          </div>





          <div className="flex" id='Services'>
            <div className='card grid grid-cols-5 w-full bg-bizarre-500'>



          <div className='group'>
            <div className=' cursor-pointer transition-transform group-hover:bg-white ease-linear flex border-r-2 border-white p-5 flex-col text-white h-32'>
                <div className='justify-center group-hover:text-black flex-col p-2 gap-4 items-center flex'>
                      <img src={acupuncture1} alt="" className='w-10 group-hover:brightness-0'/>
                  Acupuntura
                </div>
            </div>
        </div>


        <div className='group'>
            <div className=' cursor-pointer transition-transform group-hover:bg-white ease-linear flex border-r-2 border-white p-5 flex-col text-white h-32'>
              <div className='justify-center group-hover:text-black flex-col p-2 gap-4 items-center flex'>
                  <img src={acupuncture2} alt="" className='w-10 group-hover:brightness-0'/>
                Terapia
              </div>
            </div>
        </div>


        <div className='group'>
              <div className=' cursor-pointer transition-transform group-hover:bg-white ease-linear flex border-r-2 border-white p-5 flex-col text-white h-32'>
                <div className='justify-center group-hover:text-black flex-col p-2 gap-4 items-center flex'>
                  <img src={acupuncture3} alt="" className='w-10 group-hover:brightness-0'/>
                  Orelha
                </div>
              </div>
        </div>


        <div className='group'>
              <div className=' cursor-pointer transition-transform group-hover:bg-white ease-linear flex border-r-2 border-white p-5 flex-col text-white h-32'>
                <div className='justify-center group-hover:text-black flex-col p-2 gap-4 items-center flex'>
                  <img src={acupuncture4} alt="" className='w-10 group-hover:brightness-0'/>
                Natural
                </div>
              </div>
        </div>

        <div className='group'>
              <div className=' cursor-pointer transition-transform group-hover:bg-white ease-linear flex border-r-2 border-white p-5 flex-col text-white h-32'>
                <div className='justify-center group-hover:text-black flex-col p-2 gap-4 items-center flex'>
                  <img src={medical} alt="" className='w-10 group-hover:brightness-0'/>
                Exames
                </div>
              </div>
        </div>

              
            </div>
          </div>
</section>
    
  )
}

export default Home