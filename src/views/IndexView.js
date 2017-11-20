import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import uuidv4 from 'uuid/v4'

class IndexView extends Component {
    constructor(props) {
        super(props)
        this.newEditor = this.newEditor.bind(this)
    }

    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh'
                }}
            >
                <div
                    style={{
                        textAlign: 'right',
                        paddingRight: '10rem'
                    }}
                >
                    <h1>Edit Together</h1>
                    <p>Simple online collab editor</p>
                </div>
                <div>
                    <button onClick={this.newEditor}>NEW EDITOR</button>
                </div>
            </div>
        )
    }

    newEditor() {
        const { history } = this.props
        history.push('/' + uuidv4())
    }
}

export default withRouter(IndexView)
