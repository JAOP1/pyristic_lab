import { HOST } from './constants/settings';
function createEvolutionaryRequestBody(id, optimizerParameters, additionalArgs){
    let data_body = {};
    data_body['arguments_optimizer'] = {
        'arguments': optimizerParameters[id]
    };
    data_body['config_operators'] = {
        'methods': additionalArgs[id]
    };
    return data_body;
};

function createSimulatedAnnealingRequestBody(id, optimizerParameters){
    return {
        'arguments': optimizerParameters[id]
    };
};

export const getBodyRequest = (algorithm, requiredInputs, additionalInputs) => {
    switch(algorithm){
        case 'CombinatorialAG':
        case 'GA':
        case 'EP':
        case 'EE':
            return createEvolutionaryRequestBody(algorithm, requiredInputs, additionalInputs);
        case 'SimulatedAnnealing':
            return createSimulatedAnnealingRequestBody(algorithm, requiredInputs);
        default:
            console.log("Not found");
    }
};

export const getAPIRoute = (algorithm) => {
    switch(algorithm){
        case 'CombinatorialAG':
            return `${HOST}/optimize/evolutionary/GA`;
        case 'GA':
        case 'EP':
        case 'EE':
            return `${HOST}/optimize/evolutionary/${algorithm}`;
        case 'SimulatedAnnealing':
            return `${HOST}/optimize/SimulatedAnnealing`;
        default:
            console.log("Not found");
    }
};

export const getTime = () => {
    const date = new Date();
    const format = (item) => ('0'+item).slice(-2); 
    return `${format(date.getHours())}:${format(date.getMinutes())}:${format(date.getSeconds())}`;
};

export const formatArrayToString = (array) => {
    return `[${array.join(',')}]`;
};