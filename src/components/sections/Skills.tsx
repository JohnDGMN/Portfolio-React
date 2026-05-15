import { motion } from 'motion/react'
import { skillGroups } from '../../data/resume'
import { SectionLabel } from '../ui/SectionLabel'
import { Pill } from '../ui/Pill'

export function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36"
    >
      <SectionLabel index="04" label="Skills" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-8 font-serif text-5xl leading-tight text-white sm:text-6xl"
      >
        The <span className="italic text-[#c084fc]">tools</span> I reach for.
      </motion.h2>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-sm"
          >
            <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#c084fc]/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="mb-1 flex items-baseline justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                {String(i + 1).padStart(2, '0')}
              </p>
              <span className="font-mono text-[10px] text-white/30">
                {group.items.length}
              </span>
            </div>
            <h3 className="mb-4 font-serif text-2xl text-white">
              {group.label}
            </h3>

            <div className="flex flex-wrap gap-1.5">
              {group.items.map((skill, j) => (
                <Pill key={skill} delay={j * 0.03}>
                  {skill}
                </Pill>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Marquee strip */}
      <div className="relative mt-20 overflow-hidden border-y border-white/10 py-8">
        <div
          className="flex w-max gap-12 marquee-track text-white/30"
          style={{ willChange: 'transform' }}
        >
          {[...Array(2)].flatMap((_, i) =>
            skillGroups
              .flatMap((g) => g.items)
              .map((s, j) => (
                <span
                  key={`${i}-${j}`}
                  className="font-serif text-4xl italic whitespace-nowrap sm:text-6xl"
                >
                  {s}
                  <span className="mx-6 text-[#c084fc]">·</span>
                </span>
              )),
          )}
        </div>
      </div>
    </section>
  )
}
