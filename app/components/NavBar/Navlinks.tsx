import { NavLink } from "react-router"

export const Navlinks = () => {
    const links = [{ text: "Home", url: "/" }, { text: "About", url: "/about" }, { text: "Resume", url: "/resume" }, { text: "Contact", url: "/contact" }]
    return(
        <nav aria-label="Main navigation" className="max-sm:w-full">
            <ul className="flex justify-between gap-2 sm:gap-5">
                {links.map((link) => (
                    <li key={link.text}>
                        <NavLink
                            to={link.url}
                            end={link.url === "/"}
                            className={({ isActive }) => `btn ${isActive ? "bg-white/10 text-white" : ""}`}
                        >
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}