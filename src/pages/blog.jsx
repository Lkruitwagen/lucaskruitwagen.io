import React, { useState } from "react";
import Select  from "react-select";
import BlogData from "../data/blog.yaml";

const all_tags = BlogData.map((blog) => blog.tags).flat(Infinity).sort();

let options = [...new Set(all_tags)].map((tag) => {
    return {'label':tag, 'value':tag}
});

function Tag(props) {

    function handle_click(event) {
        const {name, value} = event.target
        props.click_handler(prevSelected => {
            return [
                ...prevSelected,
                {'label':props.label, 'value':props.label}
            ]
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
                <span>{props.post.title}</span>
                <p>
                    {months[props.post.date.getMonth()] + " " + props.post.date.getFullYear()}
                </p>
            </div>
            
        </div>
    )
}


export default function Blog() {

    const [selected, setSelected] = useState([]);

    const selected_keys = selected.map((option) => option.value);

    let tags = options.filter(option => !selected_keys.includes(option.value)).map((option) => {
        return (
            <Tag
                key={option.value}
                label={option.label}
                click_handler={setSelected}
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
                    value={selected}
                    isMulti
                    styles={select_styles}
                    name="colors"
                    onChange={setSelected}
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