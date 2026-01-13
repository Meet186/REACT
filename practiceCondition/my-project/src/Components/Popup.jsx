import React from 'react'

const Popup = ({popup,setPopup,title}) => {
  return (
    <>
      {popup && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          
          <div className="relative w-full max-w-[40rem] bg-black text-white rounded-2xl p-10">
            
            <button
              className="absolute top-4 right-4 text-red-500 text-xl"
              onClick={() => setPopup(false)}
            >
              X
            </button>

            <h1 className="text-2xl">🤷‍♀️ Confirm</h1>
            <p className="text-lg my-5">
              {title}
            </p>

            <div className="flex gap-8 justify-center mt-5">
              <button className=" red px-6 py-2 rounded">No</button>
              <button className="green px-6 py-2 rounded">Yes</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Popup
