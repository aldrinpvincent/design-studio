
import React from 'react';

const Editor = (props) => {
    if (typeof window !== 'undefined') {
        const AceEditor = require('react-ace').default;
        require('brace/mode/css');
        require('brace/theme/monokai');

        return (
            <AceEditor
                mode="css"
                theme="monokai"
                name="css-editor"
                editorProps={{ $blockScrolling: true }}
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                enableSnippets={true}
                {...props}
            />
        )
    }
    return null;
}

export default Editor;
