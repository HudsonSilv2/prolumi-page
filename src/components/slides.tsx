import { useState, useEffect, useRef } from 'react'
import '../styles/img.css'
import { motion } from "framer-motion"

import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'

const images = [image1, image2, image3, image4, image5, image6, image2, image3, image4, image5, image6, image1, image2, image3, image4, image5, image6];


export const Slide = () => {
    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const calc = () => {
            if (carousel.current) {
                const scrollWidth = carousel.current.scrollWidth || 0;
                const offsetWidth = carousel.current.offsetWidth || 0;
                setWidth(scrollWidth - offsetWidth);
            }
        };

        calc();
        window.addEventListener('resize', calc);
        return () => window.removeEventListener('resize', calc);
    }, []);

    return (
        <section className="App" aria-label="Galeria de imagens">
            <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }} role="region">
                <motion.div
                    className="inner"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {images.map((image, index) => (
                        <motion.div className="item" key={index} tabIndex={0} aria-hidden={false}>
                            <img loading="lazy" className="carousel-img" src={image} alt={`Imagem ${index + 1}`} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
