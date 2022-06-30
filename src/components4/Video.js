import React from 'react'
import ReactPlayer from 'react-player'

const Video = () => {
  return (
    <div className=' m-4 w-full'>
        <h2 className='flex justify-center text-[#f6d3ff] text-lg'>NOTICIAS</h2>

        <div className=' flex '>
            <div className=''>
                <ReactPlayer url='https://www.youtube.com/watch?v=ju3NphjdNfs'
                controls 
                playing
                muted
                loop
                />
            </div>

            
            <div className=' pl-2 hidden xl:flex'>
            <iframe src="https://www.instagram.com/p/Ccy-BHFreDT/embed" 
            className='flex'
            width="full" 
            height="360" 
            frameborder="0" 
            scrolling="no" 
            allowtransparency="true"
            />
            </div> <div className=' pl-2 hidden 2xl:flex'>
            <iframe src="https://www.instagram.com/p/Ccy-BHFreDT/embed" 
            className='flex'
            width="full" 
            height="360" 
            frameborder="0" 
            scrolling="no" 
            allowtransparency="true"
            />
            </div> <div className=' pl-2 hidden 2xl:flex'>
            <iframe src="https://www.instagram.com/p/Ccy-BHFreDT/embed" 
            className='flex'
            width="full" 
            height="360" 
            frameborder="0" 
            scrolling="no" 
            allowtransparency="true"
            />
            </div> 
            <div className=' pl-2  md:flex-wrap'>
            <iframe src="https://www.instagram.com/p/Ccy-BHFreDT/embed" 
            className='flex'
            width="full" 
            height="360" 
            frameborder="0" 
            scrolling="no" 
            allowtransparency="true"
            />
            </div>    
        </div> 
     
    </div>
  )
}

export default Video