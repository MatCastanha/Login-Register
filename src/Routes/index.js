import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/login";
import HomeAdm from "../Pages/Home/homeAdm";
import HomeUser from "../Pages/Home/homeUser";
import Register from "../Pages/Register/register";

// Configuração de rotas
const RoutersApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/homeAdm/" element={<HomeAdm />} />
        <Route path="/homeUser/" element={<HomeUser />} />
        <Route path="/register/" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutersApp;