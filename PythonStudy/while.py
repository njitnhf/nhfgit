number = 23
running = True

while running:
    guess = int(input('请输入一个数字：'))

    if guess == number:
        print('猜对了！')
        running = False
    elif guess < number:
        print('还要再大一点')
    else:
        print('还要再小一点')
else:
    print('while循环结束.')

print('Done')