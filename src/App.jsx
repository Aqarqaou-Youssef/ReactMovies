import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { CardSeries } from './components'
import { Client, discoverMoviesLoader, discoverSeriesLoader, HomePage, RouteRouter, Series } from './pages'


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RouteRouter />}>
      <Route index element={<HomePage />} loader={discoverMoviesLoader} />
      <Route path='/series' element={<Series />} loader={discoverSeriesLoader} />
      <Route path='/client' element={<Client />} />
    </Route>
  )
)

function App() {
  return (
   <RouterProvider router={route} />
  )
}

export default App