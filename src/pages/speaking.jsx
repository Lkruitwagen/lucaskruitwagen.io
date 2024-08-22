import React, { useState } from "react";
import Select  from "react-select";
import SpeakingData from "../data/speaking.yaml";
import {LinkButton} from '../components/Highlights';
import { faHospitalAlt } from "@fortawesome/free-regular-svg-icons";


function Engagement(props) {

    const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });

    const links = props.links.map((link) => {
        return (
            <LinkButton
                key={link.label}
                label = {link.label}
                url = {link.url}
                external = {true}
            />
        )
    });

    return (
        <div className="engagement">
            <div className="engagement--title">
                <span>
                    {props.title}
                </span>
            </div>
            <div className="engagement--content">
                <span>
                    {props.host}
                </span>
                <p>
                    {props.venue}
                </p>
                <p>
                    {formatter.format(props.date)}
                </p>
            </div>
            <div className="engagement--links">
                {links}
            </div>
            

        </div>
    )
}


export default class Speaking extends React.Component {

    render() {

        const isDark = document.body.classList.contains("dark")

        const color_scheme = isDark ? "dark" : "light"

        const logos = ['ac','bp','ms','ox','pm']

        const imgs = logos.map((logo_abbr) => {
            return (
                <img key={logo_abbr} id={logo_abbr+"-logo"} src={"/"+logo_abbr+"-"+ color_scheme +".png"}/>
            )
        })

        const engagements = SpeakingData.sort((a,b) => {
            return b.date - a.date
        }).map((engagement) => {
            return (
                <Engagement
                    key={engagement.title}
                    title={engagement.title}
                    date={engagement.date}
                    host={engagement.host}
                    venue={engagement.venue}
                    links={engagement.links}
                />
            )
        })

        return (
            <div className="layout">
                <div className="introduction"> 
                        <span> Speaking </span>
                </div>
                <div>
                    {engagements}
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
}