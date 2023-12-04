import About from "./about/page"
import MyCareer from "./career/page";
import MyInfo from './myinfo/page';
import MySkills from "./skills/page";

export default function SectionPage(){
  return (
    <section className="m-auto">
      <MyInfo />
      <About />
      <MySkills />
      <MyCareer />
    </section>
  )
}