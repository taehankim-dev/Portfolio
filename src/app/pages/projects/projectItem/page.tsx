import ReactMarkDown from 'react-markdown'
import { gowunDodum } from '@/components/font'
import Image from 'next/image'

type Props = {
  content: string
}

const customComponent = {
  p({...props}){
    return(
      <p className="my-4">{props.children}</p>
    )
  },
  h1({...props}){
    return(
      <h1 className={`text-center my-4 mb-6 font-bold text-2xl`}>{props.children}</h1>
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
      <div className="flex items-center my-2 text-sm">
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
  pre(){
    return(
      <></>
    )
  }
}


export const ProjectItem = ({
  content
}: Props) => {
  return (
    <div className="swiper-slide-item mx-auto border-2 w-11/12 sm:w-10/11 p-4 flex">
      <div className='swiper-slide-item-img-wrap w-1/3'>
        <Image src={"/images/calendar_sample1.jpg"}
               alt='포트폴리오 이미지'
               width={1200}
               height={100}/>
      </div>
      <div className={`swiper-slide-item-body-wrap w-2/3 px-4 ${gowunDodum.className}`}>
        <ReactMarkDown components={customComponent}>
          {content}
        </ReactMarkDown>
      </div>
      
    </div>
  )
}