import Gallery from '@/components/home/Gallery'
import HeroSection from '@/components/home/HeroSection'
import Posts from '@/components/home/Posts'
import SignUp from '@/components/home/SignUp'
import Work from '@/components/home/Work'
import Footer from '@/components/utility/Footer'
import Header from '@/components/utility/Header'
import React from 'react'

const HomePage = () => {
    return (
        // <div className='bg-black pl-[100px] pr-[100px]'>
        //     <div className='bg-zinc-900 py-[50px]'>
        <>
            <Header />
            <HeroSection />
            <Gallery />
            <div className="lg:flex flex-row">
                <Posts />
                <div className="flex flex-col lg:my-16 my-8">
                    <SignUp />
                    <Work />
                </div>
            </div>
            <Footer />
            </>
        // </div>
        // </div >
    )
}

export default HomePage