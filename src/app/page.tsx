
import SectionPage from './pages/page';
import ProjectPage from './pages/projects/page'
import Footer from '@/app/components/footer';
import TopButton from './components/topButton';
import Header from './components/header';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <SectionPage />
        <ProjectPage />
      </main>
      <Footer />
      <TopButton />
    </div>
    
  )
}
