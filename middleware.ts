import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    // Only handle redirect for login page
    if (req.nextUrl.pathname === '/login') {
      if (req.nextauth.token) {
        return NextResponse.redirect(new URL('/admin/portfolio', req.url))
      }
    }
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to login page without token
        if (req.nextUrl.pathname === '/login') {
          return true
        }
        // Require token for admin routes
        return !!token
      },
    },
  }
)

export const config = {
  matcher: ['/admin/:path*', '/login'],
}
