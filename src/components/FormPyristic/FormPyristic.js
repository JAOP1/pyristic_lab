import React, { useEffect, useMemo, useState } from 'react';
import { HelpFilled } from '@carbon/react/icons';
import {
    Button,
    Dropdown,
    NumberInputSkeleton,
    FormGroup,
    Stack,
    ButtonSkeleton,
    Modal,
    NumberInput,
    ToastNotification,
    Grid,
    Column,
  } from '@carbon/react';
import axios from 'axios'; 
import { HOST } from '../../constants/settings';
import EditorForm from '../EditorForm/EditorForm';
import { useDispatch, useSelector } from 'react-redux';
import { getTime } from '../../utils';
import { addLog } from '../../reducers/loggerStore';
import { TEXT_SELECTION_DROPDOWN } from '../../constants/texts';

export const FormPyristic = ({ id, itemList, title, globalStorageHandler, getDataGlobalStorage}) => {
    const [itemSelected, setItemSelected] = useState(undefined);
    const [modalText, setModalText] = useState(undefined);
    const [inputArgsByUser, setInputArgsByUser] = useState(undefined);
    const [status, setStatus] = useState(undefined);
    const currentDataOperator = useSelector(getDataGlobalStorage);
    const dispatch = useDispatch();

    useEffect(() => {
        setInputArgsByUser(undefined);
        const foundItem = itemList.find(element => element.method_name === currentDataOperator.operator_name);
        setItemSelected(foundItem);
        if(foundItem)
            setInputArgsByUser(currentDataOperator.parameters);
        
    }, [title]);

    const submitHandler = (arrayArguments) => {
        const methodConfig = {
            operator_name: itemSelected.method_name,
            parameters: arrayArguments
        };
        dispatch(globalStorageHandler(methodConfig));
        dispatch(addLog({
            time: getTime(),
            status: 'success',
            algorithm:id,
            action: `Added ${title} method: ${itemSelected.method_name}`,
            details:`The method has been successfully  updated with the params: ${methodConfig.parameters}`
        }))
    };

    const sendText = (filename) => {
        return async(text) => {
            let action_status = 'success';
            let detail = '';
            try{
                submitHandler([]);
                const body = JSON.stringify({ content: text });
                const Config = {
                    headers: {
                    'Content-Type': 'application/json'
                    }
                };
                await axios.post(`${HOST}/create-file/${filename}`,
                body,
                Config);
                setStatus('success');
            } catch(error){
                action_status = 'error';
                detail = error.message;
                setStatus('error');
            }finally{
                dispatch(addLog({
                    time: getTime(),
                    status: action_status,
                    algorithm:id,
                    action: `Submitted: ${filename}`,
                    details:detail
                }));
            }
        };
    };

    const createHelpText = () => {
        let text = TEXT_SELECTION_DROPDOWN;
        if(itemSelected?.description_render){
            text = itemSelected.description_render;
        }
        setModalText(text);
    };

    return (
        <div>
            <div className='form-container'> 
                <Grid as='menu' condensed>
                    <Column md={4} sm={4} className='container-margin-bottom'>
                        <h3>{title}</h3>
                    </Column>
                    <Column lg={{offset:12}} md={{offset:4}}>
                        <Stack as='menu' orientation='horizontal'>

                            <Dropdown 
                                id='form'
                                label={''}
                                helperText='Select the method'
                                items={itemList}
                                className='dropdown-size'
                                onChange={ (e) => {
                                    setItemSelected(e.selectedItem);
                                    
                                    if(e.selectedItem.method_name !== currentDataOperator.operator_name)
                                        setInputArgsByUser(undefined);
                                    else
                                        setInputArgsByUser(currentDataOperator.parameters);
                                }}
                                selectedItem={itemSelected || { label:'No selected method.' }}
                            />
                            <Button
                                renderIcon={ HelpFilled }
                                iconDescription="Help"
                                hasIconOnly
                                onClick={() => createHelpText()}
                                size='md'
                            />
                        </Stack>
                    </Column>
                </Grid>
                
                <hr/>
                {
                    itemSelected?.label === 'customize method' &&
                    <EditorForm 
                        title={ itemSelected.label }
                        sendCallback={ sendText(itemSelected.filename) }
                        initialCodeText={ itemSelected.initialCode }
                        helpText={ itemSelected.helpText }
                        className={'editor-width'}
                    />
                }
                {
                    itemSelected?.label !== 'customize method' && 
                    <FormMethod 
                        params={itemSelected} 
                        submitHandler={submitHandler}
                        submitStatus={setStatus}
                        inputsSaved={inputArgsByUser}
                    />
                }
            </div>
            { status && (
                <ToastNotification
                    role="status"
                    timeout={750}
                    title="Submit state"
                    kind={status}
                    onClose={() => setStatus(undefined)}
                    subtitle="The method selected has been saved."
                    className={'notification-position'}
                />
            )}
            <Modal
            open={modalText !== undefined} 
            onRequestClose={() => setModalText(undefined)}
            passiveModal
            modalHeading="Selection dropdown">
                {modalText}
            </Modal>
        </div>
    );
  };


const FormMethod = ({params , submitHandler, submitStatus, inputsSaved=undefined}) => {
    const paramList = params?.params || [];
    const [arrayValues,  setArrayValues] = useState([]);
    
    useMemo(() => {
        if(paramList.length){
            let values = inputsSaved? inputsSaved:paramList.map(obj => obj.initialValue);
            setArrayValues(values);
        }
    }, [paramList]);

    if(params === undefined){
        return (
            <FormGroup
                legendText={'Arguments of method selected.'}
            >
                <Stack gap={3}>
                    <NumberInputSkeleton/>
                    <NumberInputSkeleton/>
                    <NumberInputSkeleton/>
                    <ButtonSkeleton />
                </Stack>
            </FormGroup>
        );
    }
    return (
        <FormGroup 
        legendText={'Arguments of method selected.'}
        >
            <Stack gap={3}>
            {   arrayValues && (
                    paramList.map((obj, ind) => {
                        let {initialValue, ...props} = obj;
                        return (
                            <NumberInput
                                id={`input_number_${ind}`}
                                key={ind}
                                value={arrayValues[ind]}
                                invalidText={'Invalid value, check the specifications.'}
                                onChange={(e, { value }) => {
                                    let tmp_array = [ ...arrayValues ];
                                    const _value = parseFloat(value);
                                    if(Number.isNaN(_value)){
                                        return;
                                    }
                                    tmp_array[ind] = _value;
                                    setArrayValues(tmp_array);
                                    }
                                }
                                { ...props }
                            />
                        );
                    }
                )
            )}
            <Button
                onClick={() => {
                    if(paramList.length)
                        submitHandler(arrayValues);
                    else
                        submitHandler([]);
                    submitStatus('success');
                }}
            >
                Submit
            </Button>
            </Stack>

        </FormGroup>
    )
};

FormPyristic.defaultProps = {
    itemList: [
        {
            label:'Test example input',
            method_name:'NameClassMethodPyristic',
            equation:'5m + 1/2m * sin(π)',
            params:[
                {
                    label:'Example argument',
                    initialValue:0.2,
                    min:0,
                    max:1,
                    helperText:'The number should stay between [0,1]',
                    step:0.1
                }
            ]
        }
    ]
};

export default FormPyristic;