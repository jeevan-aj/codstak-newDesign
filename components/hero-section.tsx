"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Code, FileCode,  Terminal, Zap } from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[120vh] overflow-hidden  py-20 md:py-32  ">
      <div className="absolute top-0  h-full w-full bg-[radial-gradient(#969799,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="container relative ">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-6 flex items-center justify-center">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
            
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary  to-black">
            Master Front-End Development
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            An isolated environment to practice, learn, and perfect your
            front-end skills with real-world challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="text-lg px-8 bg-black">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Explore Challenges
            </Button>
          </div>

          <div className="relative w-full max-w-4xl mx-auto">
            <div className="absolute -top-16 -left-16 md:-top-24 md:-left-24 w-32 h-32 md:w-48 md:h-48 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-16 md:-bottom-24 md:-right-24 w-32 h-32 md:w-48 md:h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="relative rounded-xl overflow-hidden border shadow-2xl">
              <Image
                src="/image1.png?height=600&width=1200"
                width={1200}
                height={600}
                alt="CodStak Platform"
                className="w-full h-auto"
                priority
              />
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
              <div className="flex justify-center">
                <div
                  className={`flex items-center gap-8 transition-all duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0 translate-y-10"
                  }`}
                >
                  {[
                    { icon: <Code className="w-8 h-8" />, delay: 0 },
                    { icon: <Terminal className="w-8 h-8" />, delay: 200 },
                    { icon: <FileCode className="w-8 h-8" />, delay: 400 },
                    { icon: <Zap className="w-8 h-8" />, delay: 600 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-background/80 backdrop-blur-sm p-4 rounded-full shadow-lg"
                      style={{
                        transitionDelay: `${item.delay}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(20px)",
                        transition: "opacity 0.5s ease, transform 0.5s ease",
                      }}
                    >
                      {item.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
