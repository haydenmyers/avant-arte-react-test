import { type JSX } from 'react';
import FacebookIcon from './FacebookIcon';
import TwitterIcon from './TwitterIcon';

type SocialMediaPlatform = "facebook" | "twitter";

type SocialMediaPlatformProperties = {
  [key in SocialMediaPlatform]: {
    url: `https://${string}`; // Let's enforce a secure url.
    Icon: ({ className }: { className: string }) => JSX.Element;
  }
}

type Props = {
  platform: SocialMediaPlatform;
}

function SocialMediaLink({ platform }: Props) {
  const socialPlatforms: SocialMediaPlatformProperties = {
    facebook: {
      url: 'https://www.facebook.com/avantarte/',
      Icon: FacebookIcon,
    },
    twitter: {
      url: 'https://twitter.com/avant_arte',
      Icon: TwitterIcon,
    },
  }

  const Social = socialPlatforms[platform];

  return (
    <a href={Social.url} target="_blank" className="w-9 h-9 rounded-full bg-white text-center inline-flex justify-center items-center shadow-primary group">
      <Social.Icon className="group-hover:opacity-50 transition-opacity ease-out duration-150" />
    </a>
  );
}

export default SocialMediaLink;