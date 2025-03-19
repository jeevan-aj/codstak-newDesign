"use client";

import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { UseCasesSection } from "@/components/use-cases-section";
import { FeaturesSection } from "@/components/features-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { useEffect } from "react";
import Lenis from "lenis";
import StackCard from "@/components/components/StackCard";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <StackCard />
      <FaqSection />
      <Footer />
    </main>
  );
}
