import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../API/api'
import { useFetching } from '../Hooks/useFetching'
import { usePagesArray } from '../Hooks/usePagesArray'

import { SearchForm } from '../SearchForm/SearchForm'
import { Template } from '../Template/Template'
import { Pagination } from '../Pagination/Pagination'
import './Starships.css'
export const Starships = () => {
    const {pathItem} = useParams() 
    const [ setData] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [page, setPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState('')
    const pagesArray = usePagesArray(totalItems)
    const [fetchItems] = useFetching(async () => {
        const response = await api.getAllItems(pathItem, page, searchQuery)
        setData(response.data.results)
        setTotalItems(response.data.count)
    })

    useEffect(() => {
        fetchItems()
    }, [page, searchQuery, pathItem])


    useEffect(() => {
        setSearchQuery('')
    }, [pathItem])
    return (
        <Template
        content={ 
            <div className='container item__container'>
                <h1 className='item__title'>{pathItem === 'people' ? 'Characters' : pathItem}</h1>
                <SearchForm setQuery={setSearchQuery}/>
                
                <Pagination pagesArray={pagesArray()} page={page} setPage={setPage}/>
            </div>
        }
        />
    )
}