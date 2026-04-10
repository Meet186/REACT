import './App.css'
import Navbar from './Components/Navbar'
import News from './Page/News'
import Category from './Components/Category'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar className={'sticky top-0 z-20'} />
        <Category className={'py-10 sticky top-14 z-10 bg-base-100'} />
        <News className={'pb-10'} />
        <Footer />
      </div>
    </>
  )
}

export default App
