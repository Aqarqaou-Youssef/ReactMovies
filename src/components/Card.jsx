import React from 'react'

function Card({elem}) {
  return (
    <div className='mx-4 my-2'>
      <h1>{elem.original_title}</h1>
      <p>{elem.overview}</p>
      <img src={"https://image.tmdb.org/t/p/w500" + elem.poster_path} className="w-30 h-48 rounded" />
    </div>
  )
}

export default Card