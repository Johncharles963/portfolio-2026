import { Link } from 'react-router'
import Card from '../Card/Card'
import { ProfileSummary } from '../ProfileSummary/ProfileSummary'
import { TechnicalSkills } from '../TechnicalSkills/TechnicalSkills'
import Text from '../Text/Text'
export const HomePage = () => {
    return (
        <div className="mx-auto h-full max-w-[960px] px-5 py-10 sm:py-14">
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-4'>
                    <Text as="h1" size='xl2' fontWeight='bold' className='self-center tracking-tight text-slate-900 lg:self-start' >PROFILE SUMMARY</Text>
                    <ProfileSummary />
                </div>
                <TechnicalSkills />
                <Card className='flex flex-col'>
                    <Text as="h2" size="lg" fontWeight="bold" className='text-center tracking-tight text-slate-900 lg:text-start'>Explore</Text>
                    <div className='flex max-sm:flex-col max-lg:items-center max-lg:justify-center gap-4'>
                        <Link to="/about" className='btn-outlined text-center'>About Me</Link>
                        <Link to="/resume" className='btn-outlined text-center'>Resume</Link>
                        <Link to="/contact" className='btn-outlined text-center'>Contact</Link>
                    </div>
                </Card>

            </div>
        </div>
    )
}