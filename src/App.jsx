import './App.css';
import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout wrapping the routes */}
        <Route path="/" element={<MainLayout />}>
          {/* Home Route */}
          <Route index element={<Home />} className="main" />
        </Route>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
