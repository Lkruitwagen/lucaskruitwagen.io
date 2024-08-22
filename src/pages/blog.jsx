import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Select  from "react-select";
import BlogData from "../data/blog.yaml";

const all_tags = BlogData.map((blog) => blog.tags).flat(Infinity).sort();

let options = [...new Set(all_tags)].map((tag) => {
    return {'label':tag, 'value':tag}
});

function Tag(props) {

    function handle_click(event) {
        const {name, value} = event.target
        props.click_handler(prevState => {
            const arr = [
                ...prevState.selected,
                {'label':props.label, 'value':props.label}
            ]
            return {selected: arr}
        })
    }

    return (
        <button
            onClick={handle_click}
        >
            <span>{props.label}</span>
        </button>
    );
}


function Entry(props) {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <div className="blog--entry">
            <div className="blog--entry--header">
                <Link to={"/blog/"+props.post.slug}>
                    <span>
                        {props.post.title}
                    </span>
                </Link>
                
                <p>
                    {months[props.post.date.getMonth()] + " " + props.post.date.getFullYear()}
                </p>
            </div>
            
        </div>
    )
}

class Blog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: props.selected
        };

        this.setState = this.setState.bind(this);
        this.handleSelectedChange = this.handleSelectedChange.bind(this);

        
    }

    handleSelectedChange(event) {
        this.setState({selected: event})
    }


    render() {
        
        const selected_keys = this.state.selected.map((option) => option.value);

        let tags = options.filter(option => !selected_keys.includes(option.value)).map((option) => {
            return (
                <Tag
                    key={option.value}
                    label={option.label}
                    click_handler={this.setState}
                />
            )
        });


        const select_styles= {
            control: (baseStyles, state) => ({
                ...baseStyles,
                borderRadius: '16px',
                padding: '4px 0px',
                borderColor: state.isFocused ? 'grey' : 'grey',
                "&:hover": {
                borderColor: 'grey'
                },
                backgroundColor: 'light-dark(var(--color-surface-l100), var(--color-surface-d100))',
            }),
            multiValue: (base, state) => ({
                ...base,
                borderRadius: '16px',
                backgroundColor: 'light-dark(var(--color-surface-l150),var(--color-surface-d200))',
            }),
            multiValueLabel: (base, state) => ({
                ...base,
                fontWeight: '300',
                color: 'light-dark(var(--color-surface-l600),var(--color-surface-d600))',
            }),
        }

        const entries = BlogData.filter((blog) => {
                return (blog.tags.some(tag => selected_keys.includes(tag)) | !selected_keys.length) 
            }).sort((a,b) => {
                return b.date - a.date
              }).map((blog) => {
                return (
                    <Entry
                        key={blog.title}
                        post={blog}
                    />
                )
            })
        return (
            <div className="layout">
                <div className="introduction"> 
                        <span> Writing </span>
                </div>
                <div className="select--container">
                    <Select
                        options={options}
                        value={this.state.selected}
                        isMulti
                        styles={select_styles}
                        name="colors"
                        onChange={this.handleSelectedChange}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Select tags..."
                    />
                </div>
                <div className="tagbox">
                    {tags}
                </div>
                <div className="entries">
                    {entries}
                </div>
            </div>
        );
    }

    
}

export default function BlogWithParams() {

    const [searchParams] = useSearchParams();

    const url_tags = searchParams.get('tags')?.split(',').filter(tag => all_tags.includes(tag)).map((tag) => {
        return {'label':tag, 'value':tag}
        }
    );

    return (
        <Blog
            selected={url_tags ? url_tags : []}
        />
    )
}