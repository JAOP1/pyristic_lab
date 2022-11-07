import numpy as np
def constraint1_ackley(X : np.ndarray) -> bool:
    str_ = ""
    valid = True
    for i in range(len(X)):
        if -30>X[i] or X[i] > 30:
            valid = False
        str_+= "x{}: -30 <= {:.2f} <= 30 \n ".format(i+1, X[i])
    
    #Important if you want to see the result.    
    constraint1_ackley.__doc__= str_
    return valid

ARRAY_CONSTRAINTS = [constraint1_ackley]