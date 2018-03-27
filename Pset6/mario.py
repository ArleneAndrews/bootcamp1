while True:
    print("How many levels? Max 23")
    levels = input()
    if 0 < levels < 24:
        continue
    for i in range (levels, -1, -1):
        print # 