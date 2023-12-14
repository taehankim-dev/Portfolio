// import { readdirSync } from 'fs';
// import { getProjectDetailData } from '@/lib/api';

// type Params = {
//   params :{
//     projectId: number,
//     projectName: string,
//   }
// }

// export async function getStaticProps({params}: {params:any}){
//   const postData = await getProjectDetailData(params.projectName);
//   return {
//     props: {
//       postData
//     }
//   }
// }

// export const generateStaticParams = async () => {
//   const paths = readdirSync('./_projects')

//   return paths;
// }

// export const generateMetadata = async({params} : Params) => {
//   const {meta} = await getProjectDetailData(params.projectName);
//   return {
//     title: meta.title,
//     description : meta.description,
//   }
// }


// const ProjectPage = async({ params } : Params) => {
//   const {meta, content} = await getProjectDetailData(params.projectName);

//   return (
//     <>
//       {/* <PageContainer>
//         <PageTitle title={meta.title}/>
//         <PageBody>
          
//         </PageBody>
//         <PageButtonWrapStyle>
//           <button>
//             <Link as={`/`} href={`/`}>
//               <span>목록으로</span>
//             </Link>
//           </button>
//         </PageButtonWrapStyle>
//       </PageContainer> */}
//       <div dangerouslySetInnerHTML={{__html : content}} />    
//     </>
//   )
// }

// export default ProjectPage;