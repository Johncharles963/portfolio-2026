import Card from '../Card/Card'
import { ProfileSummary } from '../ProfileSummary/ProfileSummary'
import { TechnicalSkills } from '../TechnicalSkills/TechnicalSkills'
import Text from '../Text/Text'
import styles from './HomePage.module.css'
export const HomePage = () => {
    return (
        <div className="h-full max-w-[1000px] self-center">
            <div className='justify-self-center flex flex-col gap-10 '>
                <div className='justify-self-center flex flex-col'>
                    <Text size='xl2' fontWeight='bold' className='self-center lg:self-start' >PROFILE SUMMARY</Text>
                    <ProfileSummary />
                </div>
                <TechnicalSkills />
                <Card className='flex flex-col'>
                    <Text size="lg" fontWeight="bold" className='text-center lg:text-start'>QUICK LINKS</Text>
                    <div className='flex max-sm:flex-col max-lg:items-center max-lg:justify-center gap-4'>
                        <button className='btn-outlined'>About Me</button>
                        <button className='btn-outlined'>Resume</button>
                        <button className='btn-outlined'>Contact</button>
                    </div>
                </Card>

            </div>
        </div>
    )
}