import numpy as np
def g_salesman(x : np.ndarray) -> bool:

    size = len(x)
    size_ = len(np.unique(x))
    return size == size_

ARRAY_CONSTRAINTS= [g_salesman]