import React, { useState } from 'react';
import ProgressStepsBar from '../ProgressStepsBar';
import FormPyristic from '../FormPyristic';

export const FormStepsView = ({ formItems, tabs }) => {
    const [ currentView, setCurrentView] = useState(0);
    return(
        <>
            <ProgressStepsBar
                progressItems={tabs}
                callBack={(ind) =>  setCurrentView(ind)}
            />
            <FormPyristic 
                itemList={ formItems[currentView].item_list }
                title={ formItems[currentView].title }
                globalStorageHandler={ formItems[currentView].handler}
            />
        </>
    );
} 

export default FormStepsView;