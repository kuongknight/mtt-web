import { combineReducers } from 'redux'
import locationReducer from './location'
import drawerReducer from './mainDrawer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    drawer: drawerReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
}

export default makeRootReducer
