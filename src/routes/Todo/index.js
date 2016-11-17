import React from 'react'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import { injectReducer } from '../../store/reducers'

const AppTodo = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default (store) => ({
  path: 'todo',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const reducer = require('./modules/todos').default
      injectReducer(store, { key: 'todo', reducer })

      /*  Return getComponent   */
      cb(null, AppTodo)

    /* Webpack named bundle   */
    }, 'todo')
  }
})
