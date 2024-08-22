import React, { useState } from 'react'
import BusinessCard from '../components/BusinessCard'

export default class About extends React.Component {

    render() {
        return (
            <div className='layout'>
                <BusinessCard is_about={true}/>
            </div>
        )
    }
}