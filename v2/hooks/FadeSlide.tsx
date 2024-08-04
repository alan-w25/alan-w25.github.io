import React, {useState, useEffect} from "react"; 

export const useFadeSlideIn = (duration = 200, delay = 10, distance = 15) => {
    const [isVisible, setIsVisible] = useState(false); 

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true); 
        }, delay); 

        return () => {
            clearTimeout(timeout); 
        }
    }, [delay]);

    const transitionStyle = {
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? "translateY(0)" : `translateY(${distance}px)`,
        transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms`,
    }

    return transitionStyle


}

