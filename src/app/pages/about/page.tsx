import ArticleLayout from '@/app/container/ArticleLayout'

const AboutMe = [
  {key: 'name', title: '이름', body: '김태한'},
  {key: 'birth', title: '생년월일', body: '95.02.03'},
  {key: 'loc', title: '주소지', body: '경기도 안산시'},
  {key: 'call', title: '연락처', body: '010-5195-1659'},
  {key: 'mail', title: '이메일', body: 'goldmini95@gmail.com'},
  {key: 'edu', title: '학력', body: '국민대학교'},
]

export default function About(){
  return (
    <ArticleLayout articleTitle='ABOUT ME'
                   articleId='about'
                   articleBackColor="pink-200">
      <div className="article-body">
        {AboutMe.map(info => (
          <div key={info.key} className="article-item inline-flex xl:w-1/3 sm:w-1/2 w-full my-2">
            <div className='article-item-inner text-center m-auto p-4 w-2/3 border-2 border-red-300 bg-slate-100/75 rounded-full'>
              <p className="mb-1 text-lg font-bold w-full">{info.title}</p>
              <p className="mt-3 text-sm">{info.body}</p>
            </div>
          </div>
        ))}
      </div>
    </ArticleLayout>
  )
}