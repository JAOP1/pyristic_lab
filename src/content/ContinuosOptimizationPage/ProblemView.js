import React, { useState } from 'react';
import {
    Theme,
    Accordion,
    AccordionItem,
    ToastNotification
} from '@carbon/react';
import axios from 'axios'; 
import EditorForm from '../../components/EditorForm/EditorForm';

const ProblemEditorPage = () => {
    const ARRAY_ITEMS = [
        {
            accordion_title:'Minimization function',
            code_title:'Function',
            fileName:'function',
        },
        {
            accordion_title:'Constraints',
            code_title:'Array constraints',
            fileName:'constraints'
        },
        {
            accordion_title:'Additionals',
            code_title:'Problem bounds',
            fileName:'search_space'
        }
    ];
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
                await axios.post(`http://localhost:80/create-file/${fileName}`,
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
            <Accordion>
                {
                    ARRAY_ITEMS.map((item, ind)=>
                        (
                            <AccordionItem key={ind} title={item.accordion_title}>
                                <EditorForm title={item.code_title} sendCallback={sendText(item.fileName)}/>
                            </AccordionItem>
                        )
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
                subtitle= {status==='success' ?"The code has been successful submitted.": 'Try again.'}
                className={'notification-position'}
            />
        )}
        </>
    );
};

export default ProblemEditorPage