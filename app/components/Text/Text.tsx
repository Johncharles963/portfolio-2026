type TextSize = 'sm' | 'md' | 'lg' | 'xl' | 'xl2'
type BoldSize = 'normal' | 'medium' |'semi' | 'bold' | 'bolder'

interface TextProps {
    size?: TextSize
    children: React.ReactNode
    className?: string
    fontWeight?: BoldSize
}


const sizeClasses: Record<TextSize, string> = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    xl2: 'text-2xl'
}
const boldClasses: Record<BoldSize, string> = {
    normal: 'font-normal',
    medium: 'font-medium',
    semi: 'font-semibold',
    bold: 'font-bold',
    bolder: 'font-extrabold',
}

export default function Text({size= 'md', children, className = '', fontWeight= "normal"}: TextProps){
    return(
        <p className={`${sizeClasses[size]} ${boldClasses[fontWeight]} ${className}`}>{children}</p>
    )
}