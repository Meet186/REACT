import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { closeDeletePopup, closeEmployeePopup } from '../Store/features/popup/popupSlice';
const EmpolyeePopup = () => {
        const popup = useSelector(state => state.popupReducer.empolyeePopup);
        
        // console.log(popup);
        const dispatch = useDispatch();
        if(!popup) return null;
        return (
            <div onClick={()=> dispatch(closeEmployeePopup())}
             
                
             className="fixed inset-0 flex items-center justify-center z-50">                
                {/* Overlay */}
                <div 
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    
                ></div>

                {/* Modal */}
                <div onClick={(e)=> e.stopPropagation()} className="relative bg-gray-900/90 backdrop-blur-md text-white rounded-xl shadow-xl w-full max-w-md p-6 z-10 border border-gray-700">

                    <h2 className="text-lg font-semibold mb-4">
                        Employee Details
                    </h2>

                    <form  className="space-y-3">

                        {/* Profile URL */}
                        <div>
                            <label className="text-sm text-gray-400">Profile Url</label>
                            <input
                                type="text"
                                name="profileUrl"
                                placeholder="Profile Url"
                              
                                className="w-full mt-1 p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        {/* Name */}
                        <div>
                            <label className="text-sm text-gray-400">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                               
                      
                                className="w-full mt-1 p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-sm text-gray-400">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                        
                            
                                className="w-full mt-1 p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>

                        {/* Bio */}
                        <div>
                            <label className="text-sm text-gray-400">Bio</label>
                            <textarea
                                name="bio"
                                placeholder="Bio"
                               
                                rows="3"
                                className="w-full mt-1 p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full mt-2 bg-black hover:bg-gray-800 border border-gray-700 py-2 rounded font-medium"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    export default EmpolyeePopup
