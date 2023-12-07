
import Link from 'next/link';
import Image from 'next/image';
import ArticleLayout from '@/app/container/ArticleLayout';
import { getAllProjectData } from '@/lib/api';
import { nanumMyeongjo, inter, gowunDodum } from '@/components/font'
import { Projects } from '@/constants/projects';

export default function Project(){
  const projectData = getAllProjectData();

  return (
    <ArticleLayout articleTitle="PROJECTS">
      <div className='article-body relative 
                      sm:w-full 
                      lg:w-5/6
                      h-[500px]
                      sm:h-[550px]
                      md:h-[530px]
                      lg:h-[570px]
                      2xl:h-[500px]
                      mx-auto overflow-hidden  
                      border-2 rounded-lg'>
        <div className={`swiper-wrap absolute ${nanumMyeongjo.className}`}>
          {Projects.map((project) => (
            <div key={project.key}
                 className='swiper-item w-1/2 p-2 px-6 float-left'>
              <div className="swiper-item-inner">
                <div className={`swiper-item-inner-title
                                text-center
                                my-4 mb-6
                                ${gowunDodum.className}`}>
                  <p className='font-bold text-2xl mb-2'>{project.title}</p>
                  <p className='text-base text-slate-400'>{project.subTitle}</p>
                </div>
                <div className="swiper-item-inner-img-wrap w-2/5 float-left flex align-middle h-">
                  <Image alt='포트폴리오 이미지'
                         src={"/images/calendar_sample1.jpg"}
                         width={1280}
                         height={100}/>
                </div>  
                <div className="swiper-item-inner-body w-3/5 float-left px-4">
                  <div className="swiper-item-inner-body-intro mb-4">
                    {project.body.map(projectLine => (
                      projectLine.link ?
                      <p key={projectLine.key}>
                        <button className='bg-black text-white p-3 rounded-lg font-bold transition ease-in-out hover:bg-slate-400'>{projectLine.text}</button>
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
                          {projectLine.key.includes("github") || projectLine.key.includes("link") || projectLine.key.includes("tech") ? 
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
          ))}
        </div>
      </div>
      {/* {projects.map((project) => (
        <div key={project.projectId}>
          <Link as={`/pages/projects/${project.projectName}`}
                href={`/${project.projectName}`}
                style={{display:"block"}}>
            <div>
              title : {project.projectName}                              
            </div>
          </Link>
        </div>
      ))} */}
    </ArticleLayout>
  )
} 