import React, { useState } from "react";
import Select  from "react-select";
import SpeakingData from "../data/speaking.yaml";


export default function Speaking() {

    const isDark = document.body.classList.contains("dark")

    const color_scheme = isDark ? "dark" : "light"

    const logos = ['ac','bp','ms','ox','pm']

    const imgs = logos.map((logo_abbr) => {
        return (
            <img id={logo_abbr+"-logo"} src={"/"+logo_abbr+"-"+ color_scheme +".png"}/>
        )
    })

    // console.log('img_paths', img_paths)

    return (
        <div className="layout">
            <div className="introduction"> 
                    <span> Speaking </span>
            </div>
            <div className="introduction">
                <span>  Teaching </span>
            </div>
            <div className="teaching--box">
                <p>
                    I teach on the following subjects and have given a number of invitational seminars and workshops.
                </p>
                <ul>
                    <li> Earth Observation and Machine Learning </li>
                    <li> Machine Learning Project Design </li>
                    <li> Data & AI for Sustainability </li>
                    <li> Stranded Assets, Scenarios, & Climate Change Risks </li>
                    <li> Introduction to Computer Vision </li>
                    <li> Applied Spatial Statistics </li>
                </ul>
                <p>
                    Past teaching engagements include:
                </p>
                <div className="logo--imgs">
                    {imgs}
                </div>
            </div>
        </div>
    );
}