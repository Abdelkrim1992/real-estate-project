import React from 'react';
import '../styles/index.css';
import Navbar from '@/components/common/Navbar';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: 'Estatix - Modern Real Estate Platform',
    template: 'Estatix - Modern Real Estate Platform | %s',
  },
  description: 'Discover premium properties with Estatix, the modern real estate platform that helps you sell properties faster. Browse smart listings, connect with expert agents, and find your dream home with our fast and efficient property marketplace.',
  keywords: 'real estate, property listings, buy property, sell property, premium properties, real estate agents, property marketplace, smart listings, property search, home buying',
  
  openGraph: {
    type: 'website',
    title: {
      default: 'Estatix - Modern Real Estate Platform',
      template: 'Estatix - Modern Real Estate Platform | %s',
    },
    description: 'Transform your property search experience with Estatix. Browse premium listings, connect with expert agents, and discover your perfect home through our modern, fast, and efficient real estate platform.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}