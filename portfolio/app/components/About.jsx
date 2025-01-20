
import { assets, infoList, toolsData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo">About me</h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 my-16">
        {/* User Image */}
        <div className="w-40 sm:w-56 lg:w-64 mx-auto lg:mx-0 rounded-3xl">
          <Image src={assets.user_image} alt="user" className="w-full h-auto rounded-3xl" />
        </div>

        {/* Info Section */}
        <div className="flex-1 max-w-2xl">
          <p className="mb-8 text-sm sm:text-base lg:text-lg font-Ovo text-center lg:text-left leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto suscipit aliquam magnam, quae ab
            quibusdam dolorum saepe, cumque praesentium consequuntur dolore possimus accusamus neque provident officiis
            soluta aperiam totam blanditiis.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 text-center lg:text-left hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={icon} alt={title} className="w-6 sm:w-8 mx-auto lg:mx-0 mb-3" />
                <h3 className="font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
              </li>
            ))}
          </ul>

          {/* Tools Section */}
          <h4 className="mt-10 mb-4 text-gray-700 font-Ovo text-center lg:text-left">Tools I use</h4>
          <ul className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-400 rounded-lg hover:translate-y-1 duration-500"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-6" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

