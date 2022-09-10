import React, { Fragment } from 'react'
import SearchBar from '../components/layout/SearchBar'
import Logs from '../components/logs/Logs'

const Home = () => {
  return (
    <Fragment>
    <SearchBar/>
    <Logs/>
    </Fragment>
  )
}

export default Home