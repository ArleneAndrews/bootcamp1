levels = int(input("How many levels? Max 23 "))
if 0 > levels:
    print("I can't print that type yet!")

elif levels > 24:
    print("Too tall! Less than 24, please.")

else:
# This should print spaces, on less each iteration
    for i in range((levels), 0, -1):
        print(" ", end="")
        #This should print the rest of the line in hashes
        for j in range(i):
            print("#", end="")