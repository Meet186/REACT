
import './App.css'
import ProductCard from './Components/Card'
import products from './Data.json'
function App() {
  // 1 -> Normal Array
  const names = ["Meet", "Nanish", "Shreyansh", "Kunal"]
  // 2 -> Object Array
  const users = [
    { id: 1, name: "Meet", age: 21 },
    { id: 2, name: "Bhalu", age: 20 },
    { id: 3, name: "Keda", age: 21 },
  ]
  // 3 -> Array of Array
  const language = [
    ["HTML","CSS","JS"],
    ["JAVA","JSP","SERVLET"]
  ]
  return (
    <>
      {/* <ul>
      {names.map((name,index)=>{
        return <li key={index}>{name}</li>
      })}
     </ul> */}

      {/* <div className='flex'>
        {users.map((user) => {
          return <div >
            <div>
              <p>{user.id}</p>
              <span>{user.name}</span>
              <h2>{user.age}</h2>
            </div>
          </div>
        })}
      </div> */}
{/* 
      {language.map((item)=>{
          return <div>
            {item.map((name)=>{
              return <p>{name}</p>
            })}
          </div>
      })} */}




      {/* Parallel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>



        
    </>
  )
}

export default App
