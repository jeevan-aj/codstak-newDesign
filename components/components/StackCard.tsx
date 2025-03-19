"use client"

import { useEffect, useRef, useState } from "react";
import Card from "./card/Card";
import {cardsData} from '../data/data'
import Lenis from "lenis";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import style from './StackCard.module.css'




const StackCard = () => {
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top", // Start when container reaches top of viewport
      end: "bottom top", // End when the bottom of container reaches the top
      scrub: 1, // Smooth transition
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    return () => scrollTrigger.kill(); // Cleanup on unmount
  }, []);


  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);

  return (
    <section className="py-20 md:py-32 bg-muted/30">

    <div className={style.container}>
      <div className={`${style.stackCardContainer}`} ref={containerRef}>
        {cardsData?.map((cur, idx) => {
          const targetScale = 1 - (cardsData.length - idx) * 0.05;
          return (
            <Card
          
              key={idx}
              i={idx}
              colour={cur?.color}
              image={cur?.src}
              targetScale={targetScale}
              progress={scrollProgress}

            />
          );
        })}
      </div>
    </div>
          
    </section>
  );
};

export default StackCard;
