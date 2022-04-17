import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';

function App() {
  return (
    <div >
      <h3>
        <Link to='/' >Home</Link>
        <Link to='/about' >About Us</Link>
        <Link to='/profile' >Profile</Link>
      </h3>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <h3>This is the footer</h3>
    </div>
  );
}

export default App;
