import React from 'react'
import loader from '../../../img/loader.gif'
import './loaader.css'
export const Loader = () => {
    return (
        <div className='loader'>
            <img src={loader}alt="" />
        </div>
    )
}
