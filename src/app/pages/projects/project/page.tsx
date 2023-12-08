"use client"
import { useState } from 'react';
import { ProjectSwiper } from './swiper';
import Modal from './modal';

// Props 전달 받아서 확인된 거만 돌려줘야하는데 
export default function Project() {
  const [modal, setModal] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");

  // console.log(Props.projectName)
  console.log(modal, projectName, "THIS")

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