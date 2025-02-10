// import { serviceData,assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'

// const Service = () => {
//   return (
//     <div id='services' className='w-full px[12%] py-10 scroll-mt-20'>
//           <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
//           <h2 className='text-center text-5xl font-Ovo'>My Service</h2>
//           <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam
//               debitis molestiae necessitatibus id laboriosam modi eos sit dolorum iste totam et,
//               adipisci inventore aperiam, nisi iusto provident fugiat doloremque?</p>
//           <div className='grid grid-cols-auto gap-6 my-10 '>
//               {serviceData.map(({ icon, title, description, link }, index) => (
//                   <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
//                       <Image src={icon} alt="" className='w-10' />
//                       <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
//                       <p className='text-sm text-gray-600 leading-5'>{description}</p>
//                       <a href={link} className='flex items-center gap-2 text-sm mt-5'>
//                           Read more<Image alt=''src={assets.right_arrow} className='w-4'/>
//                       </a>
//                   </div>
//               ))}
//           </div>
//     </div>
//   )
// }

// export default Service
import { serviceData, assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

const Service = () => {
  return (
    <div id="services" className="w-full px-6 sm:px-10 lg:px-16 py-10 scroll-mt-20" >
      {/* Section Title */}
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo">My Service</h2>
      <p className="text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base lg:text-lg leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam debitis molestiae necessitatibus id
        laboriosam modi eos sit dolorum iste totam et, adipisci inventore aperiam, nisi iusto provident fugiat
        doloremque?
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg p-6 sm:p-8 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
          >
            <Image src={icon} alt={title} className="w-10 mx-auto lg:mx-0" />
            <h3 className="text-lg my-4 text-gray-700 text-center lg:text-left">{title}</h3>
            <p className="text-sm text-gray-600 leading-5 text-center lg:text-left">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5 text-center lg:text-left">
              Read more
              <Image alt="arrow" src={assets.right_arrow} className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
