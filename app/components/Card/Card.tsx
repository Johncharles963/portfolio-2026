interface CardProps {
    children: React.ReactNode
    className?: string
    borderColor?: string
}



export default function Card({children, className = '', borderColor = "border-slate-300/80"}: CardProps){
    return(
        <div className={`${className}  p-5 md:bg-slate-50 gap-5 rounded-md shadow-lg border ${borderColor} `}>
            {children}
        </div>
    )
}