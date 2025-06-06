'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AdminNavbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const isActive = (path: string) => {
    if (path === '/admin') {
      // For the dashboard, only match the exact path
      return pathname === '/admin'
    }
    // For other items, match the path or its subpaths
    return pathname.startsWith(`${path}/`) || pathname === path
  }

  const navItems = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Sections', path: '/admin/sections' },
    { name: 'Portfolio', path: '/admin/portfolio' },
    { name: 'Messages', path: '/admin/messages', isPro: true },
    { name: 'Settings', path: '/admin/settings', isPro: true },
  ]

  async function handleLogout() {
    setIsLoggingOut(true)
    try {
      await signOut({ redirect: false }).finally(() => {
        router.push('/login')
      })
      setIsLoggingOut(false)
    } catch (error) {
      console.error('Error during logout:', error)
      setIsLoggingOut(false)
    }
  }

  return (
    <nav className="bg-gray-900 border-b border-gray-800 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/admin" className="flex items-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#F97316" />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-orange-500 font-bold text-xl">
                  Admin Panel
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium ${
                    isActive(item.path)
                      ? 'border-orange-500 text-white'
                      : 'border-transparent text-gray-300 hover:border-gray-700 hover:text-white'
                  }`}
                >
                  {item.name}
                  {item.isPro && (
                    <span className="ml-2 bg-orange-500 text-xs px-1.5 py-0.5 rounded-full text-white">
                      PRO
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <Link
              href="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              target="_blank"
            >
              View Site
            </Link>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="ml-4 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(item.path)
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {item.name}
              {item.isPro && (
                <span className="ml-2 bg-orange-500 text-xs px-1.5 py-0.5 rounded-full text-white">
                  PRO
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
