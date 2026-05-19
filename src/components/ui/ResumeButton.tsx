import { motion } from 'motion/react'
import { Download } from 'lucide-react'
//JohnNewResume.docx
export const RESUME_URL = '/John-Oliver-Resume.pdf'
export const RESUME_FILENAME = 'John-Oliver-Resume.pdf'

type Props = {
  variant?: 'primary' | 'compact' | 'mobile'
  className?: string
}

export function ResumeButton({ variant = 'primary', className = '' }: Props) {
  const commonProps = {
    href: RESUME_URL,
    download: RESUME_FILENAME,
    'data-cursor': 'hover',
  }

  if (variant === 'compact') {
    return (
      <a
        {...commonProps}
        className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/15 px-5 py-2 font-mono text-xs uppercase tracking-[0.18em] text-white transition-colors hover:border-[#c084fc] ${className}`}
      >
        <Download
          size={12}
          className="relative z-10 transition-transform group-hover:translate-y-0.5"
        />
        <span className="relative z-10">Résumé</span>
        <span className="relative z-10 inline-block h-1.5 w-1.5 rounded-full bg-[#c084fc] shadow-[0_0_8px_#c084fc]" />
        <span className="absolute inset-0 -z-0 translate-y-full bg-[#c084fc]/15 transition-transform duration-300 group-hover:translate-y-0" />
      </a>
    )
  }

  if (variant === 'mobile') {
    return (
      <a
        {...commonProps}
        className={`group inline-flex items-center gap-3 rounded-full border border-[#c084fc]/40 bg-[#c084fc]/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-white ${className}`}
      >
        <Download
          size={14}
          className="transition-transform group-hover:translate-y-0.5"
        />
        Download résumé
      </a>
    )
  }

  // primary
  return (
    <motion.a
      {...commonProps}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.97 }}
      className={`group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-full border border-[#c084fc]/50 bg-[#c084fc]/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-shadow hover:shadow-[0_0_40px_rgba(192,132,252,0.45)] ${className}`}
    >
      <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#c084fc]/0 via-[#c084fc]/30 to-[#c084fc]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <Download
        size={16}
        className="transition-transform duration-300 group-hover:translate-y-0.5"
      />
      Download résumé
      <span className="grid h-5 w-5 place-items-center rounded-full bg-white/10 font-mono text-[10px] uppercase">
        DOCX
      </span>
    </motion.a>
  )
}
