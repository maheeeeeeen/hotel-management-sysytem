import { Route , Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import HomePage from "./Pages/Guest/HomePage";
import { SignInForm } from './Pages/SignIn';
import { SignUpForm } from './Pages/SignUp';

function App() {

  return (
    <>
  
    <Routes>
      <Route element={<Layout/>} >
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Route>
    </Routes>

    </>
  )
}

export default App
