import React, { useRef, useEffect, useState } from 'react';


const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {

    const imageRef = useRef(null)
    const [inView, setInview] = useState(false)
    const [isLoading, setisLoading] = useState(true)

    const isInView = () => {
        const react = imageRef.current.getBoundingClientRect();
        return react.top >= 0 && react.bottom <= window.innerHeight;
    }

    const scrollHandler = () => {
        setInview(isInView())
    }
    useEffect(() => {
        setisLoading(false)
        setInview(isInView())
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    }, [])

    return(
        <div>
            <img
                src={isLoading ? "" : inView ? primaryImg : secondaryImg}
                alt="Loading ....."
                height="400px"
                ref={imageRef}
            />
        </div>
    )
}

export default ImageToggleOnScroll;
