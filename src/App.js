import React, { Component } from 'react'
import { compose, createStore } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import { Provider } from 'react-redux'
import firebaseConfig from './firebase-config'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import rootReducer from './reducer'
import IndexView from './views/IndexView'
import EditorView from './views/EditorView'
import './App.css'

// react-redux-firebase options
const config = {
    userProfile: 'users', // firebase root where user profiles are stored
    enableLogging: false // enable/disable Firebase's database logging
}

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebaseConfig, config)
)(createStore)

const initialState = {}

// Create store with reducers and initial state
const store = createStoreWithFirebase(rootReducer, initialState)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={IndexView} />
                        <Route path="/:id" component={EditorView} />
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App
