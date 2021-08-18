import { useState, useEffect } from 'react';
import Game from './Game';


function GameList () {
    const [listGame, setListGame] = useState ([])
    const [top, setTop] = useState(true)
    const topRating = () => {setTop(!top)} 

    
        
    useEffect(() => {
        const getList = () => {
            fetch('https://apis.wilders.dev/wild-games/games/')
                .then(resp => resp.json())
                .then(data => setListGame(data))
        }
        getList()
    },[])
    

    
    
    return (
        <div>
            <button type="button" onClick={topRating}>{top ? 'All Games' : 'Top Rating'}</button>
            {listGame.filter((e) => top || e.rating > 4.5)
                     .map((e) => (
                         <Game {...e} />
                     ))   }
            
            {/*listGame.map(games => {
                return (
                    <Game {...games}/>
                )
            })*/}
        </div>



        



    )
}

export default GameList;