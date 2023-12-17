import Image from 'next/image'
import { nanumMyeongjo, gowunDodum } from '@/components/font'
import ArticleLayout from '@/app/container/ArticleLayout'

import { Careers } from '@/constants/careers'


export default function MyCareer(){
  return (
    <ArticleLayout articleTitle="CAREER"
                   articleId="career"
                   articleBackColor="slate-300">
      <div className="article-body">
        <div className="article-body-inner flex px-6 mt-10">
          <div className="career-img flex xl:w-[350px] xl:h-[270px] md:w-[300px] md:h-[230px] sm:w-[300px] sm:h-[200px] w-[200px] h-[150px] border-4 rounded-full overflow-hidden bg-white">
            <Image src="/images/daedan_logo.jpg" 
                  alt="대단 로고"
                  width={250}
                  height={200}
                  className="flex m-auto"/>
          </div>
          <div className="career-body ml-4 pl-6 border-l-4 w-full">
            <p className={`font-bold text-2xl ${nanumMyeongjo.className}`}>(주) 대단</p>
            <p className="text-sm text-slate-600 mt-2">2020.09 ~ 2021.10</p>
            <div className="career-body-inner">
              <div className="career-body-briefly border-b-4 py-4">
                <p className={`${gowunDodum.className} text-base`}>
                  <span className='font-bold'>Vue.js</span>을 통하여 프로젝트의 프론트엔드 개발과 <br/>
                  <span className="font-bold">Spring Boot, Postgre Sql</span>를 이용하여 백엔드 개발을 보조하였습니다. <br />
                  팀원들과 주기적인 회의를 통해 프로젝트의 진척 사항과 이슈를 확인하였으며,
                  팀원들의 코드 리뷰도 함께 담당했습니다.
                </p>
              </div>
              {Careers.map(career => (
                <div key={career.key} className={`career-body-works mt-4 ${gowunDodum.className}`}>
                  <div className='career-works-inner'>
                    <p className="work-title h-[35px] leading-normal  mb-2 text-xl border-l-4 border-slate-700 pl-2.5 font-bold">{career.title}</p>
                    <div className="work-body text-sm">
                      {career.body.map((content) => (
                        <p key={content.key} className="p-1 break-keep">
                          - {content.text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        </div>
        
      </div>
    </ArticleLayout>
  )
}