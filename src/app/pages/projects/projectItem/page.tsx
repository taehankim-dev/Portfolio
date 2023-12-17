import ReactMarkDown from 'react-markdown'
import { gowunDodum } from '@/components/font'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Props = {
  content: string
}

const customComponent = {
  p({...props}){
    return(
      <p className="my-2">{props.children}</p>
    )
  },
  h1({...props}){
    return(
      <h1 className={`text-center font-bold text-2xl mb-4`}>{props.children}</h1>
    )
  },
  h2({...props}){
    return(
      <h2 className={`text-center text-slate-400`}>{props.children}</h2>
    )
  },
  h3({...props}){
    if(props.children === '프로젝트 소개' || 
      props.children === '파일 구조' ||
      props.children === '프로젝트 목표' ||
      props.children === '추가해보고 싶은 사항') return <></>

    return(
      <h3 className="flex
                     font-bold 
                     break-keep
                     mr-2
                     md:w-[25%]
                     sm:w-[35%]
                     before:content-['\2714'] 
                     before:w-[30px] 
                     before:pr-1">
        {props.children}
      </h3>
    )
  },
  blockquote({...props}){
    return(
      <div className="flex items-center my-1 text-sm">
        {props.children}
      </div>
    )
  },
  li({...props}){
    return(
      <li className='flex px-1 break-words'>
        {props.children}
      </li>
    )
  },
  a({...props}){
    return(
      <Link href={props.children} target='blank' className={`hover:text-blue-700 hover:font-bold`}>
        {props.children}
      </Link>
    )
  },
  pre(){
    return(
      <></>
    )
  }
}


export const ProjectItem = ({
  content
}: Props) => {
  const [contentImg, setContentImg] = useState("DiaryProject")

  useEffect(() => {
    if(content.includes("Diary Project")) setContentImg("DiaryProject");
    else if(content.includes("Portfolio")) setContentImg("Portfolio")
  }, [content])

  return (
    <div className="swiper-slide-item mx-auto border-2 w-11/12 sm:w-10/11 p-4 flex">
      <div className='swiper-slide-item-img-wrap w-1/3 items-center inline-flex'>
        <Image src={`/images/${contentImg}.jpg`}
               alt='포트폴리오 이미지'
               width={500}
               height={500}/>
      </div>
      <div className={`swiper-slide-item-body-wrap inline-grid items-center content-between w-2/3 px-4 ${gowunDodum.className}`}>
        <ReactMarkDown components={customComponent}>
          {content}
        </ReactMarkDown>
      </div>
      
    </div>
  )
}