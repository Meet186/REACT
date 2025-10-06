import './App.css'
import Card from './components/Card'
import users  from './data.json'
import Button from './components/Button';
import Layout from './assets/Layout';
function App() {

  function changeBg(){
    document.body.style.background = 'red';
  }
  function removeBg(){
    document.body.style.background = '';
  }
  return (
    <>
     <div className='grid grid-cols-4 gap-[2rem] m-[2rem] max-[970px]:grid-cols-2' >
          {/* {users.map((obj)=>{
           return <Card key={obj.id} name={obj.name} id={obj.id}/>
          })} */}

          {/* <Button text="Add Colour" func={changeBg}/>
          <Button text="Remove Colour" func={removeBg}/> */}

            l
              {/* <Layout>
                <h1>my name is meet</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </Layout> */}
      </div>
    </>
  )
}
export default App
