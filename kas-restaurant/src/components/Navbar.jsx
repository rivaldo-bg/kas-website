import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark/90 backdrop-blur border-b border-gold/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
             <img src="/logo.png" alt="KAS Logo" className="h-14 w-auto object-contain" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-sm tracking-wider uppercase transition hover:text-gold ${
                  pathname === link.path ? 'text-gold' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gold text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col bg-dark border-t border-gold/20 px-6 py-4 gap-4">
          {links.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setOpen(false)}
                className={`text-sm tracking-wider uppercase transition hover:text-gold ${
                  pathname === link.path ? 'text-gold' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}