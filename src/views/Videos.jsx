import React, { useEffect, useState } from 'react';
import { Layout } from "../components";
import Masonry from 'react-masonry-css'; // Importa Masonry de la librería react-masonry-css
import { storage } from '../firebase/firebaseConfig';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

function Videos() {
    const [mediaItems, setMediaItems] = useState([]);

    useEffect(() => {
        const fetchMediaItems = async () => {
            const listRef = ref(storage, 'videos/');
            const res = await listAll(listRef);
            const items = await Promise.all(
                res.items.map(async (itemRef) => {
                    const url = await getDownloadURL(itemRef);
                    const fileName = itemRef.name.toLowerCase();
                    const type = (fileName.endsWith('.mp4') || fileName.endsWith('.mov')) ? 'video' : 'image';
                    return { type, src: url };
                })
            );
            setMediaItems(items);
        };

        fetchMediaItems();
    }, []);

    const handleHover = (el) => {
        el.target.play();
    };

    const handleHoverLeave = (el) => {
        el.target.pause();
    };

    return (
        <Layout>
            <div className='flex justify-center'>
                <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-24">
                    <Masonry
                        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }} // Define el número de columnas en diferentes breakpoints
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {mediaItems.map((media, index) => (
                            <div className="grid-item opacity-80 rounded-xl shadow hover:opacity-100 transition-all hover:scale-105" key={index}>
                                {media.type === 'image' ? (
                                    <img className="w-full h-auto  " src={media.src} alt={`Masonry Image ${index}`} loading="lazy" />
                                ) : (
                                    <video onMouseEnter={handleHover} onMouseLeave={handleHoverLeave} className="w-full h-auto rounded-xl shadow opacity-80 hover:opacity-100 transition-opacity" playsInline loop data-wf-ignore="true" data-object-fit="cover">
                                        <source src={media.src} data-wf-ignore="true" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                        ))}
                    </Masonry>
                </div>
            </div>
        </Layout>
    );
}

export default Videos;
