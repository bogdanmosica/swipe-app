import { marketingConfig } from '../../config/marketing';
import { HomeFeaturesList } from './home-features-list';

export function HomeFeaturesSection() {
  return (
    <section
      id="features"
      className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:pb-12 lg:pb-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground md:my-6 sm:text-lg sm:leading-7">
          Swipe is a revolutionary video editor app that takes the hassle out of
          video creation and lets you unleash your creativity effortlessly.
          Whether you&apos;re a seasoned marketeer or someone looking to create
          quick videos on the fly, Swipe is designed to cater to all your needs.
        </p>
      </div>

      <HomeFeaturesList items={marketingConfig.mainFeatures} />
    </section>
  );
}
