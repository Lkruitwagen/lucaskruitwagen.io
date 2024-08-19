import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Select  from "react-select";
import BlogData from "../data/blog.yaml";
import {LinkButton} from '../components/Highlights';

function Author(props) {
    return (
        <a href={props.url}>{props.label}</a>
    );
}



export default function EntryPage(props) {

    const { slug } = useParams();
    console.log('slug', slug)

    const data = BlogData.find((blog) => blog.slug === slug);
    console.log('data', data)

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const authors = data.authors?.map((author) => {
        return (
            <Author
                key = {author.label}
                label = {author.label}
                url = {author.ulr}
            />
        )
    })

    const links = data.links.map((link) => {
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
        <div className="layout">
            <div className="entry--title">
                <span>
                    {data.title}
                </span>
            </div>
            <div className="entry--byline">
                <p>
                    {data.date.getDate() +" " + months[data.date.getMonth()] + " " + data.date.getFullYear()}
                </p>
                <p>
                    {authors? "with" : null}
                </p>
                {authors ? authors : null}
            </div>
            <div className="entry--linkbox">
                {links}
            </div>
            <div className="entry--abstract">
                {data.abstract? data.abstract : null}
            </div>
            <div className="entry--tags">
                <p>
                    {data.tags.join(" | ")}
                </p>
            </div>
        </div>
    )
}
