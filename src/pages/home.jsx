import { useState } from 'react'
import CodeData from "../data/code.yaml";
import BlogData from "../data/blog.yaml";
import CodeCard from '../components/CodeCard'
import BusinessCard from '../components/BusinessCard'
import Highlights from '../components/Highlights'

export default function Home() {

  const sorted_index = BlogData.sort((a,b) => {
    return b.date - a.date
  })

  const code_cards = CodeData.filter(
    (code) => code.highlight
  ).sort((a,b) => {
    return b.date - a.date
  }).map((code) => {
    return (
      <CodeCard
        key = {code.org+"/"+code.repo}
        title = {code.title}
        description = {code.description}
        year = {code.year}
        org = {code.org}
        repo = {code.repo}
      />
    )}
  )

  return (
    <div className='layout'>
        <BusinessCard is_about={false} />
        <Highlights 
          highlights={sorted_index}
          tag='research'
          tag_alias='Research'
          show_links={true}
        /> 
        <Highlights 
          highlights={sorted_index}
          tag='technical'
          tag_alias='Technical Writing'
          show_links={false}
        /> 
        <div className="highlights">
                <div className="highlights--header">
                    <span> Open Source </span>
                    <form>
                        <button formAction="/code">
                            all code
                        </button>
                    </form>
                </div>
        </div>
        <div className="codecards">
          {code_cards}
        </div>
    </div>
  )
}