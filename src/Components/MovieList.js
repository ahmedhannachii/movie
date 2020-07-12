import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => {
    const {films} = (props)
    return (
        <div className="list">
            {
                films.map(item=>{
                    return(
                        <>
                        <MovieCard film={item} />

                        </>
                    )
                })
            }
            
        </div>
    )
}



export default MovieList
