import Link from 'next/link'
import { PiCopyrightDuotone } from 'react-icons/pi'

const Footer = () => {
  return (
    <div className="w-full py-8 gap-4 md:h-16 flex items-center flex-col md:flex-row justify-between px-4 lg:px-8">
      <div className="flex gap-4 md:gap-1 flex-col md:flex-row items-center text-sm">
        <div className="flex items-center gap-1 text-text">
          <p>2024 - {new Date().getFullYear()}</p>
          <PiCopyrightDuotone />
        </div>
        <p>Internship Portal v0.1.0</p>
      </div>
      <Link href="/" className="text-text text-sm hover:text-primary">
        Privacy Policy
      </Link>
    </div>
  )
}

export default Footer
