import { motion } from 'motion/react'
import { splitChar, staggerContainer } from '../../utils/animations'

type Props = {
  text: string
  className?: string
  charClassName?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function AnimatedText({
  text,
  className = '',
  charClassName = '',
  delay = 0,
  as = 'span',
}: Props) {
  const words = text.split(' ')

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        ...staggerContainer,
        show: {
          transition: { staggerChildren: 0.025, delayChildren: delay },
        },
      }}
      style={{ display: 'inline-block', perspective: 800 }}
      role={as === 'span' ? undefined : 'heading'}
    >
      {words.map((word, wi) => (
        <span
          key={wi}
          style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.28em' }}
        >
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              variants={splitChar}
              className={charClassName}
              style={{ display: 'inline-block', transformOrigin: '50% 100%' }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  )
}
