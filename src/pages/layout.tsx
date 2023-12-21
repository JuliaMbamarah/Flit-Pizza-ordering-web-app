import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/globals.css";
import NavBar from "@/components/nav";
import Footer from "@/components/footer";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
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
