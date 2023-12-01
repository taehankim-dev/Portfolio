import ArticleLayout from '@/app/components/layouts/ArticleLayout'

export default function About(){
  return (
    <ArticleLayout articleTitle='ABOUT ME'
                   articleBackColor="orange">
      <div className="text-center">
        <p>더 나은 방식으로 해결할 수 있는지 고민하고</p>
        <p>커뮤니케이션을 중요하게 생각하는</p>
        <p>프론트엔드 개발자, 김태한입니다.</p>
      </div>
    </ArticleLayout>
  )
}