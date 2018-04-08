levels = int(input("How many levels? Max 23 "))
if 0 > levels:
    print("I can't print that type yet!")

elif levels > 24:
    print("Too tall! Less than 24, please.")

else:
    brick =''
    step = ''
    line = ''

    # This should print spaces, one less each iteration
    for i in range(levels-1, -1, -1):
       step += ' '
    #This should print the hashes to complete the row
    for i in range(levels):
        line += '#'
        print(line)

        """  for space in range(numberOfSpacesForCurrentRow):
            currentRowAsString += " "
        for brick in range(numberOfBricksForCurrentRow):
            currentRowAsString += "#"

        print(currentRowAsString) """