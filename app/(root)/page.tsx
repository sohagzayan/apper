import FeaturedJobs from '@/components/containers/home-page/featured-jobs/FeaturedJobs'
import HeroSection from '@/components/containers/home-page/hero-section/HeroSection'
import MillionsOfJobs from '@/components/containers/home-page/millions-of-jobs/MillionsOfJobs'
import PopularJobCategories from '@/components/containers/home-page/popular-job-categories/PopularJobCategories'
import ReadLatestStory from '@/components/containers/home-page/read-latest-article/ReadLatestArticle'
import FAQ from '@/components/shared/FAQ/FAQ'
import CustomersTestimonials from '@/components/shared/customers-testimonials/CustomersTestimonials'
import Recruiting from '@/components/shared/recruiting/Recruiting'

export default function Home() {
  return (
    <main className='bg-primary-50'>
      <HeroSection />
      <PopularJobCategories />
      <FeaturedJobs />
      <MillionsOfJobs />
      <CustomersTestimonials />
      <FAQ />
      <ReadLatestStory />
      <Recruiting />
    </main>
  )
}
