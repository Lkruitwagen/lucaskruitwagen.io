import { useState } from 'react'
import BusinessCard from '../components/BusinessCard'

export default function About() {

  return (
    <div className='layout'>
        <BusinessCard is_about={true}/>
    </div>
  )
}