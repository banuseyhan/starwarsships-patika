import React, { useEffect, useState } from 'react'
import { LinksList } from '../Link/LinksList'
import { Template } from '../Template/Template'
import { useFetching } from "../Hooks/useFetching";
import services from '../../API/services';
import { useParams } from 'react-router-dom';
import api from '../../API/api';
import axios from 'axios';


import './SinglePage.css'

export const SinglePage = () => {
  
    const [starShips, setStarships] = useState([])
    
  
   
       
     
    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/').then((res) => {
            console.log(res.data.results)
            setStarships(res.data.results)
        })

    }, [])
   
     

    

    return (
        
        <Template
        content={
            
            <div className='container single-film__container'>
            <h1 className='single-film__title'>{starShips.title}</h1>
            <h2 className='single-film__subtitle'>Episode: {starShips.episode_id}</h2>
            <div className='single-film__cast'>
                <p className='single-film__description'><span>Description</span>: {starShips.opening_crawl}</p>
                <p className='single-film__director'><span>Director</span>: {starShips.director}</p>
                <p className='single-film__producer'><span>Producer</span>: {setStarships.producer}</p>
                <p className='single-film__release'><span>Release</span>: {setStarships.release_date?.split('-').reverse().join('.')}</p>
            </div>
            <div className='single-film__data'>
                
                <LinksList data={starShips} className={'single-film__starships film__data-list'} basePath = 'starships' />
               
            </div>
        </div>
        }
        />
    )
}