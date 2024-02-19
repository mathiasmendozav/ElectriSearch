import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Navbar from './navbar'; 
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-inherit">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway&display=swap" rel="stylesheet" />
        <script async
          src="https://maps.googleapis.com/maps/api/js?key=loading=async&callback=initMap">
        </script>
      </Head>
      <Navbar />
      <div className="flex flex-col w-full flex-1">
        <main className="mt-[65px] mx-auto w-full">
          {children}
        </main>
      </div>
      
    </div>
  );
};

export default Layout;