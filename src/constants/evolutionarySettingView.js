import { 
    AG_COUNTINUOS_MUTATION_OP,
    AG_CONTINUOS_CROSSOVER_OP,
    AG_PARENT_SELECTION,
    SURVIVOR_SELECTION
} from './evolutionaryMethods';
import { 
    mutationUpdated,
    crossoverUpdated,
    survivorSelectionUpdated,
    parentSelectionUpdated
} from '../storage_reducers/AGStore';

export const SETTINGS_AG = [
    {
        title:'Parent selection',
        item_list:AG_PARENT_SELECTION,
        handler:  parentSelectionUpdated
    },
    {
        title:'Crossover operator',
        item_list:AG_CONTINUOS_CROSSOVER_OP,
        handler: crossoverUpdated
    },
    {
        title:'Mutation operator',
        item_list:AG_COUNTINUOS_MUTATION_OP,
        handler: mutationUpdated
    },
    {
        title:'Survivor selection',
        item_list:SURVIVOR_SELECTION,
        handler: survivorSelectionUpdated
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
]