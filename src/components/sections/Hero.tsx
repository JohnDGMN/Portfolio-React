import { useEffect, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'motion/react'
import { ArrowDown, Sparkles } from 'lucide-react'
import { profile } from '../../data/resume'
import { MagneticButton } from '../ui/MagneticButton'

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { damping: 40, stiffness: 80 })
  const sy = useSpring(my, { damping: 40, stiffness: 80 })

  const rotateX = useTransform(sy, [-300, 300], [12, -12])
  const rotateY = useTransform(sx, [-300, 300], [-12, 12])

  useEffect(() => {
    const t = setInterval(
      () => setRoleIdx((i) => (i + 1) % profile.roles.length),
      2400,
    )
    return () => clearInterval(t)
  }, [])

  const handleMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    mx.set(e.clientX - rect.left - rect.width / 2)
    my.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-28 pb-16 sm:px-8"
      onMouseMove={handleMove}
    >
      {/* Spotlight */}
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-[55rem] w-[55rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(192,132,252,0.18)_0%,transparent_55%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        {/* Left: name + role */}
        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 1500 }}
          className="flex flex-col gap-7"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-md"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"
            />
            Open to engineering roles · {profile.location}
          </motion.div>

          <h1 className="font-sans text-[clamp(2.6rem,8vw,7.5rem)] leading-[0.95] font-medium tracking-tight text-white">
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              John Oliver
            </motion.span>
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="block bg-gradient-to-br from-[#c084fc] via-[#f0abfc] to-[#7dd3fc] bg-clip-text font-serif italic text-transparent"
            >
              De Guzman.
            </motion.span>
          </h1>

          <div className="flex flex-col gap-2 font-mono text-sm uppercase tracking-[0.22em] text-white/60 sm:flex-row sm:items-center sm:gap-4">
            <span className="text-white/40">[ Role ]</span>
            <span className="relative inline-flex h-7 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -28, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="text-white"
                >
                  {profile.roles[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-xl text-base text-white/65 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center gap-3"
          >
            <MagneticButton
              href="#projects"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:shadow-[0_0_30px_rgba(192,132,252,0.5)]"
            >
              <Sparkles size={16} />
              See my work
              <span className="grid h-5 w-5 place-items-center rounded-full bg-black/10 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-white transition-colors hover:border-[#c084fc] hover:text-[#c084fc]"
            >
              Get in touch
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 1.2 } },
            }}
            className="mt-4 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6 sm:grid-cols-4"
          >
            {profile.stats.map((s) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="flex flex-col gap-0.5"
              >
                <span className="font-serif text-3xl text-white">{s.value}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: orbiting tech ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden aspect-square items-center justify-center lg:flex"
        >
          <OrbitRing />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white"
      >
        <span className="flex flex-col items-center gap-2">
          Scroll
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} />
          </motion.span>
        </span>
      </motion.a>
    </section>
  )
}

const RING_TECH = [
  'Python',
  'React',
  'TypeScript',
  'Java',
  'SQL',
  'Keras',
  'Node.js',
  'Firebase',
  'C++',
  'NIST',
]

function OrbitRing() {
  return (
    <div className="relative h-[28rem] w-[28rem]">
      {/* Rotating rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-white/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-8 rounded-full border border-dashed border-[#c084fc]/25"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-16 rounded-full border border-white/10"
      />

      {/* Orbiting chips */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      >
        {RING_TECH.map((label, i) => {
          const angle = (i / RING_TECH.length) * 2 * Math.PI
          const r = 13.5
          const x = Math.cos(angle) * r
          const y = Math.sin(angle) * r
          return (
            <motion.div
              key={label}
              style={{
                left: `calc(50% + ${x}rem)`,
                top: `calc(50% + ${y}rem)`,
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#11111a]/80 px-3 py-1 font-mono text-[10px] tracking-wider text-white/70 backdrop-blur-md"
            >
              {label}
            </motion.div>
          )
        })}
      </motion.div>

      {/* Core orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            boxShadow: [
              '0 0 50px rgba(192,132,252,0.3)',
              '0 0 100px rgba(192,132,252,0.55)',
              '0 0 50px rgba(192,132,252,0.3)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative grid h-44 w-44 place-items-center rounded-full border border-white/15 bg-gradient-to-br from-[#1a1a26] via-[#11111a] to-[#0a0a0f]"
        >
          <span className="font-serif text-6xl italic text-white">JD</span>
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full border border-[#c084fc]/60"
          />
          <motion.span
            animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1 }}
            className="absolute inset-0 rounded-full border border-[#7dd3fc]/40"
          />
        </motion.div>
      </div>
    </div>
  )
}
