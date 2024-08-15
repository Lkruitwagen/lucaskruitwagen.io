import React, { useState } from "react";
import Select  from "react-select";
import Index from "../data/index.yaml";

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

const all_tags = Index.blog.map((blog) => blog.tags).flat(Infinity).sort();

let options = [...new Set(all_tags)].map((tag) => {
    return {'label':tag, 'value':tag}
});


export default function Blog() {

    const [selected, setSelected] = useState([]);

    const selected_keys = selected.map((option) => option.value);

    console.log('selected',selected)
    console.log('selected_keys',selected_keys)

    let tags = options.filter(option => !selected_keys.includes(option.value)).map((option) => {
        return (
            <Tag
                key={option.value}
                label={option.label}
                click_handler={setSelected}
            />
        )
        });

    console.log('tags',tags);

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

    return (
        <div className="layout">
            <div className="introduction"> 
                    <span> Writing </span>
            </div>
            <div>
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
        </div>
    );
}