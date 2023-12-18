import Image from "next/image"
import Link from "next/link"
import { GithubMark, TistoryMark } from "@/components/icon"

const marks = [
  {icon: <GithubMark />, name: "github", link: "https://github.com/taehankim-dev"},
  {icon: <TistoryMark />, name: "Tistory", link: "https://daily-dev-note95.tistory.com/"},
]

export default function Footer(){
  return(
    <footer className="bg-gray-900 text-white py-6">
      <div className="md:container mx-auto">
        <p className="text-center">© 2023. Kim Tae Han. All rights reserved.</p>
        <div className="logo-wrap flex mt-4 justify-center">
          {
            marks.map(mark => (
              <div key={mark.name} className="w-[3rem] h-[3rem] logo-item flex mx-2 rounded-full bg-white border-4 border-white items-center box-content hover:bg-red-200 hover:border-red-200">
                <Link href={mark.link} target="blank">
                  {mark.icon}
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </footer>
  )
}