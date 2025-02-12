interface SocialLinkProps {
  href: string
  iconName: string
  label: string
}

export default function SocialLink({ href, iconName, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all"
      aria-label={label}
    >
      <i className={`icon-${iconName}`}></i>
    </a>
  )
}
