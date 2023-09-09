import React from 'react'

const Orders = () => {
  return (
    <div className='flex flex-col p-6 my-14  justify-center items-center w-full mx-auto border-2 border-gray-200 rounded-md max-w-[600px]'>
        <h1 className='mt-2 mb-4 text-3xl text-black font-bold'>Your orders</h1>
        <div className='flex p-4 my-4 justify-between items-center border-2 border-gray-200 rounded-2xl w-[80%] '>
            <p className='text-black font-semibold '>Poha X 2 </p>
            <p className='text-black font-semibold '> $60 </p>

        </div>
        <div className='flex p-4 my-6 justify-between items-center border-2 border-gray-200 rounded-2xl w-[80%] '>
            <p className='text-black font-semibold '>Poha X 2 </p>
            <p className='text-black font-semibold '> $60 </p>

        </div><div className='flex p-4 my-6 justify-between items-center border-2 border-gray-200 rounded-2xl w-[80%] '>
            <p className='text-black font-semibold '>Poha X 2 </p>
            <p className='text-black font-semibold '> $60 </p>

        </div>
    </div>
  )
}

export default Orders