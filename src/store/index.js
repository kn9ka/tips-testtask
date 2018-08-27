import { createStore } from 'redux'
import { rootReducer } from '../reducers'
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';

export const store = createStore(
  rootReducer,
  devToolsEnhancer()
)
