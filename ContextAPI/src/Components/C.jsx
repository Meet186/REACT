import { useMyContext } from "../MyContext";
const C = () => {
   const {count} =  useMyContext();
  return (
    <div className="bg-orange-500 p-2">
      C
      {count}
    </div>
  )
}

export default C
