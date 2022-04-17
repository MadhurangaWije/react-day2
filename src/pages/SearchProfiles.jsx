import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function SearchProfiles() {
  return (
    <div>
      Search Profiles
      <div>
        <Link to='advanced'>Advanced</Link>
        <Link to='quick'>Quick</Link>
      </div>
      <hr/>
      <Outlet/>
    </div>

  )
}
