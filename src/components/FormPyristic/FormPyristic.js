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
import { useDispatch } from 'react-redux';
import { TEXT_SELECTION_DROPDOWN } from '../../constants/texts';

export const FormPyristic = ({itemList, title, globalStorageHandler}) => {
    const [itemSelected, setItemSelected] = useState(undefined);
    const [modalText, setModalText] = useState(undefined);
    const dispatch = useDispatch();

    useEffect(() => setItemSelected(undefined), [title]);

    const submitHandler = (arrayArguments) => {
        const methodConfig = {
            operator_name: itemSelected.method_name,
            parameters: arrayArguments
        };
        dispatch(globalStorageHandler(methodConfig));
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
                    <Column md={4} sm={4}>
                        <h3>{title}</h3>
                    </Column>
                    <Column lg={{offset:12}} md={{offset:4}}>
                        <Stack as='menu' orientation='horizontal'>

                            <Dropdown 
                                id='form'
                                helperText='Select the method'
                                label='No selected method.'
                                items={itemList}
                                onChange={ (e) => {
                                    setItemSelected(e.selectedItem);
                                }}
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
                <FormMethod 
                    params={itemSelected} 
                    submitHandler={submitHandler}
                />
            </div>
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


const FormMethod = ({params , submitHandler}) => {
    const paramList = params?.params || [];
    const [arrayValues,  setArrayValues] = useState(undefined);
    const [status, setStatus] = useState(undefined);
    
    useMemo(() => {
        if(paramList.length){
            let values = paramList.map(obj => obj.initialValue);
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
                    paramList.map((obj, ind) => (
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
                            { ...obj }
                        />
                    )
                )
            )}
            <Button
                onClick={() => {
                    submitHandler(arrayValues);
                    setStatus('success');
                }}
            >
                Submit
            </Button>
            </Stack>
            { status && (
                <ToastNotification
                    role="status"
                    timeout={2000}
                    title="Submit state"
                    kind={status}
                    onClose={() => setStatus(undefined)}
                    subtitle="The method selected has been saved."
                    className={'notification-position'}
                />
            )}
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