import Text from "../Text/Text"
import John from "./headshot.jpeg"
import Card from "../Card/Card"
import { SkillList } from "./SkillList"
export const ProfileSummary = () => {
    return (
        <Card className="flex w-full flex-col items-center gap-5 text-center">
            <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-white shadow-lg ring-2 ring-blue-600 sm:h-60 sm:w-60">
                <img src={John} alt="Portrait of John Charles" className="w-full h-full object-cover" />
            </div>
            <Text as="h2" size="xl" fontWeight="bold" className="tracking-tight text-slate-900">JOHN CHARLES</Text>
            <Text fontWeight="semi" className="text-lg text-blue-800">From Fixing Plumbing Fixtures to Shipping Software Fixtures</Text>
            <Text className="max-w-3xl leading-7 text-slate-600">A software engineer based in Connecticut who approaches digital architecture with the same precision,
                problem-solving discipline, and structural integrity once applied to plumbing fixtures. Transitioned from hands-on trade craftsmanship to software engineering,
                bringing a uniquely grounded, detail-oriented mindset to every line of code.</Text>
            <SkillList />
        </Card>
    )
}