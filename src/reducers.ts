/**
 * Created by YOU on 2017/8/29.
 */
import {assign} from 'lodash'
import {combineReducers} from 'redux'
import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from './actions'
const {SHOW_ALL} = VisibilityFilters

function VisibilityFilter (state = SHOW_ALL, action: any) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos (state = [], action: any) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        assign(
          {
            completed: true,
          }, state[action.index],
        ),
        ...state.slice(action.index + 1),
      ]
    default:
      return state
  }
}

const todoApp = combineReducers({
  VisibilityFilter,
  todos,
})

export default todoApp