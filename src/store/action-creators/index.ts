import * as UserActionCreator from './userActions'
import * as TodoActionCreator from './todoActions'

export default {
  ...UserActionCreator,
  ...TodoActionCreator
}