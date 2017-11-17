import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class IndexView extends Component {
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
                    <Link to="/">
                        <button>NEW EDITOR</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default IndexView
