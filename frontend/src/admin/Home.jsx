import React from 'react'
import Client from './Client'
import Services from './Services'
import Team from './Team'
import styled from 'styled-components'

function Home() {
  return (
    <Wrapper>
      
      <div className="services">
        <Services/>
      </div>
      <div className="team">
        <Team/>
      </div>
        <div className="client">
        <Client/>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
width:100%;

`
export default Home