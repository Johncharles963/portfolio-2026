interface CardProps {
    children: React.ReactNode
    className?: string
    borderColor?: string
}



export default function Card({children, className = '', borderColor = "border-slate-300/80"}: CardProps){
    return(
        <div className={`${className} gap-5 rounded-2xl border ${borderColor} bg-white/90 p-6 shadow-[0_12px_35px_-20px_rgba(15,23,42,0.35)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_18px_45px_-22px_rgba(15,23,42,0.4)]`}>
            {children}
        </div>
    )
}