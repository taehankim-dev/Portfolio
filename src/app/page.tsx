import Link from 'next/link';
import { getAllProjectData } from './lib/api';
import SectionPage from './pages/page';

export default function Home() {
  const projects = getAllProjectData();

  console.log(projects)
  return (
    <div>
      <main>
        <SectionPage />
        {projects.map((project) => (
          <div key={project.projectId}>
            <Link as={`/pages/${project.projectName}`}
                  href={`/${project.projectName}`}
                  style={{display:"block"}}>
              <div>
               title : {project.projectName}                              
              </div>
            </Link>
          </div>
        ))}
      </main>
    </div>
    
  )
}
