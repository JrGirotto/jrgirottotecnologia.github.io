'use client'
import { useEffect, useRef } from 'react'
import { HERO_VIDEO } from '@/lib/heroVideo'

type HeroVideoProps = {
  className?: string
}

export function HeroVideo({ className }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      return
    }
    video.defaultMuted = true
    video.muted = true
    video.playsInline = true
    const playPromise = video.play()
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.catch(() => {
        // Autoplay may be blocked until user interaction; leave video paused.
      })
    }
  }, [])

  const combinedClassName = ['h-full w-full object-cover', className].filter(Boolean).join(' ')

  return (
    <video
      ref={videoRef}
      className={combinedClassName}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      controls={false}
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      poster={HERO_VIDEO.poster}
      aria-label="Video institucional JR Girotto Tecnologia"
    >
      {HERO_VIDEO.sources.map(({ src, type }) => (
        <source key={src} src={src} type={type} />
      ))}
      Seu navegador nao suporta videos HTML5.
    </video>
  )
}
