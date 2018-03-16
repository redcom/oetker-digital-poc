import React from 'react'
import { generateRandomTabIndex } from '../utils/randomGenerator'
import './Tabs.css'

const NR_OF_TABS = 3 // number of tabs

class Tabs extends React.Component {
  state = {
    currentTab: generateRandomTabIndex(NR_OF_TABS),
  }

  onTabClicked = index => () => {
    this.setState({
      currentTab: index,
    })
  }

  render() {
    const { children } = this.props
    const { currentTab } = this.state

    return (
      <div className="tabs">
        {React.Children.map(children, (child, key = 0) => {
          return React.cloneElement(child, {
            currentTab,
            onClick: this.onTabClicked,
          })
        })}
      </div>
    )
  }
}

export default Tabs
