import { handleActions } from 'redux-actions'

const initState = {
  hoge: 0,
  fuga: 'fuga'
}

export default handleActions({
  'ACTIONS_1': (state) => ({ hoge: state.hoge + 1 }),
  'ACTIONS_2': (state) => ({ fuga: '' })
  'ACTIONS_3': (state) => ({ fuga: 'fuga' })
}, initState)