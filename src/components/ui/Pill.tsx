import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  accent?: string
}

export function Pill({ children, delay = 0, accent = '#c084fc' }: Props) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.7, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        scale: 1.05,
        backgroundColor: `${accent}1F`,
        borderColor: `${accent}80`,
      }}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] tracking-wide text-white/70 backdrop-blur-sm"
      data-cursor="hover"
    >
      <span
        className="h-1 w-1 rounded-full"
        style={{ background: accent }}
      />
      {children}
    </motion.span>
  )
}
