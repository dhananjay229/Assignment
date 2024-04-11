import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className=" bg-gray-50 dark:bg-black items-center flex flex-col overflow-hidden"/* " overflow-hidden flex flex-col items-center w-screen bg-gray-50" */ data-testid="layout-div">
      <Header />
      <div className="text-black dark:bg-zinc-900 saturate-50 lg:mx-[100px]  body-width bg-white overflow-hidden" data-testid="main-div">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout