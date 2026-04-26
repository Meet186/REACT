import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { closeDeletePopup, closeEmployeePopup } from '../Store/features/popup/popupSlice';
import { postEmployee } from '../Store/features/empolyee/employeeThunk';
const EmpolyeePopup = () => {
    const popup = useSelector(state => state.popupReducer.empolyeePopup);
    const dispatch = useDispatch();
    const [formDetails, setFormDetails] = useState({
        profileurl: '',
        name: '',
        email: '',
        bio: '',
        highlight: false,
    })

    const handleSumbit = async () => {


        await dispatch(postEmployee(formDetails));
        dispatch(closeEmployeePopup());
        setFormDetails({
            profileurl: '',
            name: '',
            email: '',
            bio: '',
            highlight: false,
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails({
            ...formDetails,
            [name]: value,
        })
    }
    if (!popup) return null;
    return (
        <div onClick={() => dispatch(closeEmployeePopup())}


            className="fixed inset-0 flex items-center justify-center z-50">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"

            ></div>

            {/* Modal */}
            <div onClick={(e) => e.stopPropagation()} className="relative bg-gray-900/90 backdrop-blur-md text-white rounded-xl shadow-xl w-full max-w-md p-6 z-10 border border-gray-700">

                <h2 className="text-lg font-semibold mb-4">
                    Employee Details
                </h2>

                <form className="space-y-3"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSumbit();
                    }}>

                    {/* Profile URL */}
                    <div>
                        <label className="text-sm text-gray-400">Profile Url</label>
                        <input
                            type="text"
                            name="profileurl"
                            placeholder="Profile Url"
                            onChange={handleChange}
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
                            value={formDetails.name}
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                            rows="3"
                            className="w-full mt-1 p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full mt-2 bg-black hover:bg-gray-800 border border-gray-700 py-2 rounded font-medium"
                        onSubmit={handleSumbit}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EmpolyeePopup
