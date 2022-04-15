import React from 'react'

export default function Colored({ color, children }) {
  return (
    <div style={{color: color}} > Colored <br/> {children}</div>
  )
}
