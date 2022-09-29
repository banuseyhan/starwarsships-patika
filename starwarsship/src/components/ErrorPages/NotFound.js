import React from 'react'
import notFound from '../../img/404.png'
export const NotFound = () => {
    return (
        <div className='not-found'>
            <h2 className='not-found__title'>no results</h2>
            <img src= {notFound} alt="notFound" />
        </div>
    )
}
