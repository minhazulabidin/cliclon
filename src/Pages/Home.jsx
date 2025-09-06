import React, { useEffect, useState } from 'react'
import Carousel from '../Components/Carousel'
import Button from './../Components/Button';

const Home = () => {
    const [product1, setProduct1] = useState([]);
    const [product2, setProduct2] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/8')
            .then(res => res.json())
            .then(data => setProduct1(data));
    }, [])
    useEffect(() => {
        fetch('https://dummyjson.com/products/17')
            .then(res => res.json())
            .then(data => setProduct2(data));
    }, [])


    return (
        <div className='container m-auto'>
            <div className="grid gap-4 grid-flow-col grid-cols-10 row-span-4 border-black border">
                <div className="col-span-7 row-span-4">
                    <Carousel />
                </div>
                <div className="bg-radial-[at_20%_80%] from-[#3837373f] to-[#131212e0] to-90% rounded text-white flex justify-between py-4 px-5 col-span-3 row-span-2">
                    <div className='basis-1/2 flex justify-center items-center'>
                        <div className='space-y-3'>
                            <span className='text-[#EBC80C] text-sm font-medium leading-5'>Summer Sales</span>
                            <h2>{product1?.title}</h2>
                            <Button title='SHOP NOW' />
                        </div>
                    </div>
                    <div className='basis-1/2'>
                        <img className='w-full drop-shadow-xl drop-shadow-black-900' src={product1?.thumbnail} alt="" />
                    </div>
                </div>
                <div className="col-span-3 row-span-2 bg-radial-[at_20%_20%] from-[#3837373f] to-[#242323e0] to-90% rounded text-white flex justify-between py-8 px-10">
                    <div className='basis-1/2'>
                        <img src={product2?.thumbnail} className='w-full drop-shadow-xl drop-shadow-black-900' alt="" />
                    </div>
                    <div className='basis-1/2 flex  justify-center items-center'>
                        <div className='space-y-3'>
                            <span className='text-[#EBC80C] text-sm font-medium leading-5'>Summer Sales</span>
                            <h2 className='text-xl'>{product2?.title}</h2>
                            <p className='text-base text-[#2DA5F3]'>${product2?.price}USD</p>
                            <Button title='SHOP NOW' />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home