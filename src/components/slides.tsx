import { useState, useEffect, useRef } from 'react'
import '../styles/img.css'
import { motion } from "framer-motion"

import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'

const images = [image1, image2, image3, image4, image5, image6, image2];

export const Slide = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0)


    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])



    return (
        <div className="App">

            <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
                <motion.div
                    className="inner"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    {images.map(image => (
                        <motion.div className="item" key={image}>
                            <img className="" src={image} alt="Desc img" />
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>

        </div>
    );
}