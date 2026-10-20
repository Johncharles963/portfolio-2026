import Logo from "./logo.png"
import { Navlinks } from './Navlinks'
import { Link } from 'react-router'

export const NavBar = () => {
    return (
        <header className="sticky top-0 z-40 flex w-full flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-slate-950/95 px-5 py-3 text-slate-100 shadow-lg shadow-slate-950/10 backdrop-blur-md">
            <Link to="/" aria-label="John Charles home" className="shrink-0 rounded-lg">
                <img src={Logo} alt="" aria-hidden="true" className="hidden w-[200px] sm:block" />
                <span className="text-sm font-semibold tracking-wide sm:hidden">JOHN CHARLES</span>
            </Link>
            <Navlinks />
        </header>
    )
}