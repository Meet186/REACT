import { Pencil, Trash2, Heart } from "lucide-react";
import { useSelector,useDispatch } from "react-redux";
import { openDeletePopup,closeDeletePopup } from "../Store/features/popup/popupSlice";
import DeletePopup from "./DeletePopup";
const employees = [
  {
    id: 1,
    name: "Captain",
    email: "captain@gmail.com",
    desc: "Since Iron Man first hit the big screen, it's been a nonstop barrage of superheroes...",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Moon Knight",
    email: "moon@gmail.com",
    desc: "Moon Knight is charming but feels disconnected from the rest of the MCU...",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Iron Fist",
    email: "iron@gmail.com",
    desc: "Iron Fist is one of the weakest MCU shows and feels forgettable...",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

const EmployeeList = () => {
       const popup = useSelector(state => state.popupReducer.deletePopup);
       const dispatch = useDispatch();
       console.log(popup);
       
       
       
       
  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen px-6 py-4">
      {employees.map((emp) => (
        <div
          key={emp.id}
          className="flex items-start justify-between border-b border-gray-800 py-4"
        >
          {/* Left Section */}
          <div className="flex gap-4">
            <img
              src={emp.avatar}
              alt={emp.name}
              className="w-10 h-10 rounded-full object-cover"
            />

            <div>
              <h2 className="font-semibold">{emp.name}</h2>
              <p className="text-sm text-gray-400">{emp.email}</p>
              <p className="text-sm mt-1 text-gray-300 max-w-xl">
                {emp.desc}
              </p>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex gap-4 text-gray-400">
            <button className="hover:text-blue-800">
              <Pencil size={22} />
            </button>
            <button onClick={()=> dispatch(openDeletePopup()) } className="hover:text-red-700">
              <Trash2 size={22} />
            </button>
            <button className="hover:text-pink-500">
              <Heart size={22} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;