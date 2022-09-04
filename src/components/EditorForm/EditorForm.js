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

function EditorForm({ title, sendCallback }) {
  const [textCode, setTextCode] = useState('# ¡Hello pyristic!');

  return (
    <>
    <Grid as='menu' condensed>
      <Column sm={4}>
        <h6 className='heading' style={{marginTop:'10%'}}>{title}</h6>
      </Column>
      <Column lg={{offset:13}} md={{offset:5}}>
        <Stack orientation='horizontal'>
          <FileUploader 
            accept={['.py','.txt']}
            buttonLabel={'Upload File'}
            style={{marginTop:'-16px'}}
            iconDescription={'Close'}
            disabled={true}
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
  </>
  );
}

EditorForm.propTypes = {
  title: PropTypes.string
};

EditorForm.defaultProps = {
  title:'Function'
};

export default EditorForm;
