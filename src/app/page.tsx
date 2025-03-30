import { Hero } from 'components'
import Sidebar from 'components/sidebar/sidebar'
import Layout from 'layout/layout'
import React from 'react'
import Content from 'components/content/content'

const Home = () => {
  return (
    <div className='bg-black text-white'>
    <Layout>
      <Hero/>
      <div className='flex flex-col md:flex-row mt-8 gap-4 md:gap-8'>
        <Sidebar/>
        <Content/>
      </div>
    </Layout>
    </div>
  )
}

export default Home
