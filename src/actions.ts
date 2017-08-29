/**
 * Created by YOU on 2017/8/29.
 */
/*
 actions 类型
 */

export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 其他类型常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}

/*
 action 创建函数
 */

export function addTodo (text: string) {
  return {
    type: ADD_TODO,
    text,
  }
}

export function completeTodo (index: number) {
  return {
    type: COMPLETE_TODO,
    index,
  }
}

export function setVisibilityFilter (filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  }
}