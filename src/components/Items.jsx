import React from 'react'

const Items = (props) => {
  return (
    <div className='flex flex-wrap justify-evenly items-center w-full mt-10 '>
        <div className='flex flex-col justify-center items-center p-6 mx-4'>
            <div className=' rounded-full h-24 w-24 bg-gray-600'></div>
            <p className='text-black text-2xl font-bold p-2'>Poha</p>
            <button className='py-1 px-3 bg-blue-900 text-white rounded-md'>Add</button>
        </div>
        <div className='flex flex-col justify-center items-center p-6 mx-4'>
            <div className=' rounded-full h-24 w-24 bg-gray-600'></div>
            <p className='text-black text-2xl font-bold p-2'>Maggie</p>
            <button className='py-1 px-3 bg-blue-900 text-white rounded-md'>Add</button>
        </div>
        <div className='flex flex-col justify-center items-center p-6 mx-4'>
            <div className=' rounded-full h-24 w-24 bg-gray-600'></div>
            <p className='text-black text-2xl font-bold p-2'>Burger</p>
            <button className='py-1 px-3 bg-blue-900 text-white rounded-md'>Add</button>
        </div>
        <div className='flex flex-col justify-center items-center p-6 mx-4'>
            <div className=' rounded-full h-24 w-24 bg-gray-600'></div>
            <p className='text-black text-2xl font-bold p-2'>Maggie</p>
            <button className='py-1 px-3 bg-blue-900 text-white rounded-md'>Add</button>
        </div>
        <div className='flex flex-col justify-center items-center p-6 mx-4'>
            <div className=' rounded-full h-24 w-24 bg-gray-600'></div>
            <p className='text-black text-2xl font-bold p-2'>Burger</p>
            <button className='py-1 px-3 bg-blue-900 text-white rounded-md'>Add</button>
        </div>
    </div>
    
  )
}

export default Items