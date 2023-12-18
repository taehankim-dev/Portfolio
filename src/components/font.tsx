import { Roboto, Noto_Sans, Nanum_Myeongjo, Gowun_Dodum, Inter, Oswald, Raleway } from "next/font/google"

export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const notoSans = Noto_Sans({
  weight: ['200', '600'],
  subsets: ['latin'],
  display: 'swap'
})

export const nanumMyeongjo = Nanum_Myeongjo({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const gowunDodum = Gowun_Dodum({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap'
})

export const oswald = Oswald({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const raleway = Raleway({
  weight: ['400', '900'],
  subsets: ['latin'],
  display: 'swap',
})