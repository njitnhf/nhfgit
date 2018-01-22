def move(n, a, b, c):
    if n == 1:
        print(a, '-->', c)
    else:
        move(n - 1, a, c, b)  # 有n个，将n-1个从a移动到b
        move(1, a, b, c)  # 将最后一个从a移动到c
        move(n - 1, b, a, c)  # 将剩下的n-1个从b移动到c


move(3, 'A', 'B', 'C')
