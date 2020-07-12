import React, {useState} from 'react'
import MovieList from './MovieList'

const Container = () => {

    
    const [films, setFilms] = useState([
 
        {id:1,name:'SpiderMan', rating:"5"},
        {id:2,name:'Seven', rating:"4"},
        {id:3,name:'Dark Knight', rating:"3"}
        ])
    return (
        <div className="container">
            <MovieList films={films} />
        </div>
    )
}


export default Container
