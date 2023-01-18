import React from 'react'
import NgoHeader from './NgoLandingPageComponants/NgoHeader/NgoHeader'
import NgoStats from './NgoLandingPageComponants/NgoStats/NgoStats'
import NgoVision from './NgoLandingPageComponants/NgoVision/NgoVision'
import NgoWork from './NgoLandingPageComponants/NgoWork/NgoWork'

const NgoLandingPage = () => {
  return (
    <div>
      <NgoHeader/>
      <NgoStats/>
      <NgoWork/>
      <NgoVision/>
    </div>
  )
}

export default NgoLandingPage
