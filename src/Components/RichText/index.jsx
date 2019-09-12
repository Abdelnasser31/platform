import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export let dataFromRichText = "";
class RichText extends Component {

    render() {
        return (
            <div className="App">
                <h2></h2>
                <CKEditor
                 editor={ ClassicEditor }
                   
                onChange={ ( event, editor ) => {
                         dataFromRichText = editor.getData();
                        console.log( { event, editor, dataFromRichText } );
                    } }
                />
            </div>
        );
    }
}

export default RichText;