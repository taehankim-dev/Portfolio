"use client"
import { useState } from 'react';
import { ProjectSwiper } from './swiper';
import Modal from './modal';

type Props = {
  projects:{
    [key: string]: any;
  }[]
}

// Props 전달 받아서 확인된 거만 돌려줘야하는데 
export default function Project({
  projects
}: Props) {
  const [modal, setModal] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");

  // console.log(Props.projectName)
  console.log(modal, projectName, "THIS")

  console.log(projects)

  return (
    <div className="article-body">
      <ProjectSwiper setModal={setModal}
                     setProjectName={setProjectName}/>
      {modal ? 
        // Props.map(projectItem => (
        //   projectItem.projectName === projectName ?
        //     // <Modal key={"project-"+projectName}/>
        //     <></>
        //     :
        //     <></>
        // ))
        <></>
        :
        <>UNSHOW</>
      }
    </div>
  )
}