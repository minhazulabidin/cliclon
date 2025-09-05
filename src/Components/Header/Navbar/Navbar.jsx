import React, { useEffect, useState } from 'react'
import TopHeader from './../TopHeader';
import MiddleHeader from './../MiddleHeader';
import MainHeader from '../MainHeader';

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, [])
  return (
    <nav>
      <TopHeader />
      <MiddleHeader />
      <MainHeader />
      <div className='flex justify-between container m-auto items-center py-4'>
        <div className='flex gap-6 items-center'>
          <fieldset className="">
            <select defaultValue="All Category" className="select">
              <option>All Category</option>
              {
                categories.map(item => <option key={item?.slug}>{item?.name}</option>)
              }
            </select>
          </fieldset>
          <ul className='flex gap-6 text-[#5F6C72] text-sm font-normal'>
            <li><i className="fa-solid fa-location-dot"></i> Track Order</li>
            <li><i className="fa-solid fa-arrows-rotate"></i> Compare</li>
            <li><i className="fa-solid fa-headphones"></i> Customer Support</li>
            <li><i className="fa-solid fa-circle-info"></i> Need Help</li>
          </ul>
        </div>
        <h2 className='text-[#191C1F] text-lg'><i className="fa-solid fa-phone-volume"></i> +8801611374068</h2>
      </div>
    </nav>
  )
}

export default Navbar