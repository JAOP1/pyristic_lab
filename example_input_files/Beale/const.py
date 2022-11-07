def constraint1_beale(X) -> bool:
    for i in range(len(X)):
        if -4.5>X[i] or X[i] > 4.5:
            return False
    return True

ARRAY_CONSTRAINTS = [constraint1_beale]
