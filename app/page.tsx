import HeroSection from '@/components/home'
import Footer from '@/components/home/footer'
import Navbar from '@/components/home/navbar'

export default async function Home() {
  return (
    <main className="flex container h-auto flex-col overflow-hidden">
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  )
}
