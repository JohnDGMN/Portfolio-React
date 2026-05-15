import { motion } from 'motion/react'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { contact, profile } from '../../data/resume'
import { SectionLabel } from '../ui/SectionLabel'
import { MagneticButton } from '../ui/MagneticButton'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import type { ContactItem } from '../../types/resume'

type IconComp = (props: { size?: number; className?: string }) => React.ReactElement

const ICONS: Record<ContactItem['icon'], IconComp> = {
  mail: Mail as unknown as IconComp,
  phone: Phone as unknown as IconComp,
  pin: MapPin as unknown as IconComp,
  github: GithubIcon,
  linkedin: LinkedinIcon,
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36"
    >
      <SectionLabel index="06" label="Contact" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-8 font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] text-white"
      >
        Let&apos;s build <span className="italic text-[#c084fc]">something</span>
        <br />
        <span className="italic text-white/40">that ships.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 max-w-xl text-lg text-white/60"
      >
        I&apos;m open to engineering roles, contract work, and research
        collaborations across full-stack, machine learning, and security.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10"
      >
        <MagneticButton
          href={`mailto:${contact[0].value}`}
          className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-medium text-black transition-all hover:shadow-[0_0_50px_rgba(192,132,252,0.6)]"
          strength={0.4}
        >
          <Mail size={18} />
          {contact[0].value}
          <span className="grid h-7 w-7 place-items-center rounded-full bg-black/10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight size={14} />
          </span>
        </MagneticButton>
      </motion.div>

      <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {contact.map((item, i) => {
          const Icon = ICONS[item.icon]
          return (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: 0.4 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm transition-colors hover:border-[#c084fc]/50 hover:bg-[#c084fc]/[0.05]"
              data-cursor="hover"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-[#c084fc]">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm text-white">{item.value}</p>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c084fc]"
              />
            </motion.a>
          )
        })}
      </div>

      {/* Signature */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-10 sm:flex-row sm:items-center"
      >
        <p className="font-serif text-2xl italic text-white/60">
          — {profile.name}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
          Crafted with care in {new Date().getFullYear()}
        </p>
      </motion.div>
    </section>
  )
}
