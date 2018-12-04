/*
 * @Author: AK-12
 * @Date: 2018-12-03 23:38:12
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-04 15:33:56
 * @discript: 存放reducers的空间
 */
import * as Types from '../types/Types'
import * as Actions from './Actions'
import { State } from './State'

// reducers
export let reducer_title: Types.IReducer<
  Types.IState['title'],
  Types.IAction<Actions.IAction_Type_Title>
> = (state = State.title, action) => {
  switch (action.type) {
    case 'reduce_title':
      return { content: state.content + action.value }
    default:
      return state
  }
}

// reducers
export let reducer_text: Types.IReducer<
  Types.IState['text'],
  Types.IAction<Actions.IAction_Type_Text>
> = (state = State.text, action) => {
  switch (action.type) {
    case 'reduce_head':
      return { head: state.head + action.value, foot: state.foot }
    case 'reduce_foot':
      return { head: state.head, foot: state.foot + action.value }
    default:
      return state
  }
}