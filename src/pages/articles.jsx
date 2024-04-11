import Article from '@/components/article/Article'
import Heading from '@/components/article/Heading'
import React from 'react'
import '@/app/globals.css';
import Layout from '@/components/utility/Layout';

const articles = () => {
  return (
    <Layout>
        {/* <Heading /> */}
        <Article />
    </Layout>
  )
}

export default articles