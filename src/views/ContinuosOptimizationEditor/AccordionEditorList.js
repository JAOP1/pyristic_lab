import React, { useState } from 'react';
import {
    Theme,
    Accordion,
    AccordionItem,
    ToastNotification
} from '@carbon/react';
import axios from 'axios'; 
import EditorForm from '../../components/EditorForm/EditorForm';
import { HOST } from '../../constants/settings';


const AccordionEditorList = ({ ARRAY_ITEMS }) => {
    const [status, setStatus] = useState(undefined);
    const sendText = (fileName) => {
        return async(text) => {
            try{
                const body = JSON.stringify({ content: text });
                const Config = {
                    headers: {
                    'Content-Type': 'application/json'
                    }
                };
                await axios.post(`${HOST}/create-file/${fileName}`,
                body,
                Config);
                setStatus('success');
            } catch(error){
                setStatus('error');
            }
        };
    }
    
    return (
        <>
        <Theme theme='g10'>
            <Accordion style={{ marginBottom:'20%'}}>
                {
                    ARRAY_ITEMS.map((item, ind)=> {
                        const {accordion_title, fileName, ...validProps} = item;
                        const editorProps = { sendCallback: sendText(fileName), ...validProps};
                        console.log(editorProps);
                        return (
                            <AccordionItem key={ind} title={item.accordion_title}>
                                <EditorForm { ...editorProps }/>
                            </AccordionItem>
                        );
                    }
                )} 
            </Accordion>
        </Theme>
        { status && (
            <ToastNotification
                role="status"
                timeout={2000}
                title="Submit state"
                kind={status}
                onClose={() => setStatus(undefined)}
                subtitle= {status==='success' ?"The code has been successful submitted.": 'Try again, something wrong happened.'}
                className={'notification-position'}
            />
        )}
        </>
    );
};

export default AccordionEditorList;