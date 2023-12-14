import Link from 'next/link';
import SectionPage from './pages/page';
import ProjectPage from './pages/projects/page'
import Footer from '@/app/components/footer';
import TopButton from './components/topButton';

export default function Home() {
  return (
    <div>
      <main>
        <SectionPage />
        <ProjectPage />
      </main>
      <Footer />
      <TopButton />
    </div>
    
  )
}
