import Header from '@/app/components/header'

export default function MyInfo(){
  return (
    <article className={`
      w-full 
      relative
      h-[650px]
      after:content=[''] 
      after:block 
      after:absolute
      after:top-0
      after:bg-[url('/images/info_back2.jpg')]
      after:xl:bg-cover
      after:bg-center
      after:w-full
      after:h-[650px]
      after:opacity-20
      `}>
      <Header />
      <div className="md:container m-auto w-full p-4 relative z-10">
        <div className="article-title text-center font-bold border-b-2 p-2 mb-4">
          <p className="h-[90px] text-5xl mb-4">- 김태한 -</p>
          <p className="h-[70px] tracking-widest text-5xl ">PORTFOLIO</p>
        </div>
        <div className="article-body flex h-[250px] justify-center items-center">
          <ul className="text-center">
            <li className="p-1 text-xl my-4 font-bold">더 나은 방식으로 해결할 수 있는지 고민하고</li>
            <li className="p-1 text-xl my-4 font-bold">커뮤니케이션을 중요하게 생각하는</li>
            <li className="p-1 text-xl font-bold">프론트엔드 개발자, 김태한입니다.</li>
          </ul>
        </div>
      </div>
    </article>
  )
}