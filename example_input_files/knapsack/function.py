num_cities = 10
dist_matrix =[
[0,49,30,53,72,19,76,87,45,48],
[49,0,19,38,32,31,75,69,61,25],
[30,19,0,41,98,56,6,6,45,53],
[53,38,41,0,52,29,46,90,23,98],
[72,32,98,52,0,63,90,69,50,82],
[19,31,56,29,63,0,60,88,41,95],
[76,75,6,46,90,60,0,61,92,10],
[87,69,6,90,69,88,61,0,82,73],
[45,61,45,23,50,41,92,82,0,5],
[48,25,53,98,82,95,10,73,5,0],
]

def function( x ) -> float:
    global dist_matrix
    total_dist = dist_matrix[int(x[-1])][0]
    for i in range(1,len(x)):
        u,v = int(x[i]), int(x[i-1])
        total_dist+= dist_matrix[u][v]

    return float(total_dist)

def aptitude_function(x):
    return -1 * function(x) 