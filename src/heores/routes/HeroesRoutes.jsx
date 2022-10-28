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
                <Route path='heroes-spa/marvel' element={ <MarvelPage />}/> 
                <Route path='heroes-spa/dc' element={ <DcPages />}/> 

                <Route path='heroes-spa/search' element={ <SearchPage />}/> 
                <Route path='heroes-spa/hero/:id' element={ <HeroPage />}/> 
                // Navigate ruta que apuntara por defecto en caso que el url no coincida 
                <Route path='heroes-spa/' element={ <Navigate to="/marvel"/> }/> 
            </Routes>   
        </div>
    </>
  )
}
