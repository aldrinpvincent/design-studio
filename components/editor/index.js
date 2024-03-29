
import React from 'react';

const Editor = (props) => {
    if (typeof window !== 'undefined') {
        const AceEditor = require('react-ace').default;
        require('brace/mode/css');
        require('brace/theme/kuroir');
        require('brace/ext/language_tools');

        return (
            <AceEditor
                mode="css"
                theme="kuroir"
                name="css-editor"
                editorProps={{ $blockScrolling: true }}
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                debounceChangePeriod={500}
                // enableSnippets={true}
                {...props}
            />
        )
    }
    return null;
}

export default Editor;
