import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, SignupPage } from './pages'

function App() {

  return (
  <div className='bg-black h-full max-w-screen px-2 py-3 md:px-15 md:py-5 lg:px-20 lg:py-5'>
     <div className='text-white'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signup' element = {<SignupPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </div>
  </div>
  )
}

export default App
