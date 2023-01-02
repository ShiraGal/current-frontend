import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login/Login";
import Gigs from "./pages/gigs/Gigs";
import PaidGigs from "./pages/paidGigs/PaidGigs";
import Register from "./pages/register/Register";
import ErrPage from "./pages/errPage/ErrPage";
import StoreServise from "./services/StoreService";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <StoreServise
      children={
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/gigs" element={<Gigs />} />
            <Route path="/paidgigs" element={<PaidGigs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<ErrPage />} />
          </Routes>
        </div>
      }
    />
  );
}

export default App;
