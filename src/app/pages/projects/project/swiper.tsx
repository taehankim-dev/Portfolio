"use client"
import Image from 'next/image';
import Link from 'next/link';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import { inter, gowunDodum } from '@/components/font'
import { Projects } from '@/constants/projects';

import { Dispatch, SetStateAction } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


type ProjectBodyT = {
  key: string,
  text: string,
  link? : string
}

type ProjectInfoT = {
  key: string,
  title: string,
  text: string,
}

type ProjectT = {
  key: string,
  title: string,
  subTitle: string,
  body: ProjectBodyT[]
  info: ProjectInfoT[]
}

type Props = {
  setModal: Dispatch<SetStateAction<boolean>>,
  setProjectName: Dispatch<SetStateAction<string>>
}

export const ProjectSwiper = ({
  setModal, setProjectName
} : Props) => {
  SwiperCore.use([Navigation, Pagination])

  const clickReadMe = (link : string | undefined) => {
    setModal(true);
    if(link) setProjectName(link)
  }

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={true}
      modules={[Pagination]}
    >
      {Projects.map((project : ProjectT) => (
        <SwiperSlide key={project.key} className="p-4">
          <div className="swiper-slide-inner w-11/12 sm:w-10/11 mx-auto p-4 border-2">
            <div className="swiper-item-inner">
              <div className={`swiper-item-inner-title
                              text-center
                              my-4 mb-6
                              ${gowunDodum.className}`}>
                <p className='font-bold text-2xl mb-2'>{project.title}</p>
                <p className='text-base text-slate-400'>{project.subTitle}</p>
              </div>
              <div className="swiper-item-inner-body flex">
                <div className="swiper-item-inner-img-wrap w-2/5 align-middle">
                  <Image alt='포트폴리오 이미지'
                          src={"/images/calendar_sample1.jpg"}
                          width={1280}
                          height={100}/>
                </div>  
                <div className="swiper-item-inner-text w-3/5 px-4">
                  <div className="swiper-item-inner-text-intro mb-4">
                    {project.body.map(projectLine => (
                      projectLine.link ?
                      <p key={projectLine.key} className='text-center'>
                        <button className='bg-black text-white p-3 py-2 rounded-lg font-bold transition ease-in-out hover:bg-slate-400'
                                onClick={() => clickReadMe(projectLine.link)}>{projectLine.text}</button>
                      </p>
                      :
                      <p key={projectLine.key}
                          className="mb-4">{projectLine.text}</p>
                    ))}
                  </div>
                  <div className="swiper-item-inner-body-plus">
                      {project.info.map(projectLine => (
                        <ul key={projectLine.key} className="flex my-2">
                          <li className="lg:w-2/6 w-2/5 relative font-bold before:content-['\2714'] before:w-[30px] before:pr-1">{projectLine.title}</li>
                          {projectLine.key.includes("github") || projectLine.key.includes("link") ? 
                            <li className={`flex lg:w-4/6 w-3/5 ${inter.className} text-sm items-center`}>
                              <Link href={projectLine.text} 
                                    target='_blank'
                                    className='hover:text-blue-500'>{projectLine.text}</Link>
                            </li>
                            :
                            projectLine.key.includes("tech") ? 
                            <li className={`flex lg:w-4/6 w-3/5 ${inter.className} text-sm items-center`}>{projectLine.text}</li>
                            :
                            <li className='flex lg:w-4/6 w-3/5 text-sm'>{projectLine.text}</li>
                          }
                        </ul>
                      ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};