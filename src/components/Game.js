import { NavLink } from "react-router-dom"


function Game ( { name, background_image, released, id, clip }) {
    return (
        <div>
            <h3>{name}</h3>
            <div className="img-game">
            <img src={background_image} alt={name} />
            </div>
            <p>Date de sortie : {released}</p>
            <NavLink to={`/games/${id}`}>
                <button>Game detail</button>
            </NavLink>

        </div>


    )
}

export default Game;