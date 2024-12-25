import React from 'react'
import { categorys } from '../contnet'


const LeftConteiner = () => {
  return (
    <section className='w-[200px] h-[100vh] overflow-y-scroll'>
        <div className='text-3xl text-center text-blue-600 font-bold border-b-[1px] border-b-gray-300 py-6 '>Filmpire</div>
        <div className='text-gray-500 px-4 border-b-[1px] border-b-gray-300'>
            <p className='py-4 text-[12px]'>Categories</p>
            <ul>
                {categorys.map((categori) => (
                    <li className='flex items-center pb-4 text-sm text-black' key={categori.id}><img src={categori.icon} className='w-[25px]'/> <p className='pl-4'>{categori.name}</p></li>
                ))}
            </ul>
        </div>
        <div className='text-gray-500 pb-2 px-4'>
            <p className='py-4 text-[12px]'>Genres</p>

        </div>
    </section>
  )
}

export default LeftConteiner