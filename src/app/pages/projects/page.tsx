import ArticleLayout from '@/app/container/ArticleLayout';
import { getAllSimpleProjects } from '@/lib/api'
import { ProjectItem } from './projectItem/page';

export default function Projects(){
  const allProjects = getAllSimpleProjects();
console.log(allProjects)

  return (
    <ArticleLayout articleTitle="PROJECTS">
      <div className='article-body'>
        <div className="swiper-wrap overflow-hidden sm:h-[700px] md:h-[550px] relative">
          <div className="swiper flex w-[200%] h-full absolute left-0 top-0">
            {allProjects.map(project => (
              <div key={project.data.projectId} 
                  className="swiper-inner w-[50%]">
                <div className='swiper-slide p-4'>
                  <ProjectItem content={project.content}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
} 