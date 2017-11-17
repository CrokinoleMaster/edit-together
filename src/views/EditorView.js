import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebase, firebaseConnect, dataToJS } from 'react-redux-firebase'
import { compose } from 'redux'

class EditorView extends Component {
    constructor(props) {
        super(props)
        this.onChangeText = this.onChangeText.bind(this)
    }

    render() {
        const { location, editors } = this.props
        const id = location.pathname.slice(1)
        return (
            <textarea
                columns="50"
                rows="10"
                value={editors[id] || ''}
                onChange={this.onChangeText}
            />
        )
    }

    onChangeText(e) {
        const { location, firebase } = this.props
        const id = location.pathname.slice(1)
        const value = e.target.value
        firebase.set(`editors/${id}`, value)
    }
}

export default compose(
    firebaseConnect(props => {
        const id = props.location.pathname.slice(1)
        return [`editors/${id}`]
    }),
    connect(({ firebase }) => ({
        editors: dataToJS(firebase, 'editors', {})
    }))
)(EditorView)
