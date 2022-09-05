import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProgressStepsBar from '../ProgressStepsBar';
import FormPyristic from '../FormPyristic';

export const FormStepsView = ({ formItems, tabs, algorithm }) => {
    const [ currentView, setCurrentView] = useState(0);
    return(
        <>
            <ProgressStepsBar
                progressItems={tabs}
                callBack={(ind) =>  setCurrentView(ind)}
                storageKey={algorithm}
            />
            <FormPyristic 
                itemList={ formItems[currentView].item_list }
                title={ formItems[currentView].title }
                globalStorageHandler={ formItems[currentView].handler}
            />
        </>
    );
}

FormStepsView.propTypes = {
    formItems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            handler: PropTypes.func,
            item_list: PropTypes.arrayOf(
                PropTypes.shape({
                    label:PropTypes.string,
                    method_name:PropTypes.string,
                    description_render: PropTypes.element,
                    params: PropTypes.array    
                })
            )
        })
    ),
    tabs: PropTypes.arrayOf( 
        PropTypes.shape({
            label: PropTypes.string,
            description: PropTypes.string,
            keyGlobalStorage:PropTypes.string
        })
    ),

    algorithm: PropTypes.string.isRequired
};

export default FormStepsView;