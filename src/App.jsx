import { Route , Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import HomePage from "./Pages/HomePage";

function App() {

  return (
    <>
  
    <Routes>
      <Route element={<Layout/>} >
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
