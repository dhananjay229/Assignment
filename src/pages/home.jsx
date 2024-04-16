"use client";
import Gallery from '@/components/home/Gallery'
import HeroSection from '@/components/home/HeroSection'
import Posts from '@/components/home/Posts'
import SignUp from '@/components/home/SignUp'
import Work from '@/components/home/Work'
// import Footer from '@/components/utility/Footer'
// import Header from '@/components/utility/Header'
import Layout from '@/components/utility/Layout'
import React, { useEffect } from 'react'

const HomePage = () => {

    useEffect(() => {
        if (localStorage.theme === "dark"){
          document.documentElement.classList.add('dark')
        }
      }, [])
    return (
        <>
            <Layout>
                <HeroSection />
                <Gallery />
                <div className="lg:flex flex-row lg:mx-[100px]">
                    <Posts />
                    <div className="flex flex-col lg:my-16 my-8 lg:ml-[50px]">
                        <SignUp />
                        <Work />
                    </div>
                </div>
            </Layout>
        </>

    )
}

export default HomePage
