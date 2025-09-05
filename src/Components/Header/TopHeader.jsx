import React from 'react'
import { Button } from '../Button'

const TopHeader = () => {
    return (
        <div className='bg-[#191C1F]'>
            <div className='container m-auto'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='text-[24px] text-white flex'>
                            <span className='bg-[#F3DE6D] py-1 px-1.5 text-[20px] text-black -rotate-3 block mr-2'>Black</span> Friday
                        </h2>
                    </div>
                    <h2 className='text-[40px] text-[#EBC80C] font-semibold flex justify-center items-center gap-2  '>
                        <span className='text-sm text-white font-medium'>Up to</span>
                        59%
                        <span className='text-white text-xl font-semibold'>OFF</span>
                    </h2>
                    <button className='bg-[#EBC80C] px-6 py-3 font-bold text-sm text-[#191C1F] rounded'>SHOP NOW <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    )
}

export default TopHeader