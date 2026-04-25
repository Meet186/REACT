import { Heart, Plus } from "lucide-react";
import EmpolyeePopup from "./EmpolyeePopup";
import { useSelector,useDispatch } from "react-redux";
import { openEmpolyeePopup } from "../Store/features/popup/popupSlice";
import DeletePopup from "./DeletePopup";
const Navbar = () => {
  const dispatch = useDispatch();
  const popup = useSelector(state => state.popupReducer.empolyeePopup);

  const handleChange = ()=>{
      dispatch(openEmpolyeePopup())
  }
  return ( 
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md
    sticky top-0 z-10     ">
     
      <EmpolyeePopup/>
      {/* Left: Title */}
      <h1 className="text-lg font-semibold tracking-wide">
        Employees
      </h1>

      {/* Right: Icons */}
      <div className="flex items-center gap-5">
        <button onClick={handleChange} className="hover:text-yellow-300 transition">
          <Plus size={30} />
        </button>
        <button className="hover:text-red-700 transition">
          <Heart size={30} />
        </button>
      </div>

    </nav>
  );
};

export default Navbar;