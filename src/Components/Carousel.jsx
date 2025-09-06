import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { IoGitMerge } from 'react-icons/io5';
import Button from './Button';

const Carousel = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price,images,description,warrantyInformation')
            .then(res => res.json())
            .then(data => setProducts(data?.products));
    }, [])



    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {products.map((item) => (
                    <SwiperSlide key={item?.id}>
                        <div className='flex justify-between gap-4 bg-[#F2F4F5]'>
                            <div className='flex justify-center items-center'>
                                <div className='w-9/12 m-auto space-y-4'>
                                    <span className='text-[#2484C2] text-sm'>-{item?.warrantyInformation}</span>
                                    <h2 className='text-[#191C1F] text-5xl font-semibold'>{item?.title}</h2>
                                    <p className='text-lg text-[#475156] leading-6'>{item?.description}</p>
                                    <Button title='shop now' />
                                </div>
                            </div>
                            <div className='relative'>
                                <p className='bg-[#2DA5F3] inline-block p-6 w-20 h-20 rounded-[50%] absolute right-10 top-20 font-semibold text-[#000000a6]'>${item?.price}</p>
                                <img className='w-full drop-shadow-xl drop-shadow-black-500/50' src={item?.images[0]} alt="" />
                            </div>

                        </div>


                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Carousel;