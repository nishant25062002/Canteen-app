import CompleteProfile from "./components/Authentication/CompleteProfile";
import Login from "./components/Authentication/Login";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from "./components/User/Home";

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/CompleteProfile" element={<CompleteProfile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}/>
      </Routes>
      </Router>
  );
}

export default App;
