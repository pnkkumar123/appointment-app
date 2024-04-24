import React from 'react'
import Client from './Client'
import Services from './Services'
import Team from './Team'

function Home() {
  return (
    <div>
      
      <div className="services">
        <Services/>
      </div>
      <div className="team">
        <Team/>
      </div>
        <div className="client">
        <Client/>
        </div>
    </div>
  )
}

export default Home