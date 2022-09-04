import { Link } from '@carbon/react';
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
        <ul>
            <li>
                Write a function with the name 'function' this is your optimization problem.
            </li>
            <li>
                If you are working with a evolutionary algorithm you should type another function with then name 'aptitude_function'
                that keeps their codomain between (INF, 1]. It means the element most near to number 1 is the 
                best element. 
            </li>
        </ul>
    </div>
);