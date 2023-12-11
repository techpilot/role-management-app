import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import "./index.css";
import UserContainer from "./components/UserContainer";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div>
      <Routes>
        <Route path="/" element={token ? <UserContainer /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
