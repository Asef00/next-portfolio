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
      className="w-10 h-10 text-2xl rounded-full border bg-black text-white flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all"
      aria-label={label}
    >
      <i className={`icon-${iconName}`}></i>
    </a>
  )
}
