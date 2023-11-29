import Image from 'next/image'
import Header from '@/app/components/header/header'
import SectionPage from './pages/page';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <SectionPage />
      </main>
    </div>
    
  )
}
