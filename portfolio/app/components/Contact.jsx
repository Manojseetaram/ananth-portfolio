import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 scroll-mt-20">
       <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo">Get in touch</h2>
            <p className="text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base lg:text-lg leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam debitis molestiae necessitatibus id
        laboriosam modi eos sit dolorum iste totam et, adipisci inventore aperiam, nisi iusto provident fugiat
        doloremque?
          </p>
          <form className='max-w-2xl mx-auto'>
              <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                  <input type='text' placeholder='Enter your name' required  className='flex-1 p-3 outline-none border-[.5px] border-gray-400 rounded-md bg-white'/>
                  <input type='email' placeholder='Enter our email' required className='flex-1 p-3 outline-none border-[.5px] border-gray-400 rounded-md bg-white'/>
              </div>
              <textarea rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[.5px] border-gray-400 rounded-md bg-white mb-6 '></textarea>
              <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500' type='submit'>Submit now</button>
          </form>
    </div>
  )
}

export default Contact
