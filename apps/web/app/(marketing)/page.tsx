'use client';
import Link from 'next/link';

import { env } from '../../env.mjs';
import { siteConfig } from '../../config/site';
import { HomeHeroSection } from '../../components/home/home-hero-section';
import { HomeFeaturesSection } from '../../components/home/home-features-section';
import { HomeTestimonialsSection } from '../../components/home/home-testimonials-section';

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      'https://api.github.com/repos/shadcn/taxonomy',
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response?.ok) {
      return null;
    }

    const json = await response.json();

    return parseInt(json['stargazers_count']).toLocaleString();
  } catch (error) {
    return null;
  }
}

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
