import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-blue-500 text-white">
      <Link href="/">
        <a className="font-bold text-2xl">French Heritage Preservation</a>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/mission">
              <a>Mission</a>
            </Link>
          </li>
          <li>
            <Link href="/campaign">
              <a>Campaign</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}