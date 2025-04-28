import React from 'react'

function Hero() {
    return (
        <section className="hero-banner">
            <div className="container mx-auto flex pt-10" > {/*To center a container mx-auto */}
                <div className="wrapper hidden md:flex flex-1 space-x-6 items-center pt-40 pb-40">
                    
                    <div className="content-wrap flex-col  w-full max-w-xl text-left">
                        <h1 className="mb-4 text-6xl font-black text-gray-900 leading-18">Build the Next Great Thing</h1> {/* leading normal ie.line-height:normal*/}
                        <p className="text-[#4a5565] text-xl mb-6">Are you ready to start your adventure and start building the next greatest SAAS app on the market?</p>
                        
                        <div className="btn-wrap">
                            <a href="#" className="text-white font-semibold bg-[#4f3af7] pt-3 pb-3 pr-6 pl-6 rounded">Signup Today!</a>
                        </div>
                        <div className="flex-col mt-25">
                            <p className="text-[#4a5565] mb-4 uppercase tracking-[2px] text-[14px]">Integrates With</p> {/* tracking means letter-spacing */}
                            <div className="flex">
                                <img src="/images/stripe.svg" className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer" />
                                <img src="/images/github.svg" className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer" />
                                <img src="/images/vinmo.svg" className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer" />
                                <img src="/images/slack.svg" className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer" />
                                <img src="/images/mailchimp.svg" className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="image-wrap">
                        <img src="/images/macbook-mockup.png" alt="Hero Banner" className="ml-[17%] w-full h-full"/>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Hero