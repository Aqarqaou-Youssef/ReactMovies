import React from 'react'

function CardSeries({elem}) {
  return (
    <div className='mx-4 my-2'>
      {console.log(elem)}
      <h1>{elem.original_name}</h1>
      <h1>{elem.name}</h1>
      <p>{elem.overview}</p>
      <img src={"https://image.tmdb.org/t/p/w500" + elem.poster_path} className="w-30 h-48 rounded" />
    </div>
  )
}

export default CardSeries