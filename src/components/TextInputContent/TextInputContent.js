import React from 'react';
import {
    TextInput,
    Stack,
    CopyButton
} from '@carbon/react';

export const TextInputContent = ({ id, labelText, value }) => {

    return (
        <Stack
            orientation={'horizontal'}
        >
            <TextInput 
                id={id}
                value ={value}
                readOnly={true}
                labelText={labelText}
                inline={true}
            />
            <CopyButton
                iconDescription={'Copy content'}
                onClick={() => {navigator.clipboard.writeText(value)}}
            />
        </Stack>
    );
}