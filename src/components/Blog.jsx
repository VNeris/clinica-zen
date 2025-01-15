import React from 'react'

import imgblog1 from '../assets/img-1-blog.jpg'
import imgblog2 from '../assets/img-2-blog.jpg'
import imgblog3 from '../assets/img-3-blog.jpg'

const Blog = () => {
  return (
    <section id="Blog" className='pt-10'>

       <div className='flex items-center justify-center flex-col pt-10'>
            <h4 className='text-bizarre-500 font-semibold'>Blog</h4>
            <h2 className='text-4xl'> Notícias e dicas</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='mt-20 container items-center justify-items-center gap-20 mx-auto grid grid-cols-3'>


            <div className="rounded-lg p-5">
                <img src={imgblog1} className='' alt="" />
                <p className='font-light text-slate-400 flex gap-3 pt-2'>Janeiro 11, 2025 by
                    <span className='text-black'> Admin</span>
                </p>
                <h2 className='text-3xl py-2 text-bizarre-500'>Cura natural para o corpo</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam aut vero nulla? Quas, quod.</p>
            </div>


            <div className="rounded-lg p-5">
                <img src={imgblog2} className='' alt="" />
                <p className='font-light text-slate-400 flex gap-3 pt-2'>Janeiro 11, 2025 by
                    <span className='text-black'> Admin</span>
                </p>
                <h2 className='text-3xl py-2 text-bizarre-500'>Cura natural para o corpo</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam aut vero nulla? Quas, quod.</p>
            </div>


            <div className="rounded-lg p-5">
                <img src={imgblog3} className='' alt="" />
                <p className='font-light text-slate-400 flex gap-3 pt-2'>Janeiro 11, 2025 by
                    <span className='text-black'> Admin</span>
                </p>
                <h2 className='text-3xl py-2 text-bizarre-500'>Cura natural para o corpo</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam aut vero nulla? Quas, quod.</p>
            </div>
        </div>

    </section>

)
}

export default Blog