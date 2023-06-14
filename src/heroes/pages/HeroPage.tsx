import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"
import { useMemo } from "react"

export const HeroPage = () => {

  // const params = useParams()//muestra los parametros de las rutas
  // console.log(params);

  const { heroId} = useParams()
  // console.log(heroId);
  // const hero = heroId ? getHeroById(heroId) : undefined;
  const hero = useMemo(() => ( heroId ? getHeroById(heroId): undefined), [heroId]) //useMemo va a disparar el call back cada vez que sus dependencia cambien 
  // console.log(hero);
  
  const navigate = useNavigate()
  const onNavigateBack = () => {
      // navigate('/marvel',{
      //   replace: true
      // })
      navigate(-1)//regresa a la pagina anterior 
  }

  if (!hero) {
    return <Navigate to="/marvel"/>
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`/assets/heroes/${heroId}.jpg`} alt={hero.superhero} className="img-thumbnail animate__animated animate__fadeInLeft"/>
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b>{hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b>{hero.publisher}</li>
          <li className="list-group-item"><b>First appearance:</b>{hero.first_appearance}</li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button 
          className="btn btn-outline-primary"
          onClick={onNavigateBack}>
            Regresar
          </button>
      </div>
    </div>
  )
}
