import Link from 'next/link';
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

type MenuT = {
  key: string,
  menuName: string,
}[];

export default function Header(){
  const menuItems : MenuT = [
    {key: 'menuItem01', menuName: 'About me'},
    {key: 'menuItem02', menuName: 'Skills'},
    {key: 'menuItem03', menuName: 'Career'},
    {key: 'menuItem04', menuName: 'Projects'},
  ]

  return(
    <header className="mb-4 xl:w-9/12 mx-auto relative z-10">
      <nav>
        <ul className="flex p-4">
          <li className={`mr-auto ${roboto.className} font-bold`}>
            <span className="text-lg">TaeHan`s Portfolio</span>
          </li>
          {menuItems.map((item, idx) => (
            <li key={item.key} 
                className={`${menuItems.length-1 === idx ? "" : "mr-6"}`}>
              <span className="text-sm">{item.menuName}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}