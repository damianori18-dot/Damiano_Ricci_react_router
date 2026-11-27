import { useEffect, useState, useRef } from "react";

export default function useScroll(){
    const ref = useRef()
    const [scrollY, setScrollY] = useState(0)
    const onScroll = () => setScrollY(window.scrollY)

    useEffect(()=>{
        window.addEventListener('scroll', onScroll)
    },[])

    return [ref, scrollY]
}