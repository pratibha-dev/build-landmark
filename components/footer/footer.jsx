import React from 'react'

function Footer() {
    return (
        <section className="footer  border-t  border-gray-200 pt-12 pb-8">
            <div className="container flex  mx-auto">
                <div className="row  flex w-full">
                    <div className="footer-content flex  w-full px-14 ">
                        <div className="footer-logo flex-col ">
                            <a href="#">
                                <img src="/images/logo.svg" className="h-10 w-10 "></img>
                            </a>
                            <p className="mt-6 mr-4 text-base text-gray-500 w-1/2">Crafting the next-level of user experience and engagement.</p>
                        </div>
                        <div className="footer-links-outer flex w-full">
                            <div className="col-three flex w-full mt-6 text-sm justify-between ">
                                <ul className="footer-links flex-col p-0 font-medium text-left text-gray-700">
                                    <li className="px-3 py-2 mt-5 font-bold text-gray-800 uppercase"> Product </li>
                                    <li>
                                        <a href="#" className="px-3 py-2 font-medium text-gray-500">Features</a>
                                    </li>
                                    <li>
                                        <a href="#" className="px-3 py-2 font-medium text-gray-500">Integration</a>
                                    </li>
                                    <li>
                                        <a href="#" className="px-3 py-2 font-medium text-gray-500">Pricing</a>
                                    </li>

                                </ul>
                                <ul className="footer-links flex-col p-0 font-medium text-left text-gray-700">
                                    <li className="px-3 py-2 mt-5 font-bold text-gray-800 uppercase"> Product </li>
                                    <li>
                                        <a href="#" className="px-3 py-2 font-medium text-gray-500">Features</a>
                                    </li>
                                    <li>
                                        <a href="#" className="px-3 py-2 font-medium text-gray-500">Integration</a>
                                    </li>
                                    <li>
                                        <a href="#" className="px-3 py-2 font-medium text-gray-500">Pricing</a>
                                    </li>

                                </ul>
                                <ul className="footer-links flex-col p-0 font-medium text-left text-gray-700">
                                    <li className="px-3 py-2 mt-5 font-bold text-gray-800 uppercase"> Product </li>
                                    <li>
                                        <a href="#" className="px-3 py-2 font-medium text-gray-500">Features</a>
                                    </li>
                                    <li>
                                        <a href="#" className="px-3 py-2 font-medium text-gray-500">Integration</a>
                                    </li>
                                    <li>
                                        <a href="#" className="px-3 py-2 font-medium text-gray-500">Pricing</a>
                                    </li>

                                </ul>

                                <div className="footer-links flex-col p-0 font-medium text-left text-gray-700">
                                    <div className="px-3 py-2 mt-5 font-bold text-gray-800 uppercase"> Follow Us </div>
                                    <div className="px-3 py-2 mt-5 text-gray-200 mx-auto flex justify-center">
                                        <a href="#">
                                            <img src="/images/facebook.svg" className="w-5 h-5 mr-6"></img>
                                        </a>
                                        <a href="#">
                                            <img src="/images/twitter.svg" className="w-5 h-5 mr-6"></img>
                                        </a>


                                        <a href="#">
                                            <img src="/images/githubicon.svg" className="w-5 h-5"></img>
                                        </a>
                                    </div>

                                </div>


                            </div>

                        </div>


                    </div>

                </div>
                
            </div>
            <div className="pt-4 pt-6 mt-10 text-center text-gray-500 border-t border-gray-100"> All rights reserved.</div> 
        </section>

    )
}

export default Footer
