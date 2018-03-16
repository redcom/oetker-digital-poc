import React from 'react'

import './Tab.css'

const Tab = ({ isActive, name, onClick }) => (
  <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
    {name}
  </div>
)

export default Tab
