import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Group from './pages/Group/Group';
import Swipe from './pages/Swipe/Swipe';
import Upload from './pages/Upload/Upload';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path={'/'} element={<Home />} />
          <Route exact path={'/login'} element={<Login />} />
          <Route exact path={'/register'} element={<Register />} />
          <Route exact path={'/group'} element={<Group />} />
          <Route exact path={'/swipe'} element={<Swipe />} />
          <Route exact path={'/upload'} element={<Upload />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
