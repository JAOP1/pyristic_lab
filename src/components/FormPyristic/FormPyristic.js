import React, { useMemo, useState } from 'react';
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
    Link
  } from '@carbon/react';
import { _ } from 'core-js';
import { Equation } from 'react-equation';

const FormPyristic = ({itemList, title}) => {
    const TEXT_SELECTION_DROPDOWN = (
        <p>Select the wanted method desired to execute during the process, every method is 
        described in 
        <Link href='https://jaop1.github.io/pyristic/'>
            pyristic documentation
        </Link>
        </p> 
    );
    const [itemSelected, setItemSelected] = useState(undefined);
    const [modalText, setModalText] = useState(undefined);

    const submitHandler = (arrayArguments) => {
        const methodConfig = {
            operator_name: itemSelected.method_name,
            parameters: arrayArguments
        };
        console.log('Config method:', methodConfig);
    };

    const createHelpText = () => {
        let text = TEXT_SELECTION_DROPDOWN;
        if(itemSelected){
            text = (
                <>
                <p>
                    The method {itemSelected.label} works using the following equation:
                </p>
                <Equation
                    value={itemSelected.equation}
                />
                </>
            );
            console.log('texto:', text);
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
                                itemToString={(item) => item.label}
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
            paramList.forEach( obj => delete obj['initialValue'] );
            setArrayValues(values);
        }
    }, [paramList]);

    if(paramList.length === 0){
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
                            onChange={(e) => {
                                if(_.isNan(e.target.value))
                                    return;
                                let tmp_array = [ ...arrayValues ];
                                tmp_array[ind] = parseFloat(e.target.value);
                                console.log('tipo', typeof tmp_array[ind]);
                                console.log(tmp_array);
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