import { useState } from 'react'
import Index from "../data/index.yaml";
import CodeCard from '../components/CodeCard'
import BusinessCard from '../components/BusinessCard'

export default function About() {

  return (
    <div className='layout'>
        <BusinessCard is_about={true}/>
    </div>
  )
}