levels = int(input("How many levels? Max 23 "))
if 0 > levels:
    print("I can't print that type yet!")

elif levels > 24:
    print("Too tall! Less than 24, please.")

else:
    
    brick ='#'
    step =' '
    line = ''
    # This should print spaces, one less each iteration
    for i in range(levels, -1, -1):
       line += step
    #This should print the hashes
    for i in range(levels):
        line += brick
        print(line)