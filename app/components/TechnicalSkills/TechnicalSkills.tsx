import Card from "../Card/Card"
import Text from "../Text/Text"
import Bitbucket from "./icons/bitbucket.svg"
import Bootstrap from "./icons/bootstrap.svg"
import cPlusPlus from "./icons/cPlusPlus.svg"
import cSharp from "./icons/cSharp.svg"
import CSS from "./icons/css.svg"
import Docker from "./icons/docker.svg"
import DotNet from "./icons/dotNet.svg"
import Flask from "./icons/flask.svg"
import GCP from "./icons/gcp.svg"
import Git from "./icons/git.svg"
import HTML from "./icons/html.svg"
import Java from "./icons/java.svg"
import JS from "./icons/js.svg"
import Mui from "./icons/mui.svg"
import NextJS from "./icons/nextjs.svg"
import Python from "./icons/python.svg"
import React from "./icons/react.svg"
import Sentry from "./icons/sentry.svg"
import Tailwind from "./icons/tailwind.svg"
import TS from "./icons/ts.svg"
import Unity from "./icons/unity.svg"
import Vue from "./icons/vue.svg"

export const TechnicalSkills = () => {
    const technicalSkillsList = [
        {
            img: Python,
            title: "Python"
        },
        {
            img: JS,
            title: "JS"
        },
        {
            img: TS,
            title: "TS"
        },
        {
            img: Java,
            title: "Java"
        },
        {
            img: cPlusPlus,
            title: "C++"
        },
        {
            img: cSharp,
            title: "C#"
        },
        {
            img: HTML,
            title: "HTML"
        },
        {
            img: CSS,
            title: "CSS"
        },
        {
            img: DotNet,
            title: ".NET"
        },

        {
            img: Git,
            title: "Git"
        },


        {
            img: React,
            title: "React"
        },
        {
            img: NextJS,
            title: "Next.js"
        },
        {
            img: Vue,
            title: "Vue"
        },
        {
            img: Flask,
            title: "Flask"
        },
        {
            img: Unity,
            title: "Unity"
        },

        {
            img: Bootstrap,
            title: "Bootstrap"
        },
        {
            img: Mui,
            title: "MUI"
        },
        {
            img: Tailwind,
            title: "Tailwind"
        },
        {
            img: Sentry,
            title: "Sentry"
        },
        {
            img: Docker,
            title: "Docker"
        },
        {
            img: GCP,
            title: "GCP"
        },
        {
            img: Bitbucket,
            title: "Bitbucket"
        },
    ]
    return (
        <section aria-labelledby="technical-skills-heading">
            <Card className="flex flex-col">
                <Text as="h2" id="technical-skills-heading" size="lg" fontWeight="bold" className='text-center lg:text-start' >TECHNICAL SKILLS</Text>
                <ul className="flex flex-wrap justify-center md:justify-start gap-3">
                    {technicalSkillsList.map((skill) => (
                        <li className="flex flex-col items-center" key={skill.title}>
                            <img src={skill.img} alt="" aria-hidden="true" className="w-15 h-15" />
                            <Text size="sm">{skill.title}</Text>
                        </li>
                    ))}
                </ul>

            </Card>
        </section>
    )
}