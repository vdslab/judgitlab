import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import RootPage from './pages/root'
import BureauPayeeNetwork from './pages/bureau-payee-network'

const history = createBrowserHistory()

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' component={RootPage} exact />
        <Route path='/bureau-payee-network' component={BureauPayeeNetwork} />
      </Switch>
    </Router>
  )
}

render(<App />, document.querySelector('#content'))
