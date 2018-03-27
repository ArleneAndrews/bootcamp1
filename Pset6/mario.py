while True:
    print("How many levels? Max 23")
    levels = input()
    if 0 < int(levels) < 24:
        continue
    for i in range (int(levels), -1, -1):
        for j in range (1, int(levels), 1):