import { create } from "zustand";
import {createJSONStorage, devtools, persist}  from "zustand/middleware";
const store = (set,get)=> {
    return (
        {
            count : 1,
            name : "meet",
            increment : ()=>{
                set((state)=>{
                    return {
                        count : state.count + 1,
                    }
                })
            },
            capatlizeName : ()=>{
                const {name} = get();
                set({
                    name : name.charAt(0).toUpperCase() + name.slice(1),
                })    
            }
        }
    )
}
const useMyStore = create(devtools(
    persist(
    store,    
    {name : "mystore",
     storage :  createJSONStorage(()=> sessionStorage)
    }
   )
))
export default useMyStore;