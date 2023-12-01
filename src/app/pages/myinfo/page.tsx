import Header from '@/app/components/header/header'

export default function MyInfo(){
  return (
    <article className={`
      w-full 
      relative
      h-[400px]
      after:content=[''] 
      after:block 
      after:absolute
      after:top-0
      after:bg-[url('/images/info_back2.jpg')]
      after:bg-cover
      after:w-full
      after:h-[400px]
      after:xl:opacity-50
      after:opacity-20
      `}>
      <Header />
      <div className="md:container m-auto w-full p-4 relative z-10">
        <div className="article-title text-center font-bold border-b-2 p-2 mb-4">
          <p>- 김태한 -</p>
          <p>PORTFOLIO</p>
        </div>
        <div className="article-inner">
          <div className="text-center">
            <p className="p-1 text-sm md:font-bold xl:font-normal">더 나은 방식으로 해결할 수 있는지 고민하고</p>
            <p className="p-1 text-sm md:font-bold xl:font-normal">커뮤니케이션을 중요하게 생각하는</p>
            <p className="p-1 text-sm md:font-bold xl:font-normal">프론트엔드 개발자, 김태한입니다.</p>
          </div>
        </div>
      </div>
    </article>
  )
}