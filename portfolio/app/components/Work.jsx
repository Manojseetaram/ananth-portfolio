// import { assets, workData } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// const Work = () => {
//   return (
//     <div id='work' className=" container w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 scroll-mt-20">
//          <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
//           <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo">My latest work</h2>
//             <p className="text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base lg:text-lg leading-relaxed">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam debitis molestiae necessitatibus id
//         laboriosam modi eos sit dolorum iste totam et, adipisci inventore aperiam, nisi iusto provident fugiat
//         doloremque?
//           </p>
//           <div className='grid grid-cols-auto my-10 gap-5'>
//               {workData.map((project,index) => (
//                   <div key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{ backgroundImage: `url(${project.bgImage})` }}>
//                       <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
//                           <div>
//                           <h2 className='font-semibold'>{project.title}</h2>
//                           <p className='text-sm text-gray-700'>{project.description}</p>
//                            </div>
//                       <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
//                           <Image src={assets.send_icon} alt='' className='w-5'/>
//                       </div>
//                       </div>
                      
//                   </div>
//               ))}
//           </div>
//           <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'>
//               Show more <Image src={assets.right_arrow_bold} alt="Right arrow" className='w-4'/>
//           </a>
          

//       </div>
     
//   )
// }

// export default Work
import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Work = () => {
  return (
    <div id='work' className="w-full px-6 sm:px-10 lg:px-16 py-10 scroll-mt-20">
      {/* Section Title */}
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo">My Latest Work</h2>
      <p className="text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base lg:text-lg leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam debitis molestiae necessitatibus id
        laboriosam modi eos sit dolorum iste totam et, adipisci inventore aperiam, nisi iusto provident fugiat
        doloremque?
      </p>

      {/* Work Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-5'>
        {workData.map((project, index) => (
          <div key={index} 
               className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' 
               style={{ backgroundImage: `url(${project.bgImage})` }}>
            
            {/* Project Details */}
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>

              {/* Icon Button */}
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                <Image src={assets.send_icon} alt='' className='w-5'/>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <a href="#" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'>
        Show More <Image src={assets.right_arrow_bold} alt="Right arrow" className='w-4'/>
      </a>
    </div>
  )
}

export default Work
