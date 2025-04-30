import React from 'react'

function Testimonial() {
    return (
        <section className="border-t border-gray-200 pt-40 pb-40">
            <div className="container mx-auto"> {/* To center a container mx-auto */}
                <div className="items-center">

                    <h2 className="font-medium text-indigo-500 uppercase text-center">Our customers love our product</h2>
                    <h3 className="mb-4 text-6xl font-black text-gray-900 leading-18 text-center">Testimonials</h3>
                    <p className="text-[#4a5565] text-xl mb-6 text-center">Don't just take our word for it, read from our extensive list of case studies and customer testimonials.</p>
                </div>
                <div className="flex justify-center">
                    <div className="col-three p-6">
                        <div className="card-wrap relative flex  px-12 bg-[#f6f3f4]  py-6 rounded-2xl">
                            <img src="/images/testimonial1.svg" className="w-10 h-10 left-2 top-3 rounded-full absolute" />

                            <div>
                                <p className="relative text-base text-gray-600">I'm loving these templates! Very nice features and layouts.</p>
                                <h3 className="relative mt-3 font-medium text-gray-950">Sandra Walton
                                    <span className="relative text-sm text-gray-500"> - CEO SomeCompany</span>
                                </h3>
                            </div>
                            <div className="image-wrap">
                                <img src="/images/review1.avif" className="w-24 h-24 rounded-full" />
                            </div>
                        </div>

                    </div>
                    <div className="col-three p-6">
                        <div className="card-wrap relative flex  px-12 bg-[#f6f3f4]  py-6 rounded-2xl">
                            <img src="/images/testimonial1.svg" className="w-10 h-10 left-2 top-3 rounded-full absolute" />

                            <div>
                                <p className="relative text-base text-gray-600">I'm loving these templates! Very nice features and layouts.</p>
                                <h3 className="relative mt-3 font-medium text-gray-950">Sandra Walton
                                    <span className="relative text-sm text-gray-500"> - CEO SomeCompany</span>
                                </h3>
                            </div>
                            <div className="image-wrap">
                                <img src="/images/review1.avif" className="w-24 h-24 rounded-full" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="col-three p-6">
                        <div className="card-wrap relative flex  px-12 bg-[#f6f3f4]  py-6 rounded-2xl">
                            <img src="/images/testimonial1.svg" className="w-10 h-10 left-2 top-3 rounded-full absolute" />

                            <div>
                                <p className="relative text-base text-gray-600">I'm loving these templates! Very nice features and layouts.</p>
                                <h3 className="relative mt-3 font-medium text-gray-950">Sandra Walton
                                    <span className="relative text-sm text-gray-500"> - CEO SomeCompany</span>
                                </h3>
                            </div>
                            <div className="image-wrap">
                                <img src="/images/review1.avif" className="w-24 h-24 rounded-full" />
                            </div>
                        </div>

                    </div>
                    <div className="col-three p-6">
                        <div className="card-wrap relative flex  px-12 bg-[#f6f3f4]  py-6 rounded-2xl">
                            <img src="/images/testimonial1.svg" className="w-10 h-10 left-2 top-3 rounded-full absolute" />

                            <div>
                                <p className="relative text-base text-gray-600">I'm loving these templates! Very nice features and layouts.</p>
                                <h3 className="relative mt-3 font-medium text-gray-950">Sandra Walton
                                    <span className="relative text-sm text-gray-500"> - CEO SomeCompany</span>
                                </h3>
                            </div>
                            <div className="image-wrap">
                                <img src="/images/review1.avif" className="w-24 h-24 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial