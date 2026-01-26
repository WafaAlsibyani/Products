import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid';
import Icon from "../component/Icon"


const ProductCard = ({ src, category, brand, title, rate, stock, price, discountPercentage, }) => {
  const originalPrice = price;
  const discount = discountPercentage;
  const finalPrice = originalPrice * (1 - discount / 100);
  const savings = originalPrice - finalPrice;

  return (
    <div className='w-full shadow border-2 border-[#F2F3F5] rounded-2xl ' >
      <div className=' bg-linear-to-r from-[#FBF3FC] to-[#F0F6FF] rounded-t-2xl '>
        <div className='bg-linear-to-r from-[#FA2E49] via-[#F9336A] to-[#F73386]
        rounded-3xl w-fit p-2
        '>{"- " + discount.toFixed(0) + "%"}</div>
        <img src={src} className='object-contain w-full h-full ' />
      </div>

      {/* CONTENT */}
      <div className='grid grid-cols-2  gap-1 px-3 py-2'>
        <span className="text-[#E91E8C] whitespace-nowrap w-fit text-center px-[9px] py-1 rounded-full bg-[#FFF0F5] border border-[#FAC2DF] capitalize ">{category}</span >
        <span className="text-[#7D7292] whitespace-nowrap">{brand}</span >
        <p className='col-span-2'>{title}</p>

        <div className='flex items-center col-span-2 '>
          <div className='flex border-[#FFF085] border-2 rounded-2xl px-2 py-1.5 gap-1' >
            <Icon
              icon={StarIcon}
              color='text-[#FDC700]'
              size='size-6'
            />
            <span className="text-[#7D7292] whitespace-nowrap ">{rate}</span >

          </div>
          <span className='size-1.5 bg-[#7D7292] rounded-full ml-2 mr-1' />
          <span className="text-[#7D7292] whitespace-nowrap">{stock + " in stock"}</span >


        </div>
        <span className="text-2xl font-bold text-black">
          {finalPrice.toFixed(2)}
        </span>
        <span className="text-gray-400 line-through">
          ${originalPrice.toFixed(2)}
        </span>
        <div>saved ${savings.toFixed(2)}</div>

      </div>


    </div>
  )
}

export default ProductCard
