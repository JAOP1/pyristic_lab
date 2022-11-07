import {
    Link,
    UnorderedList,
    ListItem,
    CodeSnippet
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
                <CodeSnippet
                    type={'multi'}
                    light
                    // style={ { background:'#f4f4f4' } }
                >
                    <p>def function(X) -> float:</p>
                    <p>&ensp; a = (1.5 - X[0] + X[0] * X[1] )**2</p>
                    <p>&ensp; b = (2.25 - X[0] + X[0] * X[1]**2)**2</p>
                    <p>&ensp; c = (2.65 - X[0] + X[0] * X[1]**3)**2</p>
                    <p>&ensp; return a+b+c</p>      
                </CodeSnippet>

            </ListItem>
            <ListItem>
                If you are working with a evolutionary algorithm you should type another function with then reserved name <b style={{fontWeight:'bold'}}>aptitude_function</b>.
                This function should be stay their codomain between (INF, 1]. It means the element most near to number 1 is the 
                best element. 
                <CodeSnippet
                    type={'multi'}
                >
                    <p>def aptitude_function(X) -> float:</p>
                    <p>&ensp; return 1/(function(X) + 1)</p>
                </CodeSnippet>

            </ListItem>
        </UnorderedList>
    </div>
);