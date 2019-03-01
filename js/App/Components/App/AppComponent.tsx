import React, {Component} from 'react'
import {Provider} from 'react-redux'
import RootContainer from '../../Containers/RootContainer'
import createStore from '../../Redux/index'

export const store = createStore();

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}
