import { Pencil, Trash2, Heart } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { openDeletePopup, closeDeletePopup, openEmpolyeePopup } from "../Store/features/popup/popupSlice";
import DeletePopup from "./DeletePopup";
import { updateEmployee } from "../Store/features/empolyee/employeeThunk";
const EmployeeList = () => {
  const popup = useSelector(state => state.popupReducer.deletePopup);
  const data = useSelector(state => state.employeeReducer.employess);
  const dispatch = useDispatch();

  const handleHighlight = (details) => {

    dispatch(updateEmployee({
      id: details.id,
      details: { ...details, highlight: !details.highlight }
    }))
  }
  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen px-6 py-4">
      {data.map((emp) => (
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
            <button onClick={() => dispatch(openEmpolyeePopup(emp))} className="hover:text-blue-800">
              <Pencil size={22} />
            </button>
            <button onClick={() => dispatch(openDeletePopup(emp.id))} className="hover:text-red-700">
              <Trash2 size={22} />
            </button>
            <button onClick={(() => handleHighlight(emp))} className={`transition-all duration-300 transform hover:scale-125 ${emp?.highlight ? 'text-pink-500 fill-pink-500 scale-110 drop-shadow-lg drop-shadow-pink-500/50' : 'text-gray-400 hover:text-pink-400'}`}>
              <Heart size={22} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;