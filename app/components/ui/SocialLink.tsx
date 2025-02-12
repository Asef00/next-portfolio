import { ReactNode } from 'react'

interface SocialLinkProps {
  href: string
  icon: ReactNode
  label: string
}

export default function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
