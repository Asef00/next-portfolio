import Link from 'next/link'

interface SeeMoreLinkProps {
  href?: string
  className?: string
}

export default function SeeMoreLink({
  className = '',
  href,
}: SeeMoreLinkProps) {
  return (
    <Link
      href={href || '/'}
      className={`inline-block mt-8 text-orange-500 hover:text-orange-600 transition-colors ${className}`}
    >
      See more
    </Link>
  )
}
