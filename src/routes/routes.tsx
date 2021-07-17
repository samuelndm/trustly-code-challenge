/* eslint-disable  @typescript-eslint/no-explicit-any */
import React from 'react'
import { Switch } from 'react-router-dom'
import { GuardProvider, GuardedRoute as Route } from 'react-router-guards'
import * as UTIL from 'utils'
import * as Hooks from 'hooks'
import * as P from 'pages'

const Routes = () => {
  const { updateMeta } = Hooks.useRoutesContext()

  const handleRouteChange = (to: any, from: any, next: any) => {
    updateMeta(to.meta)
    next()
  }

  return (
    <GuardProvider guards={[handleRouteChange]}>
      <Switch>
        <Route
          exact
          path={['/', '/store']}
          component={P.StorePage}
          meta={{
            routeTitle: UTIL.Constants.ROUTES_TITLES.SNEAKERS,
          }}
        />
        <Route
          exact
          path="/checkout"
          component={P.CheckoutPage}
          meta={{
            previousRoute: '/store',
            routeTitle: UTIL.Constants.ROUTES_TITLES.CHECKOUT,
          }}
        />
        <Route
          exact
          path="/receipt"
          component={P.ReceiptPage}
          meta={{
            previousRoute: '/store',
            routeTitle: UTIL.Constants.ROUTES_TITLES.CHECKOUT,
          }}
        />
        <Route
          exact
          path="*"
          component={P.NotFoundPage}
          meta={{
            routeTitle: UTIL.Constants.ROUTES_TITLES.NOT_FOUND,
          }}
        />
      </Switch>
    </GuardProvider>
  )
}

export default Routes
