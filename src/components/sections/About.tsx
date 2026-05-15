import { motion } from 'motion/react'
import { profile } from '../../data/resume'
import { SectionLabel } from '../ui/SectionLabel'
import { AnimatedText } from '../ui/AnimatedText'

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36"
    >
      <SectionLabel index="01" label="About" />

      <div className="mt-10 grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="md:sticky md:top-32 md:self-start"
        >
          <h2 className="font-serif text-5xl leading-[1.05] text-white sm:text-6xl">
            <AnimatedText text="At the seam of " as="span" />
            <span className="italic text-[#c084fc]">code,</span>{' '}
            <span className="italic text-[#7dd3fc]">data</span>
            <span className="text-white">&nbsp;&amp;&nbsp;</span>
            <span className="italic text-[#f0abfc]">security.</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col gap-7 text-lg leading-relaxed text-white/70"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            {profile.summary}
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            I&apos;m a{' '}
            <span className="text-white">Computer Science graduate</span> from{' '}
            <span className="text-white">Capitol Technology University</span>{' '}
            currently examining AI-related patents at the{' '}
            <span className="text-white">USPTO</span>, after a summer building
            ML data-exploration tooling for{' '}
            <span className="text-white">NASA JPL</span>.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="grid gap-4 pt-4 sm:grid-cols-2"
          >
            {[
              { k: 'Citizenship', v: profile.citizenship },
              { k: 'Based in', v: profile.location },
              { k: 'Focus', v: 'Full-stack · ML · Security' },
              { k: 'Status', v: 'Open to opportunities' },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  {item.k}
                </p>
                <p className="mt-2 text-white">{item.v}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
