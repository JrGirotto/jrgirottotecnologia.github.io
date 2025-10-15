'use client'
import { useEffect, useRef } from 'react'

const HERO_VIDEO_SRC = '/JRGIROTTO.mp4'
const HERO_VIDEO_POSTER = '/jrgirotto_tecnologia.png'

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      return
    }

    let rafId: number | null = null

    const tryPlay = () => {
      if (!video.paused) {
        return
      }
      const playPromise = video.play()
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(() => {
          // Autoplay might still require user interaction in some browsers.
        })
      }
    }

    const ensurePlayback = () => {
      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        tryPlay()
        return
      }
      if (rafId !== null) {
        return
      }
      const tick = () => {
        if (!video) {
          return
        }
        if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
          tryPlay()
          rafId = null
          return
        }
        rafId = window.requestAnimationFrame(tick)
      }
      rafId = window.requestAnimationFrame(tick)
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        tryPlay()
      } else {
        video.pause()
      }
    }

    const handleUserGesture = () => {
      tryPlay()
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            tryPlay()
          } else if (entry.target === video && !entry.isIntersecting) {
            video.pause()
          }
        }
      },
      { threshold: 0.15 }
    )

    video.defaultMuted = true
    video.muted = true
    video.playsInline = true
    observer.observe(video)

    video.addEventListener('loadedmetadata', ensurePlayback)
    video.addEventListener('canplay', ensurePlayback)
    video.addEventListener('pointerdown', handleUserGesture)
    video.addEventListener('touchstart', handleUserGesture, { passive: true })
    video.addEventListener('keypress', handleUserGesture)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('focus', tryPlay)

    ensurePlayback()
    tryPlay()

    return () => {
      observer.disconnect()
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId)
      }
      video.removeEventListener('loadedmetadata', ensurePlayback)
      video.removeEventListener('canplay', ensurePlayback)
      video.removeEventListener('pointerdown', handleUserGesture)
      video.removeEventListener('touchstart', handleUserGesture)
      video.removeEventListener('keypress', handleUserGesture)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('focus', tryPlay)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-cover"
      src={HERO_VIDEO_SRC}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      controls={false}
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      poster={HERO_VIDEO_POSTER}
      aria-label="Video institucional JR Girotto Tecnologia"
    >
      <source src={HERO_VIDEO_SRC} type="video/mp4" />
      Seu navegador nao suporta videos HTML5.
    </video>
  )
}
