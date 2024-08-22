import React, { useState } from "react";
import Select  from "react-select";
import CodeData from "../data/code.yaml";
import CodeCard from '../components/CodeCard'

export default class Code extends React.Component {

    render() {

      const code_cards = CodeData.sort((a,b) => {
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
          <div className="layout">
              <div className="introduction"> 
                  <span> Open Source </span>
              </div>
              <div className="quotebox">
                  <span> Truth can only be found in one place: the code.</span>
                  <p>- Robert C. Martin</p>
                  <span>Sunlight is said to be the best of disinfectants.</span>
                  <p>- Louis Brandeis</p>
              </div>
              <div className="codecards">
                  {code_cards}
              </div>
          </div>
      );
  }
}