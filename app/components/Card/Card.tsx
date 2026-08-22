
interface CardProps {
    children: React.ReactNode
    className?: string
}



export default function Card({children, className = ''}: CardProps){
    return(
        <div className={`${className} w-full lg:w-5xl p-5 md:bg-slate-50 gap-5 rounded-md shadow-lg border  border-slate-300/80`}>
            {children}
        </div>
    )
}