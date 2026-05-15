import { useState } from 'react'
import { motion, useMotionValue, useTransform } from 'motion/react'
import { Shield, Smartphone, BarChart3, ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/resume'
import type { Project } from '../../types/resume'
import { SectionLabel } from '../ui/SectionLabel'

const ICONS = {
  security: Shield,
  mobile: Smartphone,
  data: BarChart3,
}

const TINT: Record<Project['category'], string> = {
  security: '#c084fc',
  mobile: '#7dd3fc',
  data: '#f0abfc',
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36"
    >
      <SectionLabel index="03" label="Projects" />

      <div className="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-5xl leading-tight text-white sm:text-6xl"
        >
          Selected <span className="italic text-[#c084fc]">work</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md font-mono text-xs uppercase tracking-[0.18em] text-white/40"
        >
          From DHS compliance frameworks to encrypted Android apps & NBA
          analytics.
        </motion.p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = ICONS[project.category]
  const tint = TINT[project.category]
  const [hover, setHover] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-150, 150], [10, -10])
  const rotateY = useTransform(x, [-150, 150], [-10, 10])

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
    setHover(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={onLeave}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-7 backdrop-blur-sm"
      data-cursor="hover"
    >
      {/* Glow on hover */}
      <motion.div
        animate={{ opacity: hover ? 1 : 0 }}
        className="pointer-events-none absolute -top-32 -left-20 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity"
        style={{ background: tint }}
      />

      <div className="relative flex items-start justify-between" style={{ transform: 'translateZ(40px)' }}>
        <motion.div
          whileHover={{ rotate: 12, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 280, damping: 18 }}
          className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]"
          style={{ color: tint }}
        >
          <Icon size={20} />
        </motion.div>
        <span
          className="rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wider uppercase"
          style={{
            borderColor: `${tint}50`,
            color: tint,
            background: `${tint}10`,
          }}
        >
          {project.highlight}
        </span>
      </div>

      <div className="relative mt-6" style={{ transform: 'translateZ(30px)' }}>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
          {project.subtitle}
        </p>
        <h3 className="mt-2 font-serif text-3xl leading-tight text-white">
          {project.title}
        </h3>
      </div>

      <p
        className="relative mt-4 text-sm leading-relaxed text-white/60"
        style={{ transform: 'translateZ(20px)' }}
      >
        {project.description}
      </p>

      <div
        className="relative mt-6 flex flex-wrap gap-1.5"
        style={{ transform: 'translateZ(20px)' }}
      >
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-0.5 font-mono text-[10px] text-white/60"
          >
            {s}
          </span>
        ))}
      </div>

      <motion.div
        animate={{ x: hover ? 0 : -6, opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute right-6 bottom-6 flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.22em]"
        style={{ color: tint, transform: 'translateZ(40px)' }}
      >
        View
        <ArrowUpRight size={12} />
      </motion.div>
    </motion.div>
  )
}
