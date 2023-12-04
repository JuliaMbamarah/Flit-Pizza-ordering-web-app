import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/nav';
import Footer from '@/components/footer';
import React, { ReactNode } from 'react'; // Import React and ReactNode

interface LayoutProps {
  children: ReactNode; // Define children prop type
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
    }
