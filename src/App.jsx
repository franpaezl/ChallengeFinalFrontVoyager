import './App.css';
import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout wrapping the routes */}
        <Route path="/" element={<MainLayout />}>
          {/* Home Route */}
          <Route index element={<Home />} className="main" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
