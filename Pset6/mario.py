levels = int(input("How many levels? Max 23 "))
if 0 > levels:
    print("I can't print that type yet!")

elif levels > 24:
    print("Too tall! Less than 24, please.")


else:
    bricks = 1
     for i in range((levels-bricks), 0, -1):
        print(" "end="")
        for j in range(bricks):
            print("#")
            bricks +=
    