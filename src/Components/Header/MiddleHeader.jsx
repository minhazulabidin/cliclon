import React from 'react'

const MiddleHeader = () => {
  return (
    <div className='bg-[#1B6392] border-b border-[#ffffff67]'>
      <div className='container m-auto flex justify-between text-white py-4'>
        <h2 className='text-sm font-normal'>Welcome to Clicon online eCommerce store. </h2>
        <div className=''>
          <span className='flex text-sm'>Follow Us:
            <ul className='flex ms-2 gap-3 text-base'>
              <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-reddit"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  )
}

export default MiddleHeader