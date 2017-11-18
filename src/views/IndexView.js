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
                    marginTop: '50%'
                }}
            >
                <div
                    style={{
                        maxWidth: '50%'
                    }}
                >
                    <h1>Code Together</h1>
                </div>
                <div
                    style={{
                        maxWidth: '50%'
                    }}
                >
                    <button onClick={this.newEditor}>NEW EDITOR</button>
                </div>
            </div>
        )
    }

    newEditor() {
        const { history } = this.props
        history.push('/edit-together/' + uuidv4())
    }
}

export default withRouter(IndexView)
