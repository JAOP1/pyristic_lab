import { 
    AG_COUNTINUOS_MUTATION_OP,
    AG_CONTINUOS_CROSSOVER_OP,
    AG_PARENT_SELECTION,
    EP_CONTINUOS_ADAPTIVE_MUTATION_OP,
    EP_CONTINUOS_MUTATION_OP,
    SURVIVOR_SELECTION
} from './evolutionaryMethods';
import { 
    mutationUpdatedAG,
    crossoverUpdatedAG,
    survivorSelectionUpdatedAG,
    parentSelectionUpdatedAG
} from '../storage_reducers/AGStore';
import {
    mutationUpdatedEP,
    adaptiveMutationUpdatedEP,
    survivorSelectionUpdatedEP
} from '../storage_reducers/EPStore';


//------------------- AG form view requirements ----------------------------
export const SETTINGS_AG = [
    {
        title:'Parent selection',
        item_list:AG_PARENT_SELECTION,
        handler:  parentSelectionUpdatedAG
    },
    {
        title:'Crossover operator',
        item_list:AG_CONTINUOS_CROSSOVER_OP,
        handler: crossoverUpdatedAG
    },
    {
        title:'Mutation operator',
        item_list:AG_COUNTINUOS_MUTATION_OP,
        handler: mutationUpdatedAG
    },
    {
        title:'Survivor selection',
        item_list:SURVIVOR_SELECTION,
        handler: survivorSelectionUpdatedAG
    },
];
export const TABS_AG = [
    {
        label:'Step 1',
        description:'Step 1: Select parent selection method.',
        keyGlobalStorage:'parent_selector'
    },
    {
        label:'Step 2',
        description:'Step 1: Select crossover method.',
        keyGlobalStorage:'crossover_operator'
    },
    {
        label:'Step 3',
        description:'Step 1: Select mutation method.',
        keyGlobalStorage:'mutation_operator'
    },
    {
        label:'Step 4',
        description:'Step 1: Select survivor selection method.',
        keyGlobalStorage:'survivor_selector'
    },
];

//------------------- AP form view requirements ----------------------------
export const SETTINGS_EP = [
    {
        title:'Mutation operator',
        item_list:EP_CONTINUOS_MUTATION_OP,
        handler:  mutationUpdatedEP
    },
    {
        title:'Adaptive mutation operator',
        item_list:EP_CONTINUOS_ADAPTIVE_MUTATION_OP,
        handler: adaptiveMutationUpdatedEP
    },
    {
        title:'Survivor selection',
        item_list:SURVIVOR_SELECTION,
        handler: survivorSelectionUpdatedEP
    },
];

export const TABS_EP = [
    {
        label:'Step 1',
        description:'Step 1: Select mutation method.',
        keyGlobalStorage:'mutation_operator'
    },
    {
        label:'Step 2',
        description:'Step 1: Select adaptive mutation method.',
        keyGlobalStorage:'adaptive_mutation_operator'
    },
    {
        label:'Step 3',
        description:'Step 1: Select survivor selection method.',
        keyGlobalStorage:'survivor_selector'
    },
]