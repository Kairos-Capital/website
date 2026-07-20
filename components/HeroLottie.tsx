'use client'

import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useState } from 'react'

interface HeroLottieProps {
  src: string
  className?: string
}

export default function HeroLottie({ src, className }: HeroLottieProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={className}
      style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }}
    >
      <DotLottieReact
        src={src}
        loop
        autoplay
        dotLottieRefCallback={(ref) => {
          if (ref) {
            ref.addEventListener('load', () => setLoaded(true))
          }
        }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
