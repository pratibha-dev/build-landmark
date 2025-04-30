import React from 'react'

function Pricing() {
  return (
    <section className="border-t border-gray-200 pt-40 pb-40" id="pricing">
      <div className="container mx-auto"> 
        <div className="items-center">
          <h2 className="font-medium text-indigo-500 uppercase text-center">Our Pricing</h2>
          <h3 className="mb-4 text-6xl font-black text-gray-900 leading-18 text-center">Simple, Transparent Pricing for Everyone</h3>
        </div>
  
        <div className="flex items-center justify-center">
          <div className="col-three w-full max-w-md p-8">
            <div className="card-wrap relative flex flex-col items-center justify-center w-full h-full p-20">
              <div className="absolute w-full h-full bg-white border border-gray-200 rounded-lg shadow-lg shadow-inner">
              </div>
              
              <p className="relative text-5xl font-bold">$48</p>
              <h4 className="relative mt-6 text-lg font-bold">Basic Plan</h4>
              <p className="relative  mt-2 text-center text-gray-600 px-10">Automate your workflow with these top of the line marketing tools.</p>

            </div>

          </div>
          <div className="col-three w-full max-w-md p-8">
            <div className="card-wrap relative flex flex-col items-center justify-center w-full h-full p-20  ">
              <div className="absolute w-full h-full bg-white border border-gray-200 rounded-lg shadow-lg shadow-inner">
              </div>
              <p className="relative text-5xl font-bold">$98</p>
              <h4 className="relative mt-6 text-lg font-bold">Basic Plan</h4>
              <p className="relative  mt-2 text-center text-gray-600 px-10">Automate your workflow with these top of the line marketing tools.</p>

            </div>

          </div>
          <div className="col-three w-full max-w-md p-8">
            <div className="card-wrap relative flex flex-col items-center justify-center w-full h-full p-20  ">
              <div className="absolute w-full h-full bg-white border border-gray-200 rounded-lg shadow-lg shadow-inner">
              </div>
              <p className="relative text-5xl font-bold">$78</p>
              <h4 className="relative mt-6 text-lg font-bold">Basic Plan</h4>
              <p className="relative  mt-2 text-center text-gray-600 px-10">Automate your workflow with these top of the line marketing tools.</p>

            </div>

          </div>
        </div>
      </div>
    </section>

  )
}

export default Pricing