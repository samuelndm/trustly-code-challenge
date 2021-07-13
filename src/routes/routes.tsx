import React from 'react'
import { Switch, Route } from 'react-router-dom'
import * as P from 'pages'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={P.StorePage} />
      <Route exact path="*" component={P.NotFoundPage} />
    </Switch>
  )
}

export default Routes
