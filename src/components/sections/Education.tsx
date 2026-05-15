import { motion } from 'motion/react'
import { GraduationCap, MapPin, Trophy } from 'lucide-react'
import { education } from '../../data/resume'
import { SectionLabel } from '../ui/SectionLabel'

export function Education() {
  return (
    <section
      id="education"
      className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36"
    >
      <SectionLabel index="05" label="Education" />

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-5xl leading-tight text-white sm:text-6xl"
        >
          Where it <span className="italic text-[#c084fc]">started</span>.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-8 backdrop-blur-sm sm:p-10"
        >
          {/* Decorative number */}
          <div className="pointer-events-none absolute -top-10 -right-4 font-serif text-[14rem] leading-none italic text-white/[0.03] select-none">
            3.75
          </div>

          <div className="flex items-center gap-3">
            <motion.div
              whileInView={{ rotate: [0, 360] }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="grid h-12 w-12 place-items-center rounded-2xl border border-[#c084fc]/40 bg-[#c084fc]/10 text-[#c084fc]"
            >
              <GraduationCap size={22} />
            </motion.div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                {education.status}
              </p>
              <h3 className="text-xl font-medium text-white sm:text-2xl">
                {education.degree}
              </h3>
            </div>
          </div>

          <p className="relative mt-6 font-serif text-3xl text-white sm:text-4xl">
            {education.school}
          </p>

          <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
              <MapPin size={14} className="text-[#7dd3fc]" />
              <span className="font-mono text-xs text-white/70">
                {education.location}
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
              <Trophy size={14} className="text-[#fef08a]" />
              <span className="font-mono text-xs text-white/70">
                GPA · <span className="text-white">{education.gpa}</span>
                <span className="text-white/30"> / 4.0</span>
              </span>
            </div>
          </div>

          {/* Progress bar for GPA */}
          <div className="relative mt-6">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              <span>Academic standing</span>
              <span>{((3.75 / 4) * 100).toFixed(1)}%</span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(3.75 / 4) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-[#c084fc] via-[#7dd3fc] to-[#f0abfc] shadow-[0_0_16px_rgba(192,132,252,0.6)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
