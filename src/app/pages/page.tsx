import About from "./about/page"
import MyInfo from './myinfo/page';

export default function SectionPage(){
  return (
    <section className="m-auto">
      <MyInfo />
      <About />
    </section>
  )
}