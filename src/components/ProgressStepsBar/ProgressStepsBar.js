import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    ProgressIndicator,
    ProgressStep,
} from '@carbon/react';


const ProgressStepsBar = ({ progressItems }) => {
    const [index, setIndex] = useState(0)
    return(
            <ProgressIndicator 
                currentIndex={index} 
                onChange={ (e) =>  setIndex(e) } 
                className='progress-bar-position'
                spaceEqually={true}
            >
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
            label:'Step 1',
            description:'Step 1: Include the optimization problem.',
        },
        {
            label:'Step 2',
            description:'Step 2: Selection of crossover operator.'
        },
        {
            label:'Step 1',
            description:'Step 1: Include the optimization problem.',
        },
        {
            label:'Step 2',
            description:'Step 2: Selection of crossover operator.'
        },
        {
            label:'Step 1',
            description:'Step 1: Include the optimization problem.',
        },
        {
            label:'Step 2',
            description:'Step 2: Selection of crossover operator.'
        }
    ]
};

export default ProgressStepsBar;