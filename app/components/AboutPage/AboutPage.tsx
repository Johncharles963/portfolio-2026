import Text from "../Text/Text"

export const AboutPage = () => {
    return(
        <div>
            <Text size="xl2">From Pipe Wrench to Pull Request</Text>
            <Text size="xl">The Spark</Text>
            <Text>My fascination with programming began back in high school when I took my first Java course. Growing up facing a tough environment, college wasn't an immediate path for me. Right out of high school, I spent two years working at Dunkin' Donuts before transitioning into plumbing. I spent seven years in the trade. While I enjoyed it, I always felt I would just be an okay plumber rather than a great one.</Text>
            <Text size="xl">The Turning Point</Text>
            <Text>I found a company I genuinely liked, and everything was running smoothly until I tore my ACL and meniscus. During a difficult recovery that was further prolonged by an injury sustained in physical therapy, I decided to finally dive into the passion I had put on hold. That tinge of regret for never getting to study computer science in college became my motivation. Armed with C# and .NET right from my couch during knee rehab, I taught myself how to code.</Text>
            <Text size="xl">The Eight-Month Sprint</Text>
            <Text>Over the next eight months, I immersed myself completely, learning JavaScript, HTML, CSS, and Python. I built a full-stack Flask application and even engineered a system integrating DocuSign and OAuth 2.0 into another Flask app. When I started applying for roles, I received multiple job offers and accepted my position at Breezeline.</Text>
            <Text>The turning point happened right before the job: my technical test required React, GraphQL, and MUI, technologies I had never touched. I taught them to myself overnight and aced the test by morning.</Text>
            <Text  size="xl">The Breezeline Journey</Text>
            <Text>That began a four-year run marked by rapid growth and execution:</Text>
            <ul>
                <li><Text>Back-to-Back Promotions: Based on performance, I earned consecutive promotions in my first two years on the job.</Text></li>
                <li><Text>Rapid Impact & Leadership: Within a single year, I went from learning Git, Bitbucket, React, MUI, and team workflows to actively contributing to applications, refactoring code, and spearheading two major initiatives simultaneously: the outage map and an internal tool.</Text></li>
                <li><Text>Modernizing Architecture: On the job, I learned Vue while taking ownership of the main customer application, then subsequently mastered Next.js and TypeScript to lead the complete rebuild of that core application from the ground up.</Text></li>
            </ul>
        
        </div>
    )
}