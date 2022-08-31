import React, { useEffect, useState } from 'react';
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
  } from '@carbon/react';
import { Link } from 'react-router-dom';

const FormPyristic = ({itemList}) => {
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

    useEffect(() => console.log("hook",itemSelected),[itemSelected]);
    return (
        <div>
            <div className='form-container'>            
                <Stack as='menu' orientation='horizontal'>

                    <Dropdown 
                        id='form'
                        helperText='Select the method'
                        label='No selected method.'
                        items={itemList}
                        itemsToString={(item) => item.label}
                        onChange={ (e) => {
                            console.log(e);
                            setItemSelected(e.selectedItem)
                        }}
                    />
                    <Button
                        renderIcon={ HelpFilled }
                        iconDescription="Help"
                        hasIconOnly
                        onClick={() => setModalText(TEXT_SELECTION_DROPDOWN)}
                        size='md'
                    />
                </Stack>
                <hr/>
                <FormMethod params={itemSelected}/>
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


const FormMethod = ({params}) => {
    const paramList = params?.params || []
    const [arrayValues,  setArrayValues] = useState(Array(paramList.length).fill(0));
    const [status, setStatus] = useState(undefined);
    if(paramList.length === 0){
        return (
            <FormGroup>
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
        <FormGroup>
            <Stack gap={3}>
            {
                paramList.map((obj, ind) => (
                    <NumberInput
                        // id="carbon-number"
                        value={obj.defaultValue}
                        label={obj.label}
                        onChange={(e) => {
                            let tmp_array = [ ...arrayValues ];
                            tmp_array[ind] = e;
                            setArrayValues(tmp_array);
                            }
                        }
                        allowEmpty={false}
                        invalidText="Number is not valid"
                    />
                ))
            }
            <Button
                onClick={() => setStatus('success')}
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
            label:'Optimization problem',
            params:[{
                label:'parametro 1',
                defaultValue:2
            }, 
            {
                label:'parametro 1',
                defaultValue:2
            }]
        },
        {
            label:'Crossover operator',
            params:[{
                label:'parametro 2',
                defaultValue:2
            }, 
            {
                label:'parametro 2',
                defaultValue:2
            }]        
        }
    ]
};

  export default FormPyristic;