import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
    ProgressIndicator,
    ProgressStep,
    Grid,
    Column,
    OverflowMenu,
    OverflowMenuItem
} from '@carbon/react';


const ProgressStepsBar = ({ progressItems, callBack, storageKey }) => {
    const [index, setIndex] = useState(0);
    const [stepsVisited, setStepsVisited] = useState(new Set());
    const currentConfig = useSelector((state) => state[storageKey]);

    const hasSelectedMethod = (keyStorage) =>  currentConfig[keyStorage].operator_name !== 'No selected';
    const hasVisited = (ind) => stepsVisited.has(ind); 
    const updateVisitedItems = (ind) => {
        let updateVisited = new Set(stepsVisited);
        updateVisited.add(ind);
        setStepsVisited(updateVisited);
    };
    return(
        <Grid>
            <Column lg={16} md={0} sm={0}>
                <ProgressIndicator 
                    currentIndex={index} 
                    onChange={ (e) => { 
                        callBack(e);
                        updateVisitedItems(index);
                        setIndex(e); 
                    }} 
                    className='progress-bar-position'
                    spaceEqually={true}
                >
                {
                    progressItems.map( (item, ind) => (
                        <ProgressStep 
                            key={ind}
                            complete={ hasSelectedMethod(item.keyGlobalStorage) }
                            invalid={ !hasSelectedMethod(item.keyGlobalStorage) && hasVisited(ind)}
                            label={item.label}
                            description={item.description}
                        />
                    ))
                }
                </ProgressIndicator>
            </Column>
            <Column lg={0} md={8} sm={4} className='overflow-position'>
                <OverflowMenu
                ariaLabel="overflow-menu"
                size="md"
                >
                    {
                        progressItems.map( (item, ind) => (
                            <OverflowMenuItem 
                                key={ind} 
                                itemText={item.label}
                                onClick={() => {
                                    callBack(ind);
                                    setIndex(ind);
                                }}
                            />  
                        ))
                    }
                    
                </OverflowMenu>
            </Column>
        </Grid>
           

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