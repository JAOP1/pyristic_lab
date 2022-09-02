import React from 'react';
import { useLocation } from 'react-router-dom';


const Banner = () => {
    const location = useLocation();

    const getTitle = () => {
        console.log(location);
        switch(location.pathname){
            case '/':
                return 'Continuos';
            default:
                return 'Combinatorial';
        }
    };
    return(
        <div className='banner'>
            <h1 className="landing-page__heading">{getTitle()}</h1>
        </div>
    );
};
export default Banner;