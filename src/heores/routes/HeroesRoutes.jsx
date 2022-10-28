import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPages, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <Routes>
                <Route path='/marvel' element={ <MarvelPage />}/> 
                <Route path='/dc' element={ <DcPages />}/> 

                <Route path='/search' element={ <SearchPage />}/> 
                <Route path='/hero/:id' element={ <HeroPage />}/> 
                // Navigate ruta que apuntara por defecto en caso que el url no coincida 
                <Route path='/' element={ <Navigate to="/marvel"/> }/> 
            </Routes>   
        </div>
    </>
  )
}
