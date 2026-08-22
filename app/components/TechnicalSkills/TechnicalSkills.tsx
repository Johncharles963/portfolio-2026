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
        GCP,
        JS,
        Java,
        Bitbucket,
        Bootstrap,
        cPlusPlus,
        cSharp,
        CSS,
        Docker,
        DotNet,
        Flask,
        Git,
        HTML,
        Mui,
        NextJS,
        Python,
        React,
        Sentry,
        Tailwind,
        TS,
        Unity,
        Vue
    ]
    return(
        <Card className="flex flex-col max-md:max-h-[200px] max-md:overflow-auto">
            <Text size="lg" fontWeight="bold" className='text-center lg:text-start' >TECHNICAL SKILLS</Text>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {technicalSkillsList.map((skill, index) => (
                    <img key={`tech-skill-${index}`} src={skill} className="w-15 h-15" />
                ))}
            </div>
           
        </Card>
    )
}