import Text from "../Text/Text"

export const SkillList = () => {
    const skills = [
        {
            title: 'Full-Stack & Component Mastery',
            description: ': Specializes in building high-performance, modern web applications with clean architecture, responsive design, and intuitive user experiences.',
        },
        {
            title: 'Systems & Interactive Programming',
            description: ': Builds diverse software ranging from Python dungeon loot simulators and C++ TCP/UDP client-server applications to C# Ping Pong, interactive JavaScript calendars, and Tic-Tac-Toe AI, while actively learning Unity to develop a multiplayer RPG.',
        },
        {
            title: 'Methodical Problem Solver',
            description: ': Blends logical structure with creative adaptability, treating every software challenge like a puzzle waiting for an optimized, robust solution.',
        },
    ]
    return (
        <div className="px-5 self-start">
            <ul className="list-disc">
                {
                skills.map((skill) => (
                    <li key={skill.title}><Text fontWeight="bold" className="inline">{skill.title}</Text><Text className="sr-only sm:not-sr-only sm:inline">{skill.description}</Text></li>
                    ))
                }
            </ul>
        </div>
    )
}