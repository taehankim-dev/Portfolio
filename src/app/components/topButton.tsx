'use client'
import {useCallback, useEffect, useMemo} from 'react';
import { throttle } from 'lodash';

export default function TopButton(){
  const onClickToTop = useCallback(() => {
    window.scrollTo(0,0);
  }, [])

  const scrollEvent = useMemo(() =>
    throttle(() => {
      if(window.pageYOffset < 200) {
        document.querySelector('.top-button-wrap')?.setAttribute("style", "display: none");
      } else {
        document.querySelector('.top-button-wrap')?.setAttribute("style", "display: block");
      }
    }, 300), [])

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
  }, [scrollEvent])

  return(
    <div className="top-button-wrap fixed top-[94%] right-[2%] cursor-pointer border-2 w-[50px] h-[50px] text-center bg-white
    before:content-['\21E1'] before:font-bold before:text-4xl before:transition-all before:w-[50px] before:h-[50px]
    hover:before:text-blue-500"
    onClick={onClickToTop} />
  )
}