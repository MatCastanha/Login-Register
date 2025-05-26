import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";


// Configuração de rotas
const RoutersApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutersApp;