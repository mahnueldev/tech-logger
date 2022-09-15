import React, { Fragment } from 'react'
import AddBtn from '../components/layout/AddBtn'
import SearchBar from '../components/layout/SearchBar'
import AddLogModal from '../components/logs/AddLogModal'
import EditLogModal from '../components/logs/EditLogModal'
import Logs from '../components/logs/Logs'
import AddTechModal from '../components/techs/AddTechModal'
import TechListModal from '../components/techs/TechListModal'

const Home = () => {
  return (
    <Fragment>
      <AddBtn/>
      <AddLogModal/>
      <TechListModal/>
      <AddTechModal/>
      <EditLogModal/>
    <SearchBar/>
    <Logs/>
    </Fragment>
  )
}

export default Home