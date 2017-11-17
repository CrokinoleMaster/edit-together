import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebase, firebaseConnect, dataToJS } from 'react-redux-firebase'
import { compose } from 'redux'

class EditorView extends Component {
    render() {
        console.log(this.props)
        return <p>Editor View</p>
    }
}

export default compose(
    firebaseConnect(props => {
        const id = props.location.pathname.slice(1)
        return [`editors/${id}`]
    }),
    connect(({ firebase }) => ({
        editors: dataToJS(firebase, 'editors')
    }))
)(EditorView)
