import Card from "../Card/Card"
import { TechnicalSkills } from "../TechnicalSkills/TechnicalSkills"
import Text from "../Text/Text"

export const ResumePage = () => {
    return (
        <div className="flex flex-col gap-5 max-w-[1500px] mx-auto p-5">
            <Text as="h1" size="xl2" fontWeight="bold">RESUME</Text>
            <section aria-labelledby="professional-summary-heading">
                <Card>
                    <Text as="h2" id="professional-summary-heading" size="xl" fontWeight="bold" className="mb-2">Professional Summary</Text>
                    <Text>Pragmatic, tenacious Software Engineer with 4+ years of experience building, scaling, and modernizing customer-facing applications and internal enterprise tools. Built on a strong foundation from the plumbing trade, I bring a grit-driven approach to diagnosing complex root causes and engineering resilient solutions. At Breezeline, I managed a
                        portfolio of nine web applications, integrated Google AI capabilities, and streamlined development using AI-assisted
                        tooling. Known for quick execution and continuous learning: earning back-to-back performance recognition, mastering
                        tools on the fly, and maintaining a 4.0 GPA in Computer Science alongside full-time engineering work.

                    </Text>
                </Card>
            </section>
            <TechnicalSkills />
            <section aria-labelledby="professional-experience-heading">
                <Card>
                    <Text as="h2" id="professional-experience-heading" size="xl" fontWeight="bold" className="mb-2">Professional Experience</Text>
                    <Text as="h3" fontWeight="semi">Web Developer | Breezeline, Quincy, MA</Text>
                    <Text className="text-slate-500">November 22 - August 26</Text>
                    <ul className="list-disc p-4">
                        <li><Text>Led frontend modernization initiatives by refactoring legacy repositories, integrating GraphQL APIs, and
                            building responsive UI components from Figma specifications, improving application scalability, maintainability,
                            and overall user experience.

                        </Text></li>
                        <li><Text>Spearheaded the development of an interactive, customer-facing Leaflet outage mapping solution and redesigned an
                            internal outage management dashboard, enabling real-time outage visibility and significantly improving operational
                            efficiency for network operations teams declaring, tracking, and resolving system-wide outages.
                        </Text></li>
                        <li><Text>Managed the end-to-end development and support of critical customer identity and account management solutions,
                            overseeing a portfolio of seven customer-facing applications and two internal tools to ensure reliable performance,
                            seamless user experiences, and operational continuity.

                        </Text></li>
                        <li><Text>Collaborated on the strategic architectural rebuild of the core customer MyAccount portal transitioning to Next.js
                            while adhering to strict engineering standards, resulting in accelerated page load times and a modern, modular
                            codebase.

                        </Text></li>
                        <li><Text>Engineered and integrated self-service authentication features including Google Single Sign-On (SSO) and secondary
                            user management within a customer-facing web application which streamlined subscriber onboarding and reduced
                            support ticket volume for credential recovery.

                        </Text></li>
                        <li><Text>Drove production error monitoring and triage using Sentry across legacy and modern web applications, identifying
                            root causes to systematically resolve critical runtime bugs and eliminate thousands of recurring production errors.
                        </Text></li>
                        <li><Text>Rapidly assumed technical ownership of third-party legacy codebases executing targeted feature updates and
                            conducting knowledge transfer to preserve uptime during system transitions.
                        </Text></li>
                        <li><Text> Embedded Google AI conversational capabilities into key customer-facing platforms to streamline automated
                            subscriber support, reduce resolution times, and elevate the overall user experience.

                        </Text></li>
                        <li><Text> Leveraged AI-driven development tooling and coding assistants to streamline pull request reviews, accelerate complex
                            code refactoring, and automate repetitive tasks, resulting in significantly faster development cycles and improved daily
                            workflow efficiency.
                        </Text></li>
                    </ul>
                </Card>
            </section>
            <section aria-labelledby="education-heading">
                <Card>
                    <Text as="h2" id="education-heading" size="xl" fontWeight="bold" className="mb-2">Education</Text>
                    <Text as="h3" fontWeight="semi">Bachelor of Science in Computer Science</Text>
                    <Text className="text-slate-500">In Progress</Text>
                    <Text fontWeight="medium" className="mb-3">Southern Connecticut State University, New Haven, CT (Currently maintaining a 4.0 GPA)</Text>

                    <Text as="h3" fontWeight="semi">Self-Taught Engineering & Full-Stack Development</Text>
                    <Text>Successfully pivoted from a technical trade to professional software engineering through an intensive, self-directed
                        curriculum, building functional full-stack web applications before securing a professional role within 8 months.
                    </Text>
                </Card>
            </section>
        </div>
    )
}
