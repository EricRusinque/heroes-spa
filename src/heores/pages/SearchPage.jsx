import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers/getHeroesByName'
import { HeroCard } from '../components/HeroCard'
export const SearchPage = () => {

  
  const navigate = useNavigate();
  
  const location = useLocation();
  
  const { q = ''} = queryString.parse( location.search )
  
  const { searchText, onInputChange } = useForm({
    searchText: q
  });
  
  const heroes = getHeroesByName( q );

  console.log(heroes)

  const onSearchSubmit = ( event ) => {
    event.preventDefault();

    if( searchText.trim().length <= 2  ) return alert('Introduce algo') ;

    navigate(`?q=${ searchText }`);
    
  }




  return (
    <>
      <h1>SearchPage</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr/>
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text"
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              value={ searchText }
              onChange={ onInputChange }
              autoComplete='off'
            />

            <button className='btn btn-outline-primary mt-2'>
              Search
            </button>

          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr/>
{/* 
          <div className="alert alert-primary">
            Search a hero
          </div>
          <div className="alert alert-danger">
            No hero With <b> ABC </b>
          </div> */}

          {
            heroes.map( hero => (
                <HeroCard key={ hero.id} {...hero}/> 
            ))
          }

        </div>
      </div>
    </>
  )
}
