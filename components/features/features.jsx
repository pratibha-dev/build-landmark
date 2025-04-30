import React from 'react'

function Features() {
  return (
    <section className="border-t border-gray-200 pt-40 pb-40">
      <div className="container mx-auto"> 
        <div className="items-center">
          <h2 className="font-medium text-indigo-500 uppercase text-center">Our Features</h2>
          <h3 className="mb-4 text-6xl font-black text-gray-900 leading-18 text-center">Built and Designed with you in Mind</h3>
        </div>
        <div className="flex items-center justify-center">
          <div className="col-three w-full max-w-md p-8">
            <div className="card-wrap relative flex flex-col items-center justify-center w-full h-full p-20  ">
              <img src="/images/featureicon1.svg" className="absolute w-full h-full" />
              <img src="/images/featureicon2.svg" className="relative w-20 h-20" />
              <h4 className="relative mt-6 text-lg font-bold">Automated Tools</h4>
              <p className="relative  mt-2 text-center text-gray-600 px-10">Automate your workflow with these top of the line marketing tools.</p>
            </div>
          </div>
          <div className="col-three w-full max-w-md p-8">
            <div className="card-wrap relative flex flex-col items-center justify-center w-full h-full p-20  ">
              <img src="/images/featureicon3.svg" className="absolute w-full h-full  fill-current" />
              <img src="/images/featureicon4.svg" className="relative w-20 h-20" />
              <h4 className="relative mt-6 text-lg font-bold">Automated Tools</h4>
              <p className="relative  mt-2 text-center text-gray-600 px-10">Automate your workflow with these top of the line marketing tools.</p>

            </div>

          </div>
          <div className="col-three w-full max-w-md p-8">
            <div className="card-wrap relative flex flex-col items-center justify-center w-full h-full p-20  ">
              <img src="/images/featureicon5.svg" className="absolute w-full h-full  fill-current" />
              <img src="/images/featureicon6.svg" className="relative w-20 h-20" />

              <h4 className="relative mt-6 text-lg font-bold">Automated Tools</h4>
              <p className="relative  mt-2 text-center text-gray-600 px-10">Automate your workflow with these top of the line marketing tools.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Features