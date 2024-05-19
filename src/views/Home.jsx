// src/components/PinterestGallery.js
import React, { useEffect, useRef,useState } from 'react';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

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
      <div className="App">
            <div id="grid" className="flex">
                {mediaItems.map((media, index) => (
                  <div className="grid-item w-[20vw] m-auto" key={index}>
                    {media.type === 'image' ? (
                      <img className='w-[100%]' src={media.src} alt={`Masonry Image ${index}`} />
                    ) : (
                      <video autoPlay muted loop>
                        <source className='w-[100%]' src={media.src}  type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                ))}
            </div>
        </div>
    </Layout>

  );
};

export default Home;
