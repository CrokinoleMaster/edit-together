import React, { Component } from 'react'
import { compose, createStore } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import firebaseConfig from './firebase-config'

import rootReducer from './reducer'
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
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
            </div>
        )
    }
}

export default App
