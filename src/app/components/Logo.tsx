import { MouseEventHandler } from 'react'
import Link from 'next/link'
interface LogoProps {
  onClick: MouseEventHandler
}
const Logo: React.FC<LogoProps> = ({ onClick }) => (
  <Link href="/" onClick={onClick} aria-label="Go to homepage">
    <div className="flex items-center text-[30px] tracking-tight font-bold cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded">
      <span className="text-orange-500" aria-hidden="true">&lt;</span>
      <span className="text-black-500 hidden sm:flex">Billy</span>
      <span className="text-orange-500" aria-hidden="true">/&gt;</span>
    </div>
  </Link>
)

export default Logo
