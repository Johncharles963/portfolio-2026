import { Link } from "react-router"
import Card from "../Card/Card"
import Text from "../Text/Text"

export const NotFoundPage = () => {
    return (
        <Card className="w-full max-w-[400px] justify-self-center text-center">
            <Text as="h1" size="xl2" fontWeight="bold" className="mb-5">Page Not Found</Text>
            <Text className="mb-5 text-red-500">Error 404</Text>
            <Link
                to="/"
                className="inline-block w-full py-2.5 px-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
            >
                Return Home
            </Link>
        </Card>
            
    )
}
