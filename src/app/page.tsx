import Link from 'next/link';
import SectionPage from './pages/page';
import ProjectPage from './pages/projects/page'
import Footer from '@/app/components/footer';

export default function Home() {
  return (
    <div>
      <main>
        <SectionPage />
        <ProjectPage />
      </main>
      <Footer />
    </div>
    
  )
}
