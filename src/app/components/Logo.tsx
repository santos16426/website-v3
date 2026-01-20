import { MouseEventHandler } from 'react'
import Link from 'next/link'
interface LogoProps {
  onClick: MouseEventHandler
}
const Logo: React.FC<LogoProps> = ({ onClick }) => (
  <Link href="/" onClick={onClick}>
    <div className="flex items-center text-[30px] tracking-tight font-bold cursor-pointer">
      <span className="text-orange-500">&lt;</span>
      <span className="text-black-500 hidden sm:flex">Billy</span>
      <span className="text-orange-500">/&gt;</span>
    </div>
  </Link>
)

export default Logo
