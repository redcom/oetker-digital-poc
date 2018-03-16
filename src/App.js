import React from 'react'
import { Topics, Archives, Pages } from './containers'
import { Container, Tabs, Tab, TabHead, TabContent } from './ui-kit'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Browse Site</h1>
          <h2 className="App-subTitle">Select a tab</h2>
        </header>
        <Container>
          <Tabs>
            <TabHead>
              <Tab name="Topics" />
              <Tab name="Archives" />
              <Tab name="Pages" />
            </TabHead>
            <TabContent>
              <Topics />
              <Archives />
              <Pages />
            </TabContent>
          </Tabs>
        </Container>
      </div>
    )
  }
}

export default App
