# 인접 행렬
INF = 987654321

graph = [
[0,7,5],
[7,0,INF],
[5,INF,0]
]

print(graph)


# 인접 리스트 

graph2 = [[] for_in range(3)]

graph2[0].append((1,7))
graph2[0].append((2,5))