import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';

class RichText extends Component {
    render() {
        return (
            <div className="App">
                <h2></h2>
                <CKEditor
                    data="<p>The story goes here...</p>"
                />
            </div>
        );
    }
}

export default RichText;