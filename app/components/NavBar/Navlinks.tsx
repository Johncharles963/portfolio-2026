import { Link } from "react-router"

export const Navlinks = () => {
    const links = [{text: "Home", url: "/"}, {text: "About", url: "/about"}, {text: "Resume", url: "/resume"}, {text: "Contact", url: "/contact"}]
    return(
        <div className="flex gap-5">
            {links.map((link, index) => (
                <Link key={`nav-link-${link.text}`} to={link.url} className='btn'>{link.text}</Link>
            ))}
        </div>
    )
}