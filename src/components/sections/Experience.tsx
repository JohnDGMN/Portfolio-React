import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MapPin, Calendar, Plus } from 'lucide-react'
import { experiences } from '../../data/resume'
import { SectionLabel } from '../ui/SectionLabel'

export function Experience() {
  const [openId, setOpenId] = useState<string | null>(experiences[0]?.id ?? null)

  return (
    <section
      id="experience"
      className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36"
    >
      <SectionLabel index="02" label="Experience" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-8 font-serif text-5xl leading-tight text-white sm:text-6xl"
      >
        A timeline of <span className="italic text-[#c084fc]">building</span>.
      </motion.h2>

      <div className="relative mt-16">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-3 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent sm:left-1/2 sm:-translate-x-px" />

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative grid grid-cols-[24px_1fr] gap-5 sm:gap-12 sm:grid-cols-2 ${
                i % 2 === 0 ? '' : 'sm:[&>*:first-child]:order-2'
              }`}
            >
              {/* Node */}
              <div className="absolute top-6 left-3 z-10 -translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2">
                <motion.div
                  whileInView={{
                    scale: [0, 1.3, 1],
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                  className="relative grid h-5 w-5 place-items-center rounded-full border border-white/20 bg-[#0a0a0f]"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: exp.accent }}
                  />
                  <motion.span
                    animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute inset-0 rounded-full"
                    style={{ background: exp.accent, opacity: 0.3 }}
                  />
                </motion.div>
              </div>

              {/* Date side */}
              <div
                className={`pl-10 sm:pl-0 ${
                  i % 2 === 0 ? 'sm:text-right sm:pr-12' : 'sm:pl-12'
                }`}
              >
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/40">
                  {exp.startDate}
                  <span className="mx-2 text-white/20">→</span>
                  {exp.endDate}
                </p>
                <p
                  className="mt-2 font-serif text-3xl italic sm:text-4xl"
                  style={{ color: exp.accent }}
                >
                  {exp.shortName}
                </p>
                <p className="mt-1 inline-flex items-center gap-1 font-mono text-xs text-white/40">
                  <MapPin size={12} />
                  {exp.location}
                </p>
              </div>

              {/* Card side */}
              <div className={`pl-10 sm:pl-0 ${i % 2 === 0 ? '' : ''}`}>
                <motion.button
                  whileHover={{ y: -3 }}
                  onClick={() =>
                    setOpenId(openId === exp.id ? null : exp.id)
                  }
                  data-cursor="hover"
                  className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-7 text-left backdrop-blur-sm transition-colors hover:border-white/20"
                >
                  <div
                    className="pointer-events-none absolute -top-32 -left-20 h-48 w-48 rounded-full opacity-30 blur-3xl"
                    style={{ background: exp.accent }}
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                        {exp.company}
                      </p>
                      <h3 className="mt-2 text-xl font-medium text-white sm:text-2xl">
                        {exp.role}
                      </h3>
                    </div>
                    <motion.span
                      animate={{ rotate: openId === exp.id ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-white"
                    >
                      <Plus size={16} />
                    </motion.span>
                  </div>

                  <div className="relative mt-4 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <AnimatePresence initial={false}>
                    {openId === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="relative overflow-hidden"
                      >
                        <ul className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
                          {exp.bullets.map((b, bi) => (
                            <motion.li
                              key={bi}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + bi * 0.08 }}
                              className="flex gap-3 text-sm leading-relaxed text-white/65"
                            >
                              <Calendar
                                size={14}
                                className="mt-1 shrink-0"
                                style={{ color: exp.accent }}
                              />
                              <span>{b}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
