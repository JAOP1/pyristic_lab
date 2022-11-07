import {
    Link,
    UnorderedList,
    ListItem,
    CodeSnippet,
    Theme
} from '@carbon/react';

export const TEXT_SELECTION_DROPDOWN = (
    <p>Select the wanted method desired to execute during the process, every method is 
    described in <span>
        <Link href='https://jaop1.github.io/pyristic/'>
            pyristic documentation
        </Link>
    </span>
    </p> 
);

export const DESCRIPTION_FUNCTION = (
    <div>
        <p>
            Remember, before to start to work in you optimization function. You should
            keep in mind how to include you problem to optimize.
            The function format should be as follow:
        </p>
        <UnorderedList style={{marginLeft:'17px'}}>
            <ListItem>
                Write a function with the name <b style={{fontWeight:'bold'}}>function</b>. This is a reserve name for the project
                , this name is understanded as the optimization problem.
                <Theme theme="white">
                    <CodeSnippet
                        type={'multi'}
                    >
                        <p>def function(X) -> float:</p>
                        <p>&ensp; a = (1.5 - X[0] + X[0] * X[1] )**2</p>
                        <p>&ensp; b = (2.25 - X[0] + X[0] * X[1]**2)**2</p>
                        <p>&ensp; c = (2.65 - X[0] + X[0] * X[1]**3)**2</p>
                        <p>&ensp; return a+b+c</p>      
                    </CodeSnippet>
                </Theme>
            </ListItem>
            <ListItem>
                If you are working with a evolutionary algorithm you should type another function with then reserved name <b style={{fontWeight:'bold'}}>aptitude_function</b>.
                This function should be stay their codomain between (INF, 1]. It means the element most near to number 1 is the 
                best element. 
                <Theme theme="white">
                    <CodeSnippet
                        type={'multi'}
                    >
                        <p>def aptitude_function(X) -> float:</p>
                        <p>&ensp; return 1/(function(X) + 1)</p>
                    </CodeSnippet>
                </Theme>

            </ListItem>
        </UnorderedList>
    </div>
);

export const DESCRIPTION_CONSTRAINTS = (
    <div>
        <p>
            The constraints is an array where every item is a function that returns a boolean value. The array should be 
            called as <b style={{fontWeight:'bold'}}>ARRAY_CONSTRAINTS</b>. Every item evaluates the current solution, where it checks if the current solution is valid, if not
            it should return a false value. Those items could have the name format as you wanted. The following code is a example of how looks the constraints array for the 
            beale optimization problem:
        </p>
        <Theme theme="white">
            <CodeSnippet
                type={'multi'}
            >
                <p>def constraint1_beale(X) -> bool:</p>
                <p>&ensp; for i in range(len(X)):</p>
                <p>&ensp;&ensp; if -4.5>X[i] or X[i] > 4.5:</p>
                <p>&ensp;&ensp;&ensp; return False</p>
                <p>&ensp; return True</p>      
                <p>ARRAY_CONSTRAINTS = [constraint1_beale]</p>
            </CodeSnippet>
        </Theme>
        As you can see, the code above has only one constraint, where every solution has to be between (-4.5,4.5).
    </div>
);

export const DESCRIPTION_ADDITIONALS = (
    <div>
        <p>
            Every continuos optimization problem should save the following variables:
        </p>
        <UnorderedList style={{marginLeft:'17px'}}>
            <ListItem>
                <p>
                    <b style={{fontWeight:'bold'}}>BOUNDS:</b> This variable keeps the array with two floating
                    numbers. The first element is the lower bound and the second is the upper bound for the optimization
                    problem (currently only support the same limits for every decision variable).
                </p>
            </ListItem>
            <ListItem>
                <p>
                    <b style={{fontWeight:'bold'}}>DECISION_VARIABLES:</b> This is a integer number that indicates
                    how many variables has the problem.
                </p>
            </ListItem>
        </UnorderedList>
        The following code shows you how looks the variables described above for the Beale optimization problem.
        <Theme theme="white">
            <CodeSnippet
                type={'multi'}
            >
                <p>BOUNDS=[-4.5,4.5]</p>
                <p>DECISION_VARIABLES=2</p>            
            </CodeSnippet>
        </Theme>
    </div>
);

export const CODE_FUNCTION =`
def function(X) -> float:
    #TODO

def aptitude_function(X) -> float:
    #TODO
`;

export const CODE_CONSTRAINTS = `
def boundary_validation(X) -> bool:
    #TODO
ARRAY_CONSTRAINTS = [boundary_validation]
`;

export const CODE_ADDITIONALS = `
BOUNDS = [-1,1] #Set the lower bound and upper bound.
DECISION_VARIABLES = 2 #Set the number of variables.
`;