import { motion } from 'motion/react'
import { profile } from '../../data/resume'

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f]/60 py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 sm:flex-row sm:items-center sm:px-8"
      >
        <p className="font-mono text-xs text-white/40">
          © {new Date().getFullYear()} · {profile.name}
        </p>
        <p className="font-mono text-xs text-white/40">
          Built with React 19, Motion & Tailwind CSS v4
        </p>
        <p className="font-mono text-xs text-white/40">
          Made in Washington, DC
        </p>
      </motion.div>
    </footer>
  )
}
