// import { assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// const Header = () => {
//   return (
//     <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
//          <div className="flex items-center justify-center">
//   <Image
//     src={assets.profile_img}
//     alt="Profile Image"
//     width={188} 
//     height={188}
//     className="rounded-full w-38 h-38 object-cover"
//   />
// </div>

//           <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I,m Ananth Kulkarni<Image src={assets.profile_img} alt='' className='w-6' /></h3>
//           <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>frontend web developer based in india</h1>
//           <p className='max-w-2xl mx-auto font-Ovo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, amet quidem. Eius laborum quisquam vel</p>
//           <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
//               <a href='#contact' className='px-10 py-3 border-white  bg-black rounded-full text-white border  flex items-center gap-2'>contact me
//                   <Image src={assets.right_arrow_white} alt='' className='w-4'></Image>
//               </a>
//               <a href='/sample-resume.pdf' download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume
//                   <Image src={assets.download_icon} alt='' className='w-4'></Image>
//               </a>
//           </div>
//     </div>
//   )
// }

// export default Header
import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-6 py-12 h-screen">
      
  
      <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
        <h3 className="text-lg font-semibold">Hi I am</h3>
        <h1 className="text-4xl sm:text-5xl font-bold text-black">
          <span className="text-blue-500 text-xl">Ananth R Kulkarni</span> <br />
       
          <span className='tracking-[3]'>UI & UX</span> 
          <br/>
          <span className='tracking-[3]'>Designer</span> 
        </h1>
        <p className="text-gray-600 mt-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. 
          Aliquet donec morbi convallis pretium. Turpis tempus pharetra
        </p>
        
     
        <div className="mt-6">
          <a href="#contact" className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg">
            Hire Me
          </a>
        </div>
      </div>

     
      <div className="md:w-1/2 flex justify-center mt-16 md:mt-0 order-1 md:order-2">
        <div className="w-40 sm:w-56 lg:w-64 mx-auto lg:mx-0 rounded-full">

          <Image
            src={assets.profile_img}
            alt="Profile Image"
            width='auto'
            height={450}
            className="w-full h-auto rounded-full"
          />
          
     
    
        </div>
      </div>

    </div>
  )
}

export default Header
