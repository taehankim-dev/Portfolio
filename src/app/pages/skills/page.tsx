import ArticleLayout from "@/app/components/layouts/ArticleLayout";
import { Noto_Sans } from 'next/font/google'

const Skills = [
  {key: 'Lang', title: 'Language', body: ['JavaScript', 'TypeScript']},
  {key: 'Framework', title: 'Framework / Library', body: ['React', 'Redux', 'Recoil', 'React-Query', 'Next.JS' ,'NodeJS', 'Express']},
  {key: 'MarkUp', title: 'MarkUp', body: ['HTML', 'CSS', 'SCSS', 'Emotion', 'Tailwind CSS']},
  {key: 'Tool', title: 'Tool', body: ['Git', 'Github']},
  {key: 'Cert', title: 'Certificate', body: ['정보처리기사']}
]

const NotoSans = Noto_Sans({
  weight: ['400', '900'],
  subsets: ['latin']
})

export default function MySkills() {
  return (
    <ArticleLayout articleTitle='SKILLS'
                   articleBackColor="amber-400">
      <div className="article-body">
        {Skills.map(skill => (
          <ul key={skill.key} className="flex mx-auto my-2 justify-center items-center">
            <li className={`inline-flex w-[200px] font-bold ${NotoSans.className}`}>
              {skill.title}
            </li>
            <li className={`inline-flex xl:w-[600px] w-3/4 ${NotoSans.className}`}>
              {skill.body.map(item => (
                <span key={item} className="p-2 flex">{item}</span>
              ))}
            </li>
          </ul>
        ))}
      </div>
    </ArticleLayout>
  )
}