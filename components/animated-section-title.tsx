"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimatedSectionTitleProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedSectionTitle({ children, className = "" }: AnimatedSectionTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const title = titleRef.current
    if (!title) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    observer.observe(title)

    return () => {
      if (title) observer.unobserve(title)
    }
  }, [])

  return (
    <h2 ref={titleRef} className={`section-title ${isVisible ? "in-view" : ""} ${className}`}>
      {children}
    </h2>
  )
}
