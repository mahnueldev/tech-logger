import React, { Fragment } from 'react'
import AddBtn from '../components/layout/AddBtn'
import SearchBar from '../components/layout/SearchBar'
import AddLogModal from '../components/logs/AddLogModal'
import EditLogModal from '../components/logs/EditLogModal'
import Logs from '../components/logs/Logs'
import AddTechModal from '../components/techs/AddTechModal'

const Home = () => {
  return (
    <Fragment>
      <AddTechModal/>
      <EditLogModal/>
      <AddLogModal/>
      <AddBtn/>
    <SearchBar/>
    <Logs/>
    </Fragment>
  )
}

export default Home