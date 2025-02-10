// import { assets } from "@/assets/assets";
// import React from "react";
// import Image from "next/image";
// const Hireme = () => {
//     return (
//      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-10 bg-gray-200 rounded-2xl">

//             <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 my-16  ">
//                 <div className="w-40 sm:w-56 lg:w-64 mx-auto lg:mx-0 ">
//                     <Image src={assets.user_image} alt="hire" className="w-full h-auto"/>
//                 </div>
//                 <div className="flex-1 max-w-2xl">
//                     <div className="">Why <span>Hire me</span>?</div>
//                     <p className="mb-8 text-sm sm:text-base lg:text-lg font-Ovo text-center lg:text-left leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quaerat nulla similique earum nesciunt sapiente labore laudantium nostrum, voluptates, ab ad maiores numquam incidunt
//                         dicta exercitationem voluptas neque deserunt excepturi?</p>
//                     <div className="justify-between flex">
//                         <div>
//                             <div>450+</div>
//                             <div>Project completed</div>
//                         </div>
//                           <div>
//                             <div>450+</div>
//                             <div>Project completed</div>
//                         </div>
                      
//                     </div>
//                     <div className="mt-10">
//                     <a href="" className="w-max  gap-2 text-gray-700 border-[.5px] border-gray-700 rounded-2xl py-5 px-10 mx-auto my-20 hover:bg-lightHover duration-500"></a>
//                </div>
//                     </div>
//             </div>
//         </div>
//     )
// }
// export default Hireme
import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Hireme = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 py-10 bg-gray-200 rounded-lg flex flex-col items-center text-center">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 my-16">
        {/* Image Section */}
        <div className="w-40 sm:w-56 lg:w-64 mx-auto lg:mx-0">
          <Image src={assets.card_image} alt="hire" className="w-full h-auto" />
        </div>

        {/* Text Section */}
        <div className="flex-1 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center lg:text-left">
            Why <span className="text-primary">Hire Me</span>?
          </h2>
          <p className="mb-8 text-sm sm:text-base lg:text-lg font-Ovo text-center lg:text-left leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quaerat nulla similique earum nesciunt
            sapiente labore laudantium nostrum, voluptates, ab ad maiores numquam incidunt dicta exercitationem voluptas neque deserunt excepturi?
          </p>

          {/* Stats Section */}
          <div className="flex justify-between max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            <div>
              <div className="text-3xl font-bold">450+</div>
              <div className="text-sm text-gray-700">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm text-gray-700">Years Experience</div>
            </div>
          </div>

          {/* Hire Me Button */}
          <div className="mt-10 flex justify-center lg:justify-start">
            <a
              href="#"
              className="flex items-center gap-2 text-gray-700 border border-gray-700 rounded-2xl py-3 px-10 hover:bg-gray-300 duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hireme;
