import React from 'react'
import Link from 'next/link'

// class MovieList extends React.Component {

const MovieList = (props) => {
  const MAX_DESCRIPTION_LENGTH = 200

  const shorten = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substr(0,maxLength) + '...'
    }
    else {
      return text
    }
  }

  const renderMovie = (movie) => {
    return (
          <Link key={movie.id}  href={`/movies/${movie.id}`}>
            <div  className="clickable col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                  <a ><img className="card-img-top" src={movie.image} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">{movie.name}</a>
                  </h4>
                  <p className="card-text">{ shorten(movie.description, MAX_DESCRIPTION_LENGTH) }</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{movie.rating}</small>
                </div>
              </div>
            </div>  
          </Link>
      )
  }
  // render() {
    return (
      <>
      { 
        props.movies.map((movie) => {
          return (
            renderMovie(movie)
          )      
        })
      }

      </>
    )
  // }
}

export default MovieList