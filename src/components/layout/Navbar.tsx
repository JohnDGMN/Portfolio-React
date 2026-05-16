import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { profile } from '../../data/resume'
import { ResumeButton } from '../ui/ResumeButton'

const NAV = [
  { id: 'hero', label: 'Intro', n: '00' },
  { id: 'about', label: 'About', n: '01' },
  { id: 'experience', label: 'Experience', n: '02' },
  { id: 'projects', label: 'Projects', n: '03' },
  { id: 'skills', label: 'Skills', n: '04' },
  { id: 'education', label: 'Education', n: '05' },
  { id: 'contact', label: 'Contact', n: '06' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/5 bg-[#0a0a0f]/70 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
          <button
            onClick={() => handleNav('hero')}
            className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-white"
            data-cursor="hover"
          >
            <motion.span
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid h-9 w-9 place-items-center rounded-full border border-[#c084fc]/40 bg-[#c084fc]/10 text-[#c084fc]"
            >
              {profile.initials}
            </motion.span>
            <span className="hidden text-white/80 transition-colors group-hover:text-white sm:inline">
              {profile.shortName}
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="group relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white"
                data-cursor="hover"
              >
                <span className="mr-1.5 text-[10px] text-white/30">{item.n}</span>
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full border border-[#c084fc]/40 bg-[#c084fc]/10"
                    transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ResumeButton variant="compact" />
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col items-start justify-center gap-2 px-8"
            >
              {NAV.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.06 * i, duration: 0.5 }}
                  onClick={() => handleNav(item.id)}
                  className="group flex items-baseline gap-3 text-left"
                >
                  <span className="font-mono text-xs text-[#c084fc]/70">{item.n}</span>
                  <span className="font-serif text-4xl text-white transition-colors group-hover:text-[#c084fc] sm:text-5xl">
                    {item.label}
                  </span>
                </motion.button>
              ))}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.06 * NAV.length, duration: 0.5 }}
                onClick={() => setOpen(false)}
                className="mt-6"
              >
                <ResumeButton variant="mobile" />
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
