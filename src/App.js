import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Carts from "./Pages/Carts";
import Login from "./Pages/Login";
import Register from "./Pages/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Carts />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
