import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDeletePopup } from "../Store/features/popup/popupSlice";

const DeletePopup = ({ onConfirm }) => {
  const dispatch = useDispatch();
  const popup = useSelector(
    (state) => state.popupReducer.deletePopup
  );

  if (!popup) return null;

  return (
    <div
      onClick={() => dispatch(closeDeletePopup())} 
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()} // ❗ prevent close when clicking inside
        className="relative bg-gray-900 text-white rounded-xl shadow-xl w-full max-w-sm p-6 z-10 border border-gray-700"
      >
        <h2 className="text-lg font-semibold mb-3">
          Delete Employee
        </h2>

        <p className="text-sm text-gray-400 mb-5">
          Are you sure you want to delete this employee?
        </p>

        <div className="flex justify-end gap-3">
          {/* Cancel */}
          <button
            onClick={() => dispatch(closeDeletePopup())}
            className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700"
          >
            Cancel
          </button>

          {/* Delete */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // ❗ prevent parent click
              onConfirm?.();
              dispatch(closeDeletePopup());
            }}
            className="px-4 py-2 rounded bg-red-600 hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;