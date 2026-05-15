import { motion } from 'motion/react'

type Props = {
  index: string
  label: string
}

export function SectionLabel({ index, label }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-[#c084fc]/80"
    >
      <span className="inline-block h-px w-8 bg-[#c084fc]/50" />
      <span>{index}</span>
      <span className="text-white/40">/</span>
      <span className="text-white/60">{label}</span>
    </motion.div>
  )
}
