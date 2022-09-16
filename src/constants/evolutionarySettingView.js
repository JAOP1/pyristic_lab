import { 
    AG_COUNTINUOS_MUTATION_OP,
    AG_CONTINUOS_CROSSOVER_OP,
    AG_PARENT_SELECTION,
    EP_CONTINUOS_ADAPTIVE_MUTATION_OP,
    EP_CONTINUOS_MUTATION_OP,
    SURVIVOR_SELECTION,
    EE_CONTINUOS_CROSSOVER_OP,
    EE_CONTINUOS_ADAPTIVE_CROSSOVER_OP,
    EE_CONTINUOS_ADAPTIVE_MUTATION_OP,
    EE_CONTINUOS_MUTATION_OP,
    SETTING_INVALID_SOLUTIONS
} from './evolutionaryMethods';
import { 
    mutationUpdatedAG,
    crossoverUpdatedAG,
    survivorSelectionUpdatedAG,
    parentSelectionUpdatedAG,
    setInvalidSolutionUpdatedAG
} from '../storage_reducers/AGStore';
import {
    mutationUpdatedEP,
    adaptiveMutationUpdatedEP,
    survivorSelectionUpdatedEP,
    setInvalidSolutionUpdatedEP
} from '../storage_reducers/EPStore';
import {
    crossoverUpdatedEE,
    crossoverAdaptiveUpdatedEE,
    mutatioAdaptiveUpdatedEE,
    mutationUpdatedEE,
    survivorSelectionUpdatedEE,
    setInvalidSolutionUpdatedEE
} from '../storage_reducers/EEStore';

//------------------- AG form view requirements ----------------------------
export const SETTINGS_AG = [
    {
        title:'Parent selection',
        item_list:AG_PARENT_SELECTION,
        handler:  parentSelectionUpdatedAG,
        getData: (state) => state.continuosAG.parent_selector
    },
    {
        title:'Crossover operator',
        item_list:AG_CONTINUOS_CROSSOVER_OP,
        handler: crossoverUpdatedAG,
        getData: (state) => state.continuosAG.crossover_operator
    },
    {
        title:'Mutation operator',
        item_list:AG_COUNTINUOS_MUTATION_OP,
        handler: mutationUpdatedAG,
        getData: (state) => state.continuosAG.mutation_operator
    },
    {
        title:'Survivor selection',
        item_list:SURVIVOR_SELECTION,
        handler: survivorSelectionUpdatedAG,
        getData: (state) => state.continuosAG.survivor_selector
    },
    {
        title:'Adjust invalid solutions',
        item_list:SETTING_INVALID_SOLUTIONS,
        handler: setInvalidSolutionUpdatedAG,
        getData: (state) => state.continuosAG.setter_invalid_solution
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
    {
        label:'Step 5',
        description:'Step 4: Select adjustment invalid solutions method.',
        keyGlobalStorage:'setter_invalid_solution'
    },
];

//------------------- EP form view requirements ----------------------------
export const SETTINGS_EP = [
    {
        title:'Mutation operator',
        item_list:EP_CONTINUOS_MUTATION_OP,
        handler:  mutationUpdatedEP,
        getData: (state) => state.continuosEP.mutation_operator

    },
    {
        title:'Adaptive mutation operator',
        item_list:EP_CONTINUOS_ADAPTIVE_MUTATION_OP,
        handler: adaptiveMutationUpdatedEP,
        getData: (state) => state.continuosEP.adaptive_mutation_operator

    },
    {
        title:'Survivor selection',
        item_list:SURVIVOR_SELECTION,
        handler: survivorSelectionUpdatedEP,
        getData: (state) => state.continuosEP.survivor_selector

    },
    {
        title:'Adjust invalid solutions',
        item_list:SETTING_INVALID_SOLUTIONS,
        handler: setInvalidSolutionUpdatedEP,
        getData: (state) => state.continuosEP.setter_invalid_solution

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
    {
        label:'Step 4',
        description:'Step 4: Select adjustment invalid solutions method.',
        keyGlobalStorage:'setter_invalid_solution'
    },
]

//------------------- EE form view requirements ----------------------------

export const SETTINGS_EE = [
    {
        title:'Crossover operator',
        item_list:EE_CONTINUOS_CROSSOVER_OP,
        handler:  crossoverUpdatedEE,
        getData: (state) => state.continuosEE.crossover_operator

    },
    {
        title:'Adaptive crossover operator',
        item_list:EE_CONTINUOS_ADAPTIVE_CROSSOVER_OP,
        handler:  crossoverAdaptiveUpdatedEE,
        getData: (state) => state.continuosEE.adaptive_crossover_operator

    },    
    {
        title:'Mutation operator',
        item_list:EE_CONTINUOS_MUTATION_OP,
        handler:  mutationUpdatedEE,
        getData: (state) => state.continuosEE.mutation_operator

    },
    {
        title:'Adaptive mutation operator',
        item_list:EE_CONTINUOS_ADAPTIVE_MUTATION_OP,
        handler: mutatioAdaptiveUpdatedEE,
        getData: (state) => state.continuosEE.adaptive_mutation_operator

    },
    {
        title:'Survivor selection',
        item_list:SURVIVOR_SELECTION,
        handler: survivorSelectionUpdatedEE,
        getData: (state) => state.continuosEE.survivor_selector

    },
    {
        title:'Adjust invalid solutions',
        item_list:SETTING_INVALID_SOLUTIONS,
        handler: setInvalidSolutionUpdatedEE,
        getData: (state) => state.continuosEE.setter_invalid_solution

    }, 
];

export const TABS_EE = [
    {
        label:'step 1',
        description:'Step 1: Select crossover method',
        keyGlobalStorage:'crossover_operator'
    },
    {
        label:'step 2',
        description:'Step 2: Select adaptive crossover method',
        keyGlobalStorage:'adaptive_crossover_operator'
    },
    {
        label:'Step 3',
        description:'Step 3: Select mutation method.',
        keyGlobalStorage:'mutation_operator'
    },
    {
        label:'Step 4',
        description:'Step 4: Select adaptive mutation method.',
        keyGlobalStorage:'adaptive_mutation_operator'
    },
    {
        label:'Step 5',
        description:'Step 5: Select survivor selection method.',
        keyGlobalStorage:'survivor_selector'
    },
    {
        label:'Step 6',
        description:'Step 6: Select adjustment invalid solutions method.',
        keyGlobalStorage:'setter_invalid_solution'
    },
]
