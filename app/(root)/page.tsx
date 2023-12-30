import FeaturedJobs from '@/components/containers/home-page/featured-jobs/FeaturedJobs'
import HeroSection from '@/components/containers/home-page/hero-section/HeroSection'
import PopularJobCategories from '@/components/containers/home-page/popular-job-categories/PopularJobCategories'
import FAQ from '@/components/shared/FAQ/FAQ'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-primary-50'>
      <HeroSection />
      <PopularJobCategories />
      <FeaturedJobs />
      <FAQ />
    </main>
  )
}
