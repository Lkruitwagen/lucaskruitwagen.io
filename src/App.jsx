import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Index from "./data/index.yaml";
import CodeCard from './components/CodeCard'
import {BusinessCard, Highlights} from './components/BusinessCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const sorted_index = Index.blog.sort((a,b) => {
    return b.date - a.date
  })

  const code_cards = Index.code.filter(
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
        <BusinessCard />
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

export default App
