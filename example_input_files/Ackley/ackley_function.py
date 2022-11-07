import numpy as np
def ackley_function(X : np.ndarray) -> float:
    n = len(X)
    square_sum = (1/n)*np.sum(X * X)
    trigonometric_sum = (1/n)*np.sum(np.cos(2*np.pi*X))
 
    return -20*np.exp( -0.2 * np.sqrt(square_sum)) - np.exp(trigonometric_sum) + 20 + np.e

def aptitude_function(X: np.array) -> np.array:
    return -1*ackley_function(X)