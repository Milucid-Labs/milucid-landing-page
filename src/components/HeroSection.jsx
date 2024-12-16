'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

// Generate random positions for dots
const generateDots = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 400 - 200,
    y: Math.random() * 400 - 200,
  }))
}

export function HeroSection() {
  const dots = generateDots(12)

  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      {/* Use flex column on mobile, row on desktop */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Advanced Shopify App Development
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            At Milucid, we build powerful, user-friendly applications that transform e-commerce businesses - specializing in custom Shopify apps and solutions.
          </p>
        </FadeIn>

        {/* Logo container */}
        <div className="mt-16 flex justify-center lg:mt-0 lg:ml-8">
          <motion.div
            className="relative flex items-center justify-center w-60 h-60 lg:w-72 lg:h-72 rounded-full bg-[#0A0A0A]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1,
              delay: 1.2
            }}
          >
            {dots.map((dot) => (
              <motion.div
                key={dot.id}
                className="absolute w-3 h-3 rounded-full bg-[#0A0A0A]"
                initial={{
                  x: dot.x,
                  y: dot.y,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: dot.id * 0.1,
                }}
              />
            ))}
            <motion.span
              className="text-[8.5rem] font-bold text-white"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.5,
                duration: 0.5,
                ease: "easeOut"
              }}
            >
              m
            </motion.span>
          </motion.div>
        </div>
      </div>
    </Container>
  )
}