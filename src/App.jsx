import CompleteProfile from './components/Authentication/CompleteProfile';
import Login from './components/Authentication/Login'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
        <Route path="/CompleteProfile" element={<CompleteProfile />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>    
    </>
  )
}

export default App
