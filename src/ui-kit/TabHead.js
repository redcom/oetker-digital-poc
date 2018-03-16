import React from 'react'

import './TabHead.css'

class TabHead extends React.Component {
  render() {
    const { currentTab, children, onClick } = this.props
    return (
      <div className={`tabHead`}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            isActive: currentTab === index,
            onClick: onClick(index),
          })
        })}
      </div>
    )
  }
}

export default TabHead
