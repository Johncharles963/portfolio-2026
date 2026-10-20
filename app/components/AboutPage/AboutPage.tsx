import Card from "../Card/Card"
import Text from "../Text/Text"

import PlumbingPic from "./plumber.jpg"
export const AboutPage = () => {
    return (
        <div className="px-5 gap-5 flex flex-col justify-self-center max-w-[1500px]">
            <div className=" w-full max-w-[500px]  self-center">
                <img src={PlumbingPic} className="h-full w-full rounded-xl" />
            </div>
            <Text size="xl2" fontWeight="bold">FROM PIPE WRENCH TO PULL REQUEST</Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="animate-slide-left mb-2 border-2 opacity-0" borderColor="border-slate-300">
                <Text size="xl" fontWeight="bold" className="mb-2">The Spark</Text>
                <Text>My fascination with programming began back in high school when I took my first Java course. Growing up facing a tough environment, college wasn't an immediate path for me. Right out of high school, I spent two years working at Dunkin' Donuts before transitioning into plumbing. I spent seven years in the trade. While I enjoyed it, I always felt I would just be an okay plumber rather than a great one.</Text>
            </Card>
            <Card className="animate-slide-right  [animation-delay:.5s] mb-2 border-2 opacity-0" borderColor="border-amber-400/65">
                <Text size="xl" fontWeight="bold" className="mb-2">The Turning Point</Text>
                <Text>I found a company I genuinely liked, and everything was running smoothly until I tore my ACL and meniscus. During a difficult recovery that was further prolonged by an injury sustained in physical therapy, I decided to finally dive into the passion I had put on hold. That tinge of regret for never getting to study computer science in college became my motivation. Armed with C# and .NET right from my couch during knee rehab, I taught myself how to code.</Text>
            </Card>
            <Card className="animate-slide-left [animation-delay:1s] mb-2 border-2 opacity-0" borderColor="border-blue-500">
                <Text size="xl" fontWeight="bold" className="mb-2">The Eight-Month Sprint</Text>
                <Text>Over the next eight months, I immersed myself completely, learning JavaScript, HTML, CSS, and Python. I built a full-stack Flask application and even engineered a system integrating DocuSign and OAuth 2.0 into another Flask app.</Text>
                <br /><Text>The ultimate test came during my interview process with Breezeline: the technical round required React, GraphQL, and MUI, technologies I had never touched. I taught them to myself overnight, aced the interview by morning, and accepted the position while also fielding other offers. </Text>

            </Card>
            <Card className="animate-slide-right [animation-delay:1.5s] mb-2 border-2 opacity-0" borderColor="border-indigo-500">
                <Text size="xl" fontWeight="bold" className="mb-2">The Breezeline Journey</Text>
                <Text>That began a four-year run marked by rapid growth and execution:</Text>
                <ul className="list-disc px-5">
                    <li><Text fontWeight="bold">Back-to-Back Promotions:</Text> <Text>Based on performance, I earned consecutive promotions in my first two years on the job.</Text></li>
                    <li><Text fontWeight="bold">Rapid Impact & Leadership:</Text> <Text>Within a single year, I went from learning Git, Bitbucket, React, MUI, and team workflows to actively contributing to applications, refactoring code, and spearheading two major initiatives simultaneously: the outage map which displays outage information on an interactive map, and an outage tool that allows internal teams to report and track outages.</Text></li>
                    <li><Text fontWeight="bold">Modernizing Architecture:</Text> <Text>On the job, I learned Vue while taking ownership of the main customer "MyAccount" application, then subsequently learned Next.js and TypeScript on the job to help complete the rebuild of that core application from the ground up.</Text></li>
                </ul>
            </Card>
            <Card className="animate-slide-left [animation-delay:2s] md:col-span-2 mb-2 border-2 opacity-0" borderColor="border-emerald-500">
                <Text size="xl" fontWeight="bold">Full-Circle Momentum</Text>
                <Text>Last year, I took things a step further and started going to college part-time to pursue my bachelor's degree in computer science. Balancing a full-time software engineering career while maintaining a 4.0 GPA feels completely surreal. Growing up, getting a degree in this field felt like an impossible dream. Looking back now as a developer with four years of professional experience under my belt, realizing that lifelong dream on my own terms has been an incredible journey.</Text>
            </Card>
            </div>



        </div>
    )
}