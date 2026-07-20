import kickstarter from '@/assets/images/kickstarter.png'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'

function CTA() {
  const t = useTranslations('nav')
  const textContainerVariants = {
    rest: {
      width: 0,
      opacity: 0,
      marginLeft: 0
    },
    hover: {
      width: 'auto', // Animate to the content's width
      opacity: 1,
      marginLeft: '0.25rem' // Creates a small gap (like Tailwind's ml-1)
    }
  }

  return (
   <motion.a
  href="https://www.linkedin.com/in/raisulislam101/"
  target="_blank"
  rel="noopener noreferrer"
  title="Connect with me on LinkedIn"
  aria-label="Visit my LinkedIn profile"
  className="flex cursor-pointer flex-row items-center overflow-hidden rounded-lg border border-[#dedede] bg-white px-2 py-1 shadow-work2 transition-colors duration-150 ease-in-out"
  initial="rest"
  whileHover="hover"
  animate="rest"
>
  <Linkedin size={22} className="text-[#0A66C2]" />

  <motion.div
    className="overflow-hidden"
    variants={textContainerVariants}
    transition={{ duration: 0.2, ease: 'easeInOut' }}
  >
    <span className="whitespace-nowrap text-sm text-black">
    LinkedIn
    </span>
  </motion.div>
</motion.a>
  )
}

export default CTA
