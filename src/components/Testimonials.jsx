import React from 'react'


const Testimonials = () => {
  return (
    <section id="Clientes" className='bg-[#f8f9fa] mt-20 pb-32'>


        <div className='flex items-center justify-center flex-col pt-10'>
            <h4 className='text-bizarre-500 font-semibold'>Testimonials</h4>
            <h2 className='text-4xl'>Clientes satisfeitos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='grid grid-cols-3 gap-20 items-center justify-items-center container mx-auto mt-20'>


        <div className='shadow-lg p-5 w-96'>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum repudiandae, officiis eligendi iusto eaque?"</p>
                <div className='flex gap-x-5 pt-5'>
                    <div className='pessoa1 w-16 h-16 rounded-full'>
                    </div>
                    <div className='flex-col flex'>
                        <h5 className=''>Rosanna</h5>
                        <p className='text-bizarre-500 font-extralight'>Empresaria</p>
                    </div>
                </div>
            </div>



            <div className='shadow-lg p-5 w-96'>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum repudiandae, officiis eligendi iusto eaque?"</p>
                <div className='flex gap-x-5 pt-5'>
                    <div className='pessoa2 w-16 h-16 rounded-full'>
                    </div>
                    <div className='flex-col flex'>
                        <h5>Max</h5>
                        <p className='text-bizarre-500 font-extralight'>Repórter</p>
                    </div>
                </div>
            </div>


            <div className='shadow-lg p-5 w-96'>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum repudiandae, officiis eligendi iusto eaque?"</p>
                <div className='flex gap-x-5 pt-5'>
                    <div className='pessoa3 w-16 h-16 rounded-full'>
                    </div>
                    <div className='flex-col flex'>
                        <h5>Laura</h5>
                        <p className='text-bizarre-500 font-extralight'>Designer</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Testimonials