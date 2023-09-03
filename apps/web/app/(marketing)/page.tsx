'use client';
import { HomeHeroSection } from '../../components/home/home-hero-section';
import { HomeFeaturesSection } from '../../components/home/home-features-section';
import { HomeTestimonialsSection } from '../../components/home/home-testimonials-section';

export default async function IndexPage() {
  //const stars = await getGitHubStars();

  return (
    <>
      <HomeHeroSection />
      <HomeFeaturesSection />
      <HomeTestimonialsSection />
    </>
  );
}
