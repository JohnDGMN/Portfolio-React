import { motion, useScroll, useTransform } from 'motion/react'

export function BackgroundFx() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />
      {/* Blobs */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute -top-32 -left-32 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,#c084fc_0%,transparent_60%)] opacity-30 blur-3xl blob"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,#7dd3fc_0%,transparent_60%)] opacity-20 blur-3xl blob blob-delay"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,#f0abfc_0%,transparent_60%)] opacity-15 blur-3xl blob blob-delay-2"
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0a0a0f_90%)]" />
    </div>
  )
}
