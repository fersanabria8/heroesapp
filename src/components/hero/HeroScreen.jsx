import {useMemo } from 'react';
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";



export const HeroScreen = () => {

  const { heroeId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById( heroeId ), [ heroeId ] );

  const handleReturn = () => {
    navigate( -1 );
  };

  if (!hero ){
    return <Navigate to='/' />
  };

  // vamos a desestructurar hero
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;
  const imagePath = `/assets/heroes/${ id }.jpg`

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
        src= { imagePath }
        alt= { superhero }
        className="img-thumbnail animate__animated animate__bounceInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{ superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> { alter_ego}</li>
          <li className="list-group-item"> <b>Publisher:</b> { publisher }</li>
          <li className="list-group-item"> <b>First Appearance:</b> { first_appearance }</li>
        </ul>

        <h3 className="mt-3">Characters</h3>
        <p>{ characters }</p>

        <button
          className="btn btn-outline-info"
          onClick={ handleReturn }
        >
          Regresar
        </button>
      </div>
    </div>
  )
}
