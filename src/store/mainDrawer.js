// ------------------------------------
// Constants
// ------------------------------------
export const TOGGLE_DRAWER = 'OPEN_DRAWER'
export const CLOSE_DRAWER = 'CLOSE_DRAWER'

// ------------------------------------
// Actions
// ------------------------------------
export function toggleDrawer (current = false) {
  return {
    type    : TOGGLE_DRAWER,
    open : !current
  }
}

export function closeDrawer () {
  return {
    type    : CLOSE_DRAWER,
    open : false
  }
}


// ------------------------------------
// Reducer
// ------------------------------------

export default function drawerReducer (state = [], action) {
  return action.type === CLOSE_DRAWER
    ? false
    : !action.open
}
