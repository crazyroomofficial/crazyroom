import React from 'react';
import SocialLink from './components/SocialLink';
import Separator from './components/Separator';
import { SOCIAL_LINKS } from './constants';

export default function SocialLinks() {
  return (
    <div className="space-y-4">
      <Separator />
      
      <div className="flex items-center justify-center gap-8 text-sm tracking-wider">
        <SocialLink href={SOCIAL_LINKS.TWITTER} label="TWITTER" />
        <SocialLink href={SOCIAL_LINKS.GITHUB} label="GITHUB" />
        <span className="text-white/60">CA: TO BE ANNOUNCED ON TWITTER</span>
      </div>

      <Separator />
    </div>
  );
}