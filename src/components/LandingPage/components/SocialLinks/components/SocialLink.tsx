import React from 'react';

interface SocialLinkProps {
  href: string;
  label: string;
}

export default function SocialLink({ href, label }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white/60 hover:text-white/90 transition-colors hover:scale-105 transform duration-200"
    >
      [{label}]
    </a>
  );
}