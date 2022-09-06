import React from 'react';
import {
    AccordionSkeleton,
    Accordion,
    AccordionItem,
    Grid,
    Column,
    NumberInput
} from '@carbon/react';
const AccordionForm = ({ arrayParameterSections }) => {

    if(arrayParameterSections.length === 0){
        return(
            <AccordionSkeleton
                count={3}
                open={false}
            />
        );
    }
    return(
        <Accordion style={{marginTop:'2%'}}>
            {
                arrayParameterSections.map((section) => (
                    <AccordionItem key={`accordionItem-${section.id}`} title={section.name}>
                        <Grid>
                            {
                                section.parameters.map((param, ind) => (
                                    <Column lg={4} md={2} sm={4}>
                                        <NumberInput
                                            id={`input_dash_number_${ind}`}
                                            key={ind}
                                            value={1}
                                            invalidText={'Invalid value, check the specifications.'}
                                            // onChange={(e, { value }) => {
                                            //     let tmp_array = [ ...arrayValues ];
                                            //     const _value = parseFloat(value);
                                            //     if(Number.isNaN(_value)){
                                            //         return;
                                            //     }
                                            //     tmp_array[ind] = _value;
                                            //     setArrayValues(tmp_array);
                                            //     }
                                            
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