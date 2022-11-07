def function(X) -> float:
    a = (1.5 - X[0] + X[0]*X[1])**2
    b = (2.25 - X[0] + X[0]*X[1]**2)**2
    c = (2.625 - X[0] + X[0]*X[1]**3)**2
    return a+b+c

def aptitude_function(X):
    return 1/(function(X)+1)