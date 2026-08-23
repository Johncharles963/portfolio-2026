import Card from "../Card/Card"
import { TechnicalSkills } from "../TechnicalSkills/TechnicalSkills"
import Text from "../Text/Text"

export const ResumePage = () => {
    return (
        <div className="flex flex-col gap-5 max-w-[1500px] justify-self-center p-5">
            <Text size="xl2" fontWeight="bold">RESUME</Text>
            <Card>
                <Text size="xl" fontWeight="bold" className="mb-2">Professional Summary</Text>
                <Text>Extremely passionate and tenacious Software Engineer with a unique background transitioning from the plumbing
                    trade to professional software engineering. Leverages a strong work ethic and problem-solving foundation to architect,
                    build, scale, and modernize high-traffic applications. Proven track record of rapid promotion and mastering new tech
                    stacks on the job, including React, Next.js, and TypeScript, while leveraging AI tooling and Google AI chatbots to
                    optimize development workflows and user experiences.
                </Text>
            </Card>
            <TechnicalSkills />
            <Card>
                <Text size="xl" fontWeight="bold" className="mb-2">Professional Experience</Text>
                <Text fontWeight="semi">Web Developer | Breezeline, Quincy, MA</Text>
                <Text className="text-slate-500">November 22 - August 26</Text>
                <ul className="list-disc p-4">
                    <li><Text>Earned a performance-based promotion after consistently exceeding expectations for the first two consecutive
                        years, rapidly mastering React, GraphQL, and MUI on the job to independently refactor legacy repositories,
                        connect frontends to GraphQL APIs, and style UI components based on Figma designs.
                    </Text></li>
                    <li><Text>Spearheaded a dual-purpose project featuring a customer-facing Leaflet outage map and a heavily revamped
                        internal dashboard enabling staff to declare, search, sort, and filter system-wide outages.</Text></li>
                    <li><Text>Owned end-to-end development of critical customer identity and account management tools, maintaining a portfolio
                        of at least six customer-facing applications and two internal tools simultaneously.
                    </Text></li>
                    <li><Text>Contributed to the development of the primary customer-facing "MyAccount" portal built from the ground up in
                        Next.js/TypeScript, building scalable features like a dynamic marketing promotional carousel.
                    </Text></li>
                    <li><Text>Integrated Google AI chatbot technology into several customer-facing applications to enhance automated support
                        and user interaction capabilities.
                    </Text></li>
                    <li><Text>Dramatically reduced Sentry error volume from tens of thousands down to just hundreds per month and optimized
                        application performance by completely restructuring error-handling and API call architecture, eliminating cascading
                        failure states during high-traffic outages.</Text></li>
                    <li><Text>Leveraged AI-driven developer tooling and coding assistants to accelerate PR reviews, streamline code refactoring,
                        and automate routine development tasks, driving daily workflow efficiency.</Text></li>
                </ul>
            </Card>
            <Card>
                <Text size="xl" fontWeight="bold" className="mb-2">Education</Text>
                <Text fontWeight="semi">Bachelor of Science in Computer Science</Text>
                <Text className="text-slate-500">In Progress</Text>
                <Text fontWeight="medium" className="mb-3">Southern Connecticut State University, New Haven, CT (Currently maintaining a 4.0 GPA)</Text>

                <Text fontWeight="semi">Self-Taught Engineering & Full-Stack Development</Text>
                <Text>Successfully pivoted from a technical trade to professional software engineering through an intensive, self-directed
                    curriculum, building functional full-stack web applications before securing a professional role within 8 months.
                </Text>
            </Card>
        </div>
    )
}
