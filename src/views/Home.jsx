// src/components/PinterestGallery.js
import React, { useEffect, useRef,useState } from 'react';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import { RiScreenshot2Line  } from "react-icons/ri";
import { MdVideoStable } from "react-icons/md";
import { FaFileVideo, FaImages, FaGifts   } from "react-icons/fa";


import { Layout } from '../components';

const mediaItems = [
  { type: 'image', src: './1.jpg' },
  { type: 'image', src: './2.jpg' },
  { type: 'video', src: './3.mp4' },
  { type: 'image', src: './4.jpg' },
  { type: 'image', src: './5.jpg' },
  { type: 'image', src: './6.jpg' },
  { type: 'video', src: './7.mp4' },
  { type: 'video', src: './8.mp4' },
  { type: 'video', src: './9.mp4' },
  // Add more media items as needed
];




const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  const masonryRef = useRef(null);

  useEffect(() => {
    window.onload=()=>{
      const grid=document.querySelector("#grid");
      const mansory= new Masonry(grid,{
        itemSelector:".grid-item",
        gutter:10,
        originLeft:true,
        originTop:false,
        fitWidth:true
        
      });
      
      mansory.on("layoutComplete",()=>{
        console.log("complete")
      })
    
    }
    

  }, []);


  return (
    <Layout>
      <h1 className='text-center text-3xl text-white font-bold'>SELECCIONA UNA CATEGORIA</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 h-[90vh] w-full relative z-10">
        <a href='/ss' className="flex m-auto bg-[#0e0e0e] p-4 md:p-10 text-white hover:scale-110 hover:shadow-xl transition-all w-[250px] rounded-2xl font-bold">
        <RiScreenshot2Line className='m-auto' />
        <span className='m-auto'>ScreenShots</span>
        </a>

        <a href='/sr' className="flex m-auto bg-[#0e0e0e] p-4 md:p-10 text-white hover:scale-110 hover:shadow-xl transition-all w-[250px] rounded-2xl font-bold">
        <MdVideoStable className='m-auto' />
        <span className='m-auto'>ScreenRecording</span>
        </a>

        <a href='/videos' className="flex m-auto bg-[#0e0e0e] p-4 md:p-10 text-white hover:scale-110 hover:shadow-xl transition-all w-[250px] rounded-2xl font-bold">
        <FaFileVideo className='m-auto' />
        <span className='m-auto'>Videos</span>
        </a>

        <a href='/images' className="flex m-auto bg-[#0e0e0e] p-4 md:p-10 text-white hover:scale-110 hover:shadow-xl transition-all w-[250px] rounded-2xl font-bold">
        <FaImages className='m-auto' />
        <span className='m-auto'>Imagenes</span>
        </a>

        <a href='/regalos' className="flex m-auto bg-[#0e0e0e] p-4 md:p-10 text-white hover:scale-110 hover:shadow-xl transition-all w-[250px] rounded-2xl font-bold">
        <FaGifts className='m-auto' />
        <span className='m-auto'>Regalos</span>
        </a>

      </div>

      <video className='absolute top-0 left-0 w-full h-full object-cover z-0 blur-md opacity-40' id="myVideo" autoPlay muted playsInline loop data-wf-ignore="true" data-object-fit="cover">
          <source src="./3.mp4" data-wf-ignore="true" />
      </video>
    </Layout>
  );
};

export default Home;
