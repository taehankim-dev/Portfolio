'use client'

import { useEffect, useState } from "react";
import { ProjectItem } from "./projectItem/page"

type Props = {
  allProjects: {
    data: {
      [key: string]: any;
    },
    content: string;
  }[]
}

export default function Swiper({
  allProjects
}: Props){
  const [slideCount, setSlideCount] = useState(allProjects.length)
  const [curSlide, setCurSlide] = useState(0)
  
  useEffect(() => {
    document.querySelector(".swiper")?.setAttribute("style", `left : 0%`);
  }, [])

  useEffect(() => {
    document.querySelector('.swiper')?.setAttribute("style", `left : ${-curSlide * 100}%`)
  }, [curSlide])

  const moveSlide = (direction : string) => {
    if(direction === 'right'){
      setCurSlide(prev => prev += 1)
    } else if(direction === 'left'){
      setCurSlide(prev => prev -= 1);
    }
  }

  return(
    <div className='swiper-inner-wrap relative h-full'>
      {
        curSlide === 0 ?
        <></>
        :
        <span className="absolute top-[50%] z-10 -translate-y-1/2 cursor-pointer
                         before:content-['\290E'] before:font-bold before:text-4xl before:transition-all
                         hover:before:text-blue-500"
                         
              onClick={() => moveSlide("left")} />
      }
      <div className={`swiper flex w-[200%] h-full absolute left-0 top-0 items-center transition-all`}>
        {allProjects.map(project => (
          <div key={project.data.projectId} 
              className="swiper-inner w-[50%]">
            <div className='swiper-slide'>
              <ProjectItem content={project.content}/>
            </div>
          </div>
        ))}
      </div>
      {
        curSlide === slideCount - 1 ?
        <></>
        :
        <span className="absolute top-[50%] right-0 z-10 -translate-y-1/2 cursor-pointer
                         before:content-['\290F'] before:font-bold before:text-4xl before:transition-all
                         hover:before:text-blue-500"
              onClick={() => moveSlide("right")} />
      }
    </div>
    
  )
}