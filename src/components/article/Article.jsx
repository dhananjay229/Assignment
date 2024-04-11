import React from 'react'
import Posts from '../home/Posts'
import Heading from './Heading'

const Article = () => {
  return (
    <div className='lg:mx-[50px]'>
        <Heading />
        <Posts />
    </div>
  )
}

export default Article