import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';



function GameDetails () {
    let {id} = useParams()
    const [detail, setDetail] = useState([])

    useEffect(() => {
        const getGame = () => {
            fetch(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then(resp => resp.json())
            .then(data => setDetail(data))
        }
        getGame()
    }, [id])

    return (
        <div>
            {detail.map((e) => (
                    <div>
                    {e.name}
                    </div>
                    )
        )}
    </div>



    )
}

export default GameDetails;