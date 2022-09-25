import { Equation } from 'react-equation';

export const AG_COUNTINUOS_MUTATION_OP = [
    {
        label:'Binary mutation',
        method_name:'BinaryMutator',
        description_render: (
            <>
            <p>
                The method works using the following equation:
            </p>
            <Equation
                value={'5m + 1/2m'}
            />
            </>
        ),
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
    },
    {
        label:'customize method',
        method_name:'CustomMethod',
        filename: 'mutation_operator',
        initialCode: 'import numpy as np\nclass CustomMethod:\n\tdef __init__(self):\n\t\tself.__doc__="custom mutation method."\n\tdef __call__(self, population: np.ndarray)->np.ndarray:\n\t\t"""Description:\n\t\tThis method should mutate the numpy matrix, where every row is an individual\n\t\tand every column is a decision variable.\n\t\t"""\n\t\t#TODO\n'
    }
];

export const AG_CONTINUOS_CROSSOVER_OP = [
    {
        label:'Discrete crossover',
        method_name:'DiscreteCrossover',
        equation:'2 x',
        params:[]
    },
    {
        label:'Arithmetic crossover',
        method_name:'IntermediateCrossover',
        description_render: (
            <>
            <p>
                The method works using the following equation:
            </p>
            <Equation
                value={'A*x + B*(1-x)'}
            />
            </>
        ),
        params:[
            {
                label:'Alpha',
                initialValue:0.5,
                min:0,
                max:1,
                helperText:'The number should stay between [0,1]',
                step:0.1
            } 
        ]
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
    },
    {
        label:'customize method',
        method_name:'CustomMethod',
        filename:'crossover_operator',
        initialCode: 'import numpy as np\nclass CustomMethod:\n\tdef __init__(self):\n\t\tself.__doc__="custom crossover method."\n\tdef __call__(self, population: np.ndarray, parent_ind1: np.ndarray, parent_ind2: np.ndarray)->np.ndarray:\n\t\t"""Description:\n\t\tThis method should apply the desired operations to the population matrix,\n\t\twhere every row is an individual and every column is a decision variable.\n\t\tThe individuals to cross are population[parend_ind1] and population[parent_ind2].\n\t\t"""\n\t\t#TODO\n'
    }
];

export const AG_PARENT_SELECTION = [
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
    {
        label:'Roulette selection',
        method_name:'RouletteSampler',
        equation:'2 x',
        params:[]
    },
    {
        label:'Stochastic Universal selection',
        method_name:'StochasticUniversalSampler',
        equation:'2 x',
        params:[]
    },
    {
        label:'Deterministic selection',
        method_name:'DeterministicSampler',
        equation:'2 x',
        params:[]
    },
    {
        label:'customize method',
        method_name:'CustomMethod',
        filename:'parent_selector',
        initialCode: 'import numpy as np\nclass CustomMethod:\n\tdef __init__(self):\n\t\tself.__doc__="custom parent selection method."\n\tdef __call__(self, population_aptitude: np.ndarray )->np.ndarray:\n\t\t"""Description:\n\t\tThis method should return the number of copies of individuals according to the operations below.\n\t\t"""\n\t\t#TODO\n'
    }
];

export const SURVIVOR_SELECTION = [
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

export const EP_CONTINUOS_ADAPTIVE_MUTATION_OP = [
    {
        label:'default',
        method_name:'SigmaEpAdaptiveMutator',
        description_render: (
            <>
            <p>
                The method works using the following equation:
            </p>
            <Equation
                value={'+ 1/2m'}
            />
            </>
        ),
        params:[
            {
                label:'Decision variables of problem',
                initialValue:1,
                min:1,
                max:100,
                step:1
            },
            {
                label:'Alpha',
                initialValue:0.2,
                min:0,
                max:1,
                helperText:'The number should stay between [0,1]',
                step:0.1
            }
        ]
    },
    {
        label:'customize method',
        method_name:'CustomMethod',
        filename:'adaptive_mutation_operator'
    }
];

export const EP_CONTINUOS_MUTATION_OP = [
    {
        label:'default',
        method_name:'SigmaMutator',
        description_render: (
            <>
            <p>
                The method works using the following equation:
            </p>
            <Equation
                value={'+ 1/2m'}
            />
            </>
        ),
        params:[]
    },
    {
        label:'customize method',
        method_name:'CustomMethod',
        filename:'mutation_operator'
    }
];

export const EE_CONTINUOS_CROSSOVER_OP = [
    {
        label:'Discrete crossover',
        method_name:'DiscreteCrossover',
        description_render: (
            <>
            <p>
                The method works using the following equation:
            </p>
            <Equation
                value={'+ 1/2m'}
            />
            </>
        ),
        params:[]
    },
    {
        label:'Arithmetic crossover',
        method_name:'IntermediateCrossover',
        description_render: (
            <>
            <p>
                The method works using the following equation:
            </p>
            <Equation
                value={'A*x + B*(1-x)'}
            />
            </>
        ),
        params:[
            {
                label:'Alpha',
                initialValue:0.5,
                min:0,
                max:1,
                helperText:'The number should stay between [0,1]',
                step:0.1
            } 
        ]
    },
    {
        label:'customize method',
        method_name:'CustomMethod',
        filename:'crossover_operator'
    }
];

export const EE_CONTINUOS_ADAPTIVE_CROSSOVER_OP = [
    {
        label:'Discrete crossover',
        method_name:'DiscreteCrossover',
        description_render: (
            <>
            <p>
                The method works using the following equation:
            </p>
            <Equation
                value={'+ 1/2m'}
            />
            </>
        ),
        params:[]
    },
    {
        label:'Arithmetic crossover',
        method_name:'IntermediateCrossover',
        description_render: (
            <>
            <p>
                The method works using the following equation:
            </p>
            <Equation
                value={'A*x + B*(1-x)'}
            />
            </>
        ),
        params:[
            {
                label:'Alpha',
                initialValue:0.5,
                min:0,
                max:1,
                helperText:'The number should stay between [0,1]',
                step:0.1
            } 
        ]
    },
    {
        label:'customize method',
        method_name:'CustomMethod',
        filename:'adaptive_crossover_operator'
    }
];

export const EE_CONTINUOS_MUTATION_OP = [
    {
        label:'default',
        method_name:'SigmaMutator',
        description_render: (
            <>
            <p>
                The method works using the following equation:
            </p>
            <Equation
                value={'+ 1/2m'}
            />
            </>
        ),
        params:[]
    },
    {
        label:'customize method',
        method_name:'CustomMethod',
        filename:'mutation_operator'
    }
];

export const EE_CONTINUOS_ADAPTIVE_MUTATION_OP = [
    {
        label:'Mutation by single sigma per solution',
        method_name:'SingleSigmaAdaptiveMutator',
        description_render: (
            <>
            <p>
                The method works using the following equation:
            </p>
            <Equation
                value={'+ 1/2m'}
            />
            </>
        ),
        params:[ ]
    },
    {
        label:'Mutation by sigma per decision variable  for each solution',
        method_name:'MultSigmaAdaptiveMutator',
        description_render: (
            <>
            <p>
                The method works using the following equation:
            </p>
            <Equation
                value={'+ 1/2m'}
            />
            </>
        ),
        params:[
            {
                label:'Decision variables of problem',
                initialValue:1,
                min:1,
                max:100,
                step:1
            }
        ]
    },
    {
        label:'customize method',
        method_name:'CustomMethod',
        filename:'adaptive_mutation_operator'
    }
];

export const SETTING_INVALID_SOLUTIONS = [
    {
        label:'Adjust to near limit',
        method_name:'ContinuosFixer',
        inside_array:true,
        description_render:(
            <>
                <p>
                    The method works using the following equation:
                </p>
                <Equation
                    value={'+ 1/2m'}
                />
            </>
        ),
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