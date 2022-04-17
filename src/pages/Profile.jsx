import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import AddProfile from './AddProfile';
import ListProfile from './ListProfile';
import SearchProfiles from './SearchProfiles';

function Profile() {
  return (
    <div>
        <h1>Profile</h1>
        <div> <Link to='list' >List Users</Link></div>
        <div><Link to='add' >Add Users </Link> </div>
        <div><Link to='search' >Search Users </Link> </div>
        <hr/>
        <Outlet/>
    </div>

  )
}

export default Profile