import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import AddProfile from './pages/AddProfile';
import AdvancedSearch from './pages/AdvancedSearch';
import Home from './pages/Home';
import ListProfile from './pages/ListProfile';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import QuickSearch from './pages/QuickSearch';
import SearchProfiles from './pages/SearchProfiles';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
         <Route path='/profile' element={<Profile/>}>
          <Route path='add' element={<AddProfile/>} /> 
          <Route path='list' element={<ListProfile/>} />
          <Route path='search' element={<SearchProfiles/>} >
             <Route path='advanced' element={<AdvancedSearch/>} />
            <Route path='quick' element={<QuickSearch/>} />
          </Route>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <h3>This is the footer</h3>
    </div>
  );
}

export default App;
