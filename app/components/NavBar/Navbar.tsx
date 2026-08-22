import Logo from "./logo.png"
import { Navlinks } from './Navlinks'
import { Link } from 'react-router'

export const NavBar = () => {
    return (
        <div className="flex justify-between px-5 py-2 w-full items-center bg-slate-900 text-slate-100">
            <Link to="/">
                <img src={Logo} alt="Logo" className='w-[200px] hidden sm:block cursor-pointer' />
            </Link>
            <Navlinks />
        </div>
    )
}