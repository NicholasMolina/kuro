import React from 'react'
import ReactPlayer from 'react-player'
import "./styles/video.css"

const Video = () => {
  return (
    <div className=' '>
        <h2 className='flex justify-center text-[#f6d3ff] text-lg'>NOTICIAS</h2>
        
          <div className='m-1 justify-center items-center flex '>
              <div className='videoC w-full'>
                      <ReactPlayer url='https://www.youtube.com/watch?v=ju3NphjdNfs'
                      controls 
                      playing
                      muted
                      loop
                      width="100%"
                      height="100%"
                      />
                </div>
            </div>
            
        <div className='flex sm:flex w-full items-center justify-around mx-auto'>
          <div className=' flex flex-wrap justify-center '>
              <div className='  m-1 sm:item-center'>
                <iframe src="https://www.instagram.com/p/Ccy-BHFreDT/embed" 
                className='flex'
                width="full" 
                height="360" 
                frameborder="0" 
                scrolling="no" 
                allowtransparency="true"
                />
              </div> 

              <div className='  m-1 '>
                <iframe src="https://www.instagram.com/p/Ccy-BHFreDT/embed" 
                className='flex'
                width="full" 
                height="360" 
                frameborder="0" 
                scrolling="no" 
                allowtransparency="true"
                />
              </div> 

              <div className='  m-1 '>
                <iframe src="https://www.instagram.com/p/Ccy-BHFreDT/embed" 
                className='flex'
                width="full" 
                height="360" 
                frameborder="0" 
                scrolling="no" 
                allowtransparency="true"
                />
              </div> 

              <div className='  m-1  '>
                <iframe src="https://www.instagram.com/p/Ccy-BHFreDT/embed" 
                className='flex'
                width="full" 
                height="360" 
                frameborder="0" 
                scrolling="no" 
                allowtransparency="true"
                />
              </div>
              <div className='  m-1  '>
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
    </div>
  )
}

export default Video