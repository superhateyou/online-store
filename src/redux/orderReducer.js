const defaultState = {
  order: []
}

export const orderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_ORDER":{
      localStorage.setItem('order', JSON.stringify(action.payload.order));
      return { ...state, order: action.payload.order }
    }
    default:
      return state
  }
}