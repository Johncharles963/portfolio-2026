import Logo from "./logo.png"
import { Navlinks } from './Navlinks'
import { Link } from 'react-router'

export const NavBar = () => {
    return (
        <header className="flex flex-wrap justify-between gap-2 px-5 py-2 w-full items-center bg-slate-900 text-slate-100">
            <Link to="/" aria-label="John Charles home" className="shrink-0">
                <img src={Logo} alt="" aria-hidden="true" className="hidden w-[200px] sm:block" />
                <span className="sm:hidden">John Charles</span>
            </Link>
            <Navlinks />
        </header>
    )
}