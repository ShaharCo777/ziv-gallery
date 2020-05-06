import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default ({ component: Component, isManger, ...rest })  => {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          isManger ? (
              <Component {...props}/>
            ) : (<Redirect to={'/'} />)
          )
        }
      }
    />
  )
}
