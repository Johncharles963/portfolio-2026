import Text from "../Text/Text"
import John from "./headshot.jpeg"
import Card from "../Card/Card"
import { SkillList } from "./SkillList"
export const ProfileSummary = () => {
    return (
        <Card className="flex flex-col w-full justify-self-center items-center">
            <div className="rounded-full w-70 h-70 overflow-hidden border-blue-600 border-2">
                <img src={John} className=" w-full h-full object-cover" />
            </div>
            <Text size="xl" fontWeight="semi">JOHN CHARLES</Text>
            <Text fontWeight="bold">From Fixing Plumbing Fixtures to Shipping Software Fixtures</Text>
            <Text>A thirty-one-year-old web developer based in Connecticut who approaches digital architecture with the same precision,
                problem-solving discipline, and structural integrity once applied to plumbing fixtures. Transitioned from hands-on trade craftsmanship to software engineering,
                bringing a uniquely grounded, detail-oriented mindset to every line of code.</Text>
            <SkillList />
        </Card>
    )
}