import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
    ProgressIndicator,
    ProgressStep,
} from '@carbon/react';


const ProgressStepsBar = ({ progressItems, callBack, storageKey }) => {
    const [index, setIndex] = useState(0)
    const currentConfig = useSelector((state) => state[storageKey]);

    return(
            <ProgressIndicator 
                currentIndex={index} 
                onChange={ (e) => { 
                    callBack(e);
                    setIndex(e); 
                }} 
                className='progress-bar-position'
                spaceEqually={true}
            >
            {
                progressItems.map( (item, ind) => (
                    <ProgressStep 
                        key={ind}
                        complete={ currentConfig[item.keyGlobalStorage].operator_name !== 'No selected' }
                        label={item.label}
                        description={item.description}
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
            complete:true
        }
    ]
};

export default ProgressStepsBar;