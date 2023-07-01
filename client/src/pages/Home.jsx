import React from 'react'
import Share from '../Components/Share'
import Posts from '../Components/Posts'

const Home = () => {

  return (
    <div className="py-5 lg:px-20 sm:px-10 flex flex-col gap-5 bg-secondary">
      <Share />
      <Posts />
    </div>
  )
}

export default Home