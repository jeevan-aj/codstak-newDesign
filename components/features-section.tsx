"use client";

import { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function FeaturesSection() {
  const [activeImage, setActiveImage] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const images = [
    {
      src: "/image1.png?height=600&width=800",
      alt: "Code editor interface",
      title: "Interactive Code Editor",
      description:
        "Write, test, and debug your code in a fully-featured development environment",
    },
    {
      src: "/image2.png?height=600&width=800",
      alt: "Real-time feedback",
      title: "Real-time Feedback",
      description:
        "Get instant feedback on your code with helpful error messages and suggestions",
    },
    {
      src: "/image3.png?height=600&width=800",
      alt: "Challenge completion",
      title: "Progressive Learning Path",
      description:
        "Start with beginner challenges and work your way up to advanced concepts",
    },
  ];

  // useEffect(() => {
  //   if (inView) {
  //     const interval = setInterval(() => {
  //       setActiveImage((prev) => (prev + 1) % images.length)
  //     }, 3000)
  //     return () => clearInterval(interval)
  //   }
  // }, [inView, images.length])

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Supercharge Your Front-End Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform provides everything you need to become a front-end
            master
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeImage === index
                      ? "bg-primary/10 border border-primary/20"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-muted-foreground">{image.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="stacked-images-container relative h-[400px] md:h-[500px]">
            {images.map((image, index) => {
              const isActive = activeImage === index;
              return (
                <div
                  key={index}
                  className={`stacked-image absolute inset-0 ${
                    inView ? "visible" : "hidden"
                  }`}
                  style={{
                    zIndex: isActive
                      ? images.length
                      : images.length - index - 1,
                    transitionDelay: ` 0ms`,
                    transform:
                      activeImage === index
                        ? "translateY(0) rotateX(0)"
                        : "translateY(40px) rotateX(10deg)",
                  }}
                >
                  <div className="relative h-full w-full rounded-xl overflow-hidden border shadow-lg">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
