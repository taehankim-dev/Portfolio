"use client"
import { useCallback, useEffect, useMemo } from "react";
import { throttle } from "lodash"
import { roboto } from "@/components/font";

type MenuT = {
  key: string,
  menuName: string,
  menuId: string,
}[];

const menuItems : MenuT = [
  {key: 'menuItem01', menuName: 'About me', menuId: 'about'},
  {key: 'menuItem02', menuName: 'Skills', menuId: 'skills'},
  {key: 'menuItem03', menuName: 'Career', menuId: 'career'},
  {key: 'menuItem04', menuName: 'Projects', menuId: 'projects'},
]

export default function Header(){
  const scrollEvent = useMemo(() =>
    throttle(() => {
      if(window.pageYOffset < 10) {
        document.querySelector("#header")?.setAttribute("style", `background: none`)
      } else {
        document.querySelector("#header")?.setAttribute("style", `background: white`);
      }
    }, 300), [])

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
  }, [scrollEvent])

  const onClickMenu = useCallback((id? : string) => {
    if(id){
      const target = document.querySelector(`#${id}`)?.getBoundingClientRect().top;
      if(target){
        window.scroll({
          top: target + window.pageYOffset - 60,
          left: 0,
          behavior: 'smooth'
        })
      }
    } else {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
  }, []);

  return(
    <header id="header" className="mb-4 mx-auto fixed z-20 w-full bg-white">
      <nav>
        <ul className="flex p-4">
          <li className={`mr-auto ${roboto.className} font-bold`}>
            <span className="text-lg cursor-pointer hover:text-blue-400" onClick={() => onClickMenu()}>TaeHan`s Portfolio</span>
          </li>
          {menuItems.map((item, idx) => (
            <li key={item.key} 
                className={`${menuItems.length-1 === idx ? "" : "mr-6"}`}>
              <span className="text-sm cursor-pointer hover:text-blue-400" onClick={() => onClickMenu(item.menuId)}>{item.menuName}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}