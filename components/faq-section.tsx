"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useInView } from "react-intersection-observer"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const faqs = [
    {
      question: "What is CodStak?",
      answer:
        "CodStak is an isolated environment designed to help you practice and improve your front-end development skills. It provides a variety of challenges ranging from beginner to advanced levels, covering HTML, CSS, JavaScript, React, and more.",
    },
    {
      question: "Is CodStak free to use?",
      answer:
        "Yes, CodStak offers a free tier with access to a wide range of challenges. We also offer premium plans with additional features and challenges for those who want to take their learning to the next level.",
    },
    {
      question: "How do I get started with CodStak?",
      answer:
        "Getting started is easy! Simply create an account, choose a challenge that interests you, and start coding. Our platform provides real-time feedback and guidance to help you learn and improve.",
    },
    {
      question: "Can I use CodStak to prepare for job interviews?",
      answer:
        "CodStak offers a variety of challenges that are commonly asked in front-end developer interviews. Practicing these challenges will help you build confidence and improve your problem-solving skills.",
    },
    {
      question: "Do I need to install anything to use CodStak?",
      answer:
        "No, CodStak runs entirely in your browser. You don't need to install any software or tools to get started. Just sign up and start coding!",
    },
    {
      question: "Can I share my solutions with others?",
      answer:
        "Yes, you can share your solutions with the CodStak community. This is a great way to get feedback, learn from others, and showcase your skills.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Find answers to common questions about CodStak</p>
        </div>

        <div ref={ref} className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item border rounded-lg overflow-hidden ${openIndex === index ? "open" : ""}`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`,
              }}
            >
              <button
                className="flex items-center justify-between w-full p-6 text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              <div
                className="faq-answer px-6 pb-6"
                style={{
                  maxHeight: openIndex === index ? "500px" : "0",
                }}
              >
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

