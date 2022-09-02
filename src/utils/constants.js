const AG_COUNTINUOS_MUTATION_OP = [
    {
        label:'Binary mutation',
        method_name:'BinaryMutator',
        equation:'5m + 1/2m * sin(π)',
        params:[
            {
                label:'mutation probability',
                initialValue:0.2,
                min:0,
                max:1,
                helperText:'The number should stay between [0,1]',
                step:0.1
            }
        ]
    },
    {
        label:'None uniform mutation',
        method_name:'NoneUniformMutator',
        equation:'5m + 1/2m * sin(π) + (22 m^2) / (2m)',
        params:[
            {
                label:'Sigma',
                initialValue:1.0,
                min:0,
                max:100,
                helperText:'The number should stay between [0,100]',
                step:1
            }
        ]
    },
    {
        label:'Uniform mutation',
        method_name:'UniformMutator',
        equation:'5m + 1/2m * sin(π) + (22 m^2) / (2m)',
        params:[
            {
                label:'Left bound',
                initialValue:0,
                min:-100,
                max:100,
                helperText:'The number should stay between [-100,100]',
                step:1
            },
            {
                label:'Right bound',
                initialValue:1,
                min:-100,
                max:100,
                helperText:'The number should stay between [-100,100]',
                step:1
            }
        ]
    },
    {
        label:'Boundary mutation',
        method_name:'BoundaryMutator',
        equation:'5m + 1/2m * sin(π) + (22 m^2) / (2m)',
        params:[
            {
                label:'Left bound',
                initialValue:0,
                min:-100,
                max:100,
                helperText:'The number should stay between [-100,100]',
                step:1
            },
            {
                label:'Right bound',
                initialValue:1,
                min:-100,
                max:100,
                helperText:'The number should stay between [-100,100]',
                step:1
            }
        ]
    } 
];

const AG_CONTINUOS_CROSSOVER_OP = [
    {
        label:'Discrete crossover',
        method_name:'DiscreteCrossover',
        equation:'2 x',
        params:[]
    },
    {
        label:'Simulated binary crossover',
        method_name:'SimulatedBinaryCrossover',
        equation:'2 x',
        params:[
            {
                label:'nc',
                initialValue:1,
            }
        ]
    },
    {
        label:'Uniform crossover',
        method_name:'UniformCrossover',
        equation:'2 x',
        params:[
            {
                label:'probability to flip values',
                initialValue:0.5,
                min:0,
                max:1,
                helperText:'The number should stay between [0,1]',
                step:0.1
            }
        ]
    },
    {
        label:'n - point crossover',
        method_name:'NPointCrossover',
        equation:'2 x',
        params:[
            {
                label:'number of points of cross',
                initialValue:1,
                min:1,
                max:100,
                helperText:'The number should stay between [1,100]',
                step:1
            }
        ]
    }
];

const AG_PARENT_SELECTION = [
    {
        label:'Tournament selection',
        method_name:'TournamentSampler',
        equation:'2 x',
        params:[
            {
                label:'size of every match group',
                initialValue:2,
                min:2,
                max:100,
                helperText:'The number should stay between [2,100]',
                step:1
            },
            {
                label:'Probability to select the best individual in the match',
                initialValue:1,
                min:0,
                max:1,
                helperText:'The number should stay between [0,1]',
            }
        ]
    },
];

const SURVIVOR_SELECTION = [
    {
        label:'Merge selection',
        method_name:'MergeSelector',
        params:[]
    },
    {
        label:'Replacement selection',
        method_name:'ReplacementSelector',
        params:[]
    }
];

module.exports = {
    AG_COUNTINUOS_MUTATION_OP,
    AG_CONTINUOS_CROSSOVER_OP,
    AG_PARENT_SELECTION,
    SURVIVOR_SELECTION
};