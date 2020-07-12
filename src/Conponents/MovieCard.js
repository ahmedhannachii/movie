import React from 'react'

const MovieCard = (props) => {
    const {film} = props
    return (
        <div className="movie" key={film.id}>
            <p>{film.name}</p>
            <img src="/bobine.png" alt="film" width="150px" />
            <p>Rating:{film.rating}</p>
            
        </div>
    )
}




export default MovieCard
