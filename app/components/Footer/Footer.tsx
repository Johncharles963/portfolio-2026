import { Link } from "react-router"
import Text from "../Text/Text"

export const Footer = () => {
    return (
        <footer className="px-5 py-2 w-full bg-slate-900 text-slate-100 flex justify-center items-center">
            <Text>John Charles | <Link className="btn" to="/contact">Contact Me!</Link></Text>
        </footer>)
}