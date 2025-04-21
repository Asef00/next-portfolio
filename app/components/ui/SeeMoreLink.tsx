import Link from 'next/link'

interface SeeMoreLinkProps {
  href?: string
  className?: string
  text?: string
}

export default function SeeMoreLink({
  className = '',
  href,
  text = 'See more'
}: SeeMoreLinkProps) {
  return (
    <Link
      href={href || '/portfolio'}
      className={`inline-block mt-8 text-orange-500 hover:text-orange-600 transition-colors ${className}`}
    >
      {text}
    </Link>
  )
}
