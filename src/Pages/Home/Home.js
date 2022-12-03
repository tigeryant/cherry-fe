import React from 'react'
import Nav from '../../Layouts/Nav/Nav'
import Dashboard from '../../Layouts/Dashboard/Dashboard'
import Footer from '../../Layouts/Footer/Footer'

const Home = () => {
  return (
    <>
      <div className='h-screen flex flex-col'>
        <Nav />
        <Dashboard />
      </div>
      <Footer />
    </>
  )
}

export default Home