import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { CardSeries } from '../components'
import { discoverSeries } from '../services/Api'

function Series() {
  const discoverSeriesData = useLoaderData()
  return (
    <div>
      {discoverSeriesData.results.map(elem => (
        <CardSeries elem={elem} />
      ))}
    </div>
  )
}

export default Series

export function discoverSeriesLoader(){
  return discoverSeries()
}