import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { useIsDesktop } from '../../hooks/useIsDesktop'

export function Cursor() {
  const isDesktop = useIsDesktop()
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const springX = useSpring(x, { damping: 25, stiffness: 250, mass: 0.5 })
  const springY = useSpring(y, { damping: 25, stiffness: 250, mass: 0.5 })

  useEffect(() => {
    if (!isDesktop) {
      document.body.classList.remove('custom-cursor')
      return
    }
    document.body.classList.add('custom-cursor')

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (target?.closest('a, button, [data-cursor="hover"]')) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.body.classList.remove('custom-cursor')
    }
  }, [isDesktop, x, y])

  if (!isDesktop) return null

  return (
    <>
      <motion.div
        style={{ x: springX, y: springY }}
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: hovering ? 2.4 : 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 220 }}
      >
        <div className="h-2 w-2 rounded-full bg-[#c084fc] mix-blend-difference shadow-[0_0_24px_rgba(192,132,252,0.9)]" />
      </motion.div>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed top-0 left-0 z-[9997] -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: hovering ? 1.5 : 1, opacity: hovering ? 0.15 : 0.4 }}
      >
        <div className="h-10 w-10 rounded-full border border-[#c084fc]/40" />
      </motion.div>
    </>
  )
}
