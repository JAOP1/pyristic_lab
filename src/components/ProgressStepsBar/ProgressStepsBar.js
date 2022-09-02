import React from 'react';
import PropTypes from 'prop-types';
import {
    ProgressIndicator,
    ProgressStep,
} from '@carbon/react';


const ProgressStepsBar = ({ progressItems }) => {

    return(
            <ProgressIndicator className='progress-bar-position'>
            {
                progressItems.map( (item, ind) => (
                    <ProgressStep key={ind}
                        { ...item }
                    />
                ))
            }
            </ProgressIndicator>

    );
};

ProgressStepsBar.propTypes = {
    progressItems: 
        PropTypes.arrayOf(    
            PropTypes.shape(
                {
                    label: PropTypes.string,
                    description: PropTypes.string
                })
        )
};

ProgressStepsBar.defaultProps = {
    progressItems: [
        {
            label:'Optimization problem',
            description:'Step 1: Include the optimization problem.',
            current:true
        },
        {
            label:'Crossover operator',
            description:'Step 2: Selection of crossover operator.'
        }
    ]
};

export default ProgressStepsBar;