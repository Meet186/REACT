import { Heart, Plus } from "lucide-react";
import EmpolyeePopup from "./EmpolyeePopup";
import { useSelector,useDispatch } from "react-redux";
import { openEmpolyeePopup, toggleView } from "../Store/features/popup/popupSlice";
import DeletePopup from "./DeletePopup";
const Navbar = () => {
  const dispatch = useDispatch();
  const popup = useSelector(state => state.popupReducer.empolyeePopup);
  const showHighlights = useSelector(state => state.popupReducer.showHighlights);

  const handleChange = ()=>{
      dispatch(openEmpolyeePopup())
  }

  const handleHeartClick = () => {
      dispatch(toggleView())
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
        <button onClick={handleHeartClick} className={`transition-all duration-300 hover:scale-110 ${showHighlights ? 'text-red-600 fill-red-600' : 'text-gray-300 hover:text-red-500'}`}>
          <Heart size={30} />
        </button>
      </div>

    </nav>
  );
};

export default Navbar;