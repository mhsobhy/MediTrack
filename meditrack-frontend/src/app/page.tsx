import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import HeroSection from '@/components/home/hero-section'
import FeatureCards from '@/components/home/feature-cards'
import AboutSection from '@/components/home/about-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <AboutSection />
      <Footer />
    </main>
  )
}
