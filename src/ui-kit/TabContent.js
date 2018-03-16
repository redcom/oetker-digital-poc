import React from 'react'

import './TabContent.css'

const TabContent = ({ currentTab, children }) => (
  <div className={`tabContent`}>{children[currentTab]}</div>
)

export default TabContent
