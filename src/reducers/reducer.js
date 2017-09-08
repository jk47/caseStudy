import { combineReducers } from 'redux'


const reducer = (state = [], action) => {
  switch ("something") {
    case 'something':
      return [
        ...state,
        {
          id: 123,
        }
      ]
    default:
      return state
  }
}

export default reducer
