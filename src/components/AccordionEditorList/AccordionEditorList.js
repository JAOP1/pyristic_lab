import React, { useState } from 'react';
import {
    Theme,
    Accordion,
    AccordionItem,
    ToastNotification
} from '@carbon/react';
import { useDispatch } from 'react-redux';
import axios from 'axios'; 
import EditorForm from '../EditorForm/EditorForm';
import { getTime } from '../../utils';
import { addLog } from '../../reducers/loggerStore';
import { HOST } from '../../constants/settings';

const AccordionEditorList = ({ ARRAY_ITEMS }) => {
    const [status, setStatus] = useState(undefined);
    const dispatch = useDispatch();

    const sendText = (fileName) => {
        return async(text) => {
            let action_status = 'success';
            let error_detail = '';
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
                action_status = 'error';
                error_detail = error.response.data.detail;
                setStatus('error');
            }finally{
                dispatch(addLog({
                    time: getTime(),
                    status: action_status,
                    algorithm:'Optimization problem',
                    action: `Submitted: ${fileName}`,
                    details:error_detail
                }));
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