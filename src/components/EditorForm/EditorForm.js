import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Editor from "@monaco-editor/react";
import { HelpFilled, SendAlt } from '@carbon/react/icons';
import { 
  Button,
  FileUploader,
  Grid,
  Column,
  Stack
} from '@carbon/react';

function EditorForm({ title, sendCallback, initialCodeText, className }) {
  const [textCode, setTextCode] = useState(initialCodeText || '# ¡Hello pyristic!');
  const [uploadStatus, setUploadStatus] = useState('uploading');

  const overwriteCode = (e) => {
    setUploadStatus('uploading');
    let file = e.target.files[0];
    var fr = new FileReader();
    fr.onload = function(e) {
        setTextCode(e.target.result);
        setUploadStatus('complete');
    };
    fr.readAsText(file);
  }
  return (
    <div className={ className ||'container-center' } >
      <Grid as='menu' condensed>
        <Column sm={4}>
          <h6 className='heading' style={{marginTop:'10%'}}>{title}</h6>
        </Column>
        <Column lg={{offset:13}} md={{offset:5}}>
          <Stack orientation='horizontal'>
            <FileUploader 
              accept={['.py']}
              buttonLabel={'Upload File'}
              style={{marginTop:'-16px'}}
              iconDescription={'Close'}
              buttonKind="secondary"
              filenameStatus={uploadStatus}
              onChange={(e) => overwriteCode(e)}
            />
            <Button
              size='md'
              iconDescription='Send code'
              renderIcon={ SendAlt }
              onClick={() => sendCallback(textCode)}
              hasIconOnly
            />
            <Button
              renderIcon={ HelpFilled }
              iconDescription="Help"
              hasIconOnly
              size='md'
            />
          </Stack>
        </Column>
      </Grid>
      <Editor
        theme="vs-dark"
        height="30vh"
        defaultLanguage="python"
        value={textCode}
        onChange={(e) => {
          setTextCode(e)
        }}
      />
    </div>
  );
}

EditorForm.propTypes = {
  title: PropTypes.string
};

EditorForm.defaultProps = {
  title:'Function'
};

export default EditorForm;
