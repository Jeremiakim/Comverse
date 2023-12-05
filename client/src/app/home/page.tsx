import Image from "next/image"


const HomePage = ()=>{
    return(
        <>
              <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center w-full">
        <div className="max-w-screen-xl m-0 sm:my-10 bg-[#00619a] shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-10">
            <div className="my-10 flex align-items justify-center ">
              <p className="text-white text-2xl xl:text-4xl font-extrabold mb-5">
                Chuck Taylor All Star High Top
              </p>
            </div>
          </div>
          {/* <div className="border-r-2 border-gray-300"></div> */}
          <div className="flex-1 hidden lg:flex">
            <Image 
                src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29udmVyc2V8ZW58MHx8MHx8fDA%3D"
                alt=""
                className="rounded-r-lg"
            />
          </div>
        </div>
      </div>
        </>
    ) 
}

export default HomePage