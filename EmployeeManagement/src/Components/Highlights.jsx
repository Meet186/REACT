import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Pencil, Trash2, Heart, ArrowLeft } from "lucide-react";
import { openEmpolyeePopup, openDeletePopup, toggleView } from '../Store/features/popup/popupSlice';
import { updateEmployee } from "../Store/features/empolyee/employeeThunk";

const Highlights = () => {
 const data = useSelector(state => state.employeeReducer.employess);
 const dispatch = useDispatch();
 
 const filterData = data.filter((el)=>{
    return el.highlight === true;
 })

 const handleHighlight = (details)=>{
    dispatch(updateEmployee({
      id : details.id,
      details: { ...details, highlight : !details.highlight }
    }))
 }

  return (
     <div className="bg-gray-950 text-gray-200 min-h-screen px-6 py-4">
      {/* Back Button */}
      <div className="mb-6">
        <button 
          onClick={() => dispatch(toggleView())}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300"
        >
          <ArrowLeft size={20} />
          Back to Employees
        </button>
      </div>

      {/* Highlights List */}
      {filterData.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No highlighted employees yet</p>
        </div>
      ) : (
        filterData.map((emp) => (
          <div
            key={emp?.id}
            className="flex items-start justify-between border-b border-gray-800 py-4"
          >
            {/* Left Section */}
            <div className="flex gap-4">
              <img
                src={emp?.profileurl}
                alt={emp?.name}
                className="w-10 h-10 rounded-full object-cover"
              />

              <div>
                <h2 className="font-semibold">{emp?.name}</h2>
                <p className="text-sm text-gray-400">{emp?.email}</p>
                <p className="text-sm mt-1 text-gray-300 max-w-xl">
                  {emp?.bio}
                </p>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex gap-4 text-gray-400">
              <button onClick={()=> dispatch(openEmpolyeePopup(emp))} className="hover:text-blue-800 transition">
                <Pencil size={22} />
              </button>
              <button onClick={()=> dispatch(openDeletePopup(emp.id)) } className="hover:text-red-700 transition">
                <Trash2 size={22} />
              </button>
              <button onClick={(()=> handleHighlight(emp))} className={`transition-all duration-300 transform hover:scale-125 ${emp?.highlight ? 'text-pink-500 fill-pink-500 scale-110 drop-shadow-lg drop-shadow-pink-500/50' : 'text-gray-400 hover:text-pink-400'}`}>
                <Heart size={22} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Highlights
