import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/home";
import Register from "../Pages/Register/register";

// Configuração de rotas
const RoutersApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/home/" element={<Home />} />
        <Route path="/register/" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutersApp;