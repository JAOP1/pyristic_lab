import React from 'react';
import {
    AccordionSkeleton,
    Accordion,
    AccordionItem,
    Grid,
    Column,
    NumberInput
} from '@carbon/react';
const AccordionForm = ({ arrayParameterSections, currentState, callback }) => {



    if(arrayParameterSections.length === 0){
        return(
            <AccordionSkeleton
                style={{marginTop:'2%'}}
                count={3}
                open={false}
            />
        );
    }
    return(
        <Accordion style={{marginTop:'2%'}}>
            {
                arrayParameterSections.map(({ id:algorithmId, name, parameters}) => (
                    <AccordionItem key={`accordionItem-${algorithmId}`} title={name}>
                        <Grid>
                            {
                                parameters.map(({id: inputId, initialValue, ...param}, ind) => (
                                    <Column key={`inputs-${algorithmId}-${inputId}`} lg={5} md={4} sm={4}>
                                        <NumberInput
                                            id={`input_dash_number_${inputId}`}
                                            key={ind}
                                            value={ currentState[algorithmId][inputId] }
                                            invalidText={'Invalid value, check the specifications.'}
                                            onChange={(e, { value }) => {
                                                const _value = parseFloat(value);
                                                if(Number.isNaN(_value)){
                                                    return;
                                                }
                                                callback(algorithmId, inputId, _value);
                                            }}
                                            { ...param }
                                            
                                        />  
                                    </Column>
                                ))
                            }        
                        </Grid>
                    </AccordionItem>
                ))
            }
        </Accordion>
    );
};

AccordionForm.defaultProps={
    arrayParameterSections: [ ]
};
export default AccordionForm;