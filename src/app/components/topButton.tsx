'use client'
import {useCallback, useEffect, useState} from 'react';

export default function TopButton(){
  const [pos, setPos] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPos(window.scrollY);
    })
  })

  useEffect(() => {
    if(pos === 0) document.querySelector('.top-button-wrap')?.setAttribute("style", "display: none");
    else if(pos >= 100) document.querySelector('.top-button-wrap')?.setAttribute("style", "display: block");
  }, [pos])

  const onClickToTop = useCallback(() => {
    window.scrollTo(0,0);
  }, [])

  return(
    <div className="top-button-wrap fixed top-[95%] right-[2%] cursor-pointer border-2 w-[50px] h-[50px] text-center bg-white
    before:content-['\21E1'] before:font-bold before:text-4xl before:transition-all before:w-[50px] before:h-[50px]
    hover:before:text-blue-500"
    onClick={onClickToTop} />
  )
}