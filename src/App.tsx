import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import "./index.css";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<UserContainer />} />
      </Routes>
    </div>
  );
}

export default App;
