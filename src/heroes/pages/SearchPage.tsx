// aplicar directamente el tipo { q: string } en la desestructuración de la variable q. 
// Esto le indica a TypeScript que la propiedad q estará presente en el objeto resultante de queryString.parse(location.search) 
// y tendrá un tipo de string


import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString, { ParsedQuery } from 'query-string';
import { HeroCard } from '../components';
import { FormEvent } from 'react';
import { getHeroesByName } from '../helpers';


export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()
  // console.log({location});
  

  const {q = ''}: {q: string} = queryString.parse(location.search) as { q: string } // as ParsedQuery<string> & { q: string };
  // const qString = typeof q === 'string' ? q : ''; // otra pocion
  // const heroes = getHeroesByName(qString);
  
  const heroes = getHeroesByName(q)

  const showSearch = q.length === 0
  const showError = (q.length > 0) && (heroes.length === 0)
  
  const {searchText, onInputChange} = useForm({
    searchText: q
  })

  const onSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    
    event.preventDefault()
    // if (searchText.trim().length <= 1) return
    // console.log({searchText});

    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input 
              type="text" 
              placeholder="Search a hero" 
              className="form-control" 
              name="searchText" 
              autoComplete="off" 
              value={searchText}
              onChange={onInputChange}  
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* { Forma 1
            (q === '')
              ? <div className="alert alert-primary">Search a hero</div>
              : (heroes.length === 0) && <div className="alert alert-danger"> No gero with <b>{q}</b> </div>
          } */}

          {/* Forma 2 */}
          <div className="alert alert-primary animate__animated animate__fadeIn"
            style={{display: showSearch ? '' : 'none'}}>
              Search a hero
          </div>
          <div aria-label='alert-danger' className="alert alert-danger animate__animated animate__fadeIn" 
            style={{display: showError ? '' : 'none'}}> 
            No gero with <b>{q}</b> 
          </div>

          {

            heroes?.map(hero => (
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
        </div>
      </div>
    </>
  )
}
