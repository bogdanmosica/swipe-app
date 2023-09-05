import { Icons } from '../components/icons';
import { MarketingConfig } from '../types';

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: 'Features',
      href: '/#features',
    },
    {
      title: 'Dashboard',
      href: '/dashboard',
      needAuth: true,
    },
    {
      title: 'Pricing',
      href: '/pricing',
    },
  ],
  mainFeatures: [
    {
      title: 'Video Templates',
      icon: Icons.video,
      description:
        'Simply choose a template that matches your content, customize it with your text and media, and voila!',
    },
    {
      title: 'Filters',
      icon: Icons.filters,
      description:
        'Experiment with different filters to find the perfect match for your content.',
    },
    {
      title: 'Auto Upload',
      icon: Icons.upload,
      description:
        'Instantly share your videos with your audience and save valuable time that you can invest in crafting more engaging content.',
    },
    {
      title: 'Text-to-Speech',
      icon: Icons.textSpeach,
      description:
        "Say goodbye to the hassle of recording voiceovers manually. With Swipe's text-to-speech, you can effortlessly add professional narration.",
    },
    {
      title: 'Background Videos',
      icon: Icons.backgroundVideos,
      description:
        'Swipe allows you to choose from a wide range of background videos or upload your own to create the desired ambiance for your video.',
    },
    {
      title: 'Word Animations',
      icon: Icons.wordAnimations,
      description:
        'Additionally, word animations add a touch of magic as each word animates individually, creating captivating effects when they appear in the video.',
    },
  ],
  mainTestimonials: [
    {
      authorName: 'Sarah M.',
      companyName: 'Google',
      description:
        "Swipe has saved me so much time and stress! It's a game-changer for social media managers like me. Quick and easy video editing with stunning templates and filters. The auto-upload feature is a dream!",
    },
    {
      authorName: 'Jason P.',
      companyName: 'Amazon',
      description:
        'Swipe is the best quick video editing app! User-friendly and powerful. Text-to-speech, background videos, and word animations make my videos professional and captivating.',
    },
    {
      authorName: 'Emily L.',
      companyName: 'Influencer',
      description:
        "Swipe is my go-to app for travel videos! Stunning templates, filters, and auto-upload. It's a time-saver for my travel blog content.",
    },
    {
      authorName: 'Mark T.',
      companyName: 'Tesla',
      description:
        'Swipe exceeded my expectations! Vast templates, text-to-speech, and word animations. Perfect for content creators like me.',
    },
    {
      authorName: 'Rachel S.',
      companyName: 'Adobe',
      description:
        "I'm not tech-savvy, but Swipe made video editing easy! Simple interface, drag-and-drop, and auto-upload. Impressive videos without the complexity!",
    },
  ],
};
