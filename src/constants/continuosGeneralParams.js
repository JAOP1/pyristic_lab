
export const list_inputs_algorithms = [
    {
        name:'Genetic algorithm',
        id:'GA',
        parameters: [
            {
                label:'Number of generations:',
                id:'generations',
                initialValue:10,
                min:1,
                max:1000,
                step:1
            },
            {
                label:'population size:',
                id:'size_population',
                initialValue:2,
                min:2,
                max:1000,
                step:1
            },
            {
                label:'cross percentage:',
                id:'cross_percentage',
                initialValue:0.85,
                min:0,
                max:1,
                step:0.1
            },
            {
                label:'mutation percentage:',
                id:'mutation_percentage',
                initialValue:0.75,
                min:0,
                max:1,
                step:0.1
            },
        ]
    },
    {
        name:'Evolutive Programming',
        id:'EP',
        parameters: [
            {
                label:'Number of generations:',
                id:'generations',
                initialValue:10,
                min:1,
                max:1000,
                step:1
            },
            {
                label:'Population size:',
                id:'size_population',
                initialValue:70,
                min:1,
                max:1000,
                step:1
            },
        ]
    },
    {
        name:'Evolutionary Strategy',
        id:'EE',
        parameters: [
            {
                label:'Number of generations:',
                id:'generations',
                initialValue:10,
                min:1,
                max:1000,
                step:1
            },
            {
                label:'Population size:',
                id:'population_size',
                initialValue:70,
                min:1,
                max:1000,
                step:1
            },
            {
                label:'Offspring size',
                id:'offspring_size',
                initialValue:70,
                min:1,
                max:1000,
                step:1
            }
        ]
    }
];

export const list_inputs_algorithms_combinatorial = [
    {
        name:'Simulated Annealing',
        id:'SimulatedAnnealing',
        parameters: [
            {
                label:'Initial temperature:',
                id:'initial_temperature',
                initialValue:1000,
                min:1,
                max:10000000,
                step:10
            },
            {
                label:'Epsilon:',
                id:'eps',
                initialValue:0.01,
                min:0,
                max:1,
                step:1
            },
           
        ]
    },
];