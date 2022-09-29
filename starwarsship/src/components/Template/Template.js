import React from 'react'
import { Header } from './Header'
import { Main } from './Main'
import './template.css'
export const Template = ({content}) => {
    return (
        <div className='wrapper'>
            <Header/>
            <Main content={content}/>
        </div>
    )
}
