import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import './index.css'

function App() {
  return (
    <div>
          <Routes>
        <Route path="/" element={<Login />} />
        </Routes>

        {/* <Login/> */}
    </div>
  );
}

export default App;
