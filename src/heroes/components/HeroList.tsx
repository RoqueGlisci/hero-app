import { HeroCard } from "./"
import {getHeroesByPublisher} from '../helpers';
import {useMemo} from 'react';

export const HeroList = ({publisher}: {publisher: string}) => {

    //const heroes = getHeroesByPublisher(publisher)//si el publisher del heroe existe lo manda. lo tra de data/heroes.ts
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    // {
    //   heroes.map(hero => (
    //       <li key={hero.id}>
    //           {hero.superhero}
    //       </li>
    //   ))
    //  }

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">

      {
        heroes.map(hero => (
            <HeroCard 
              key={hero.id}
              {...hero}
            />
        ))
      }

    </div>
  )
}
