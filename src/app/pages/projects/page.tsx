import ArticleLayout from '@/app/container/ArticleLayout';
import { getAllSimpleProjects } from '@/lib/api'
import Swiper from './swiper';

export default function Projects(){
  const allProjects = getAllSimpleProjects();
  
  return (
    <ArticleLayout articleTitle="PROJECTS"
                   articleId="projects">
      <div className='article-body'>
        <div className="swiper-wrap overflow-hidden sm:h-[700px] md:h-[500px] lg:h-[500px] h-[700px] relative">
          <Swiper allProjects={allProjects}/>
        </div>
      </div>
    </ArticleLayout>
  )
} 