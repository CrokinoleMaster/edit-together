import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebase, firebaseConnect, dataToJS } from 'react-redux-firebase'
import { compose } from 'redux'
import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/mode/javascript'
import 'brace/theme/monokai'
import 'brace/ext/language_tools'
import 'brace/ext/searchbox'

class EditorView extends Component {
    constructor(props) {
        super(props)
        this.onChangeText = this.onChangeText.bind(this)
    }

    render() {
        const { location, editors } = this.props
        const id = location.pathname.slice(1)

        return (
            <div>
                <AceEditor
                    style={{
                        width: '100%'
                    }}
                    mode="javascript"
                    theme="monokai"
                    name="editor"
                    onChange={this.onChangeText}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={editors[id] || ''}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 2
                    }}
                />
            </div>
        )
    }

    onChangeText(newValue) {
        const { location, firebase } = this.props
        const id = location.pathname.slice(1)
        firebase.set(`editors/${id}`, newValue)
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
