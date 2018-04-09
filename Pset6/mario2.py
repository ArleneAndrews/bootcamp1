levels = int(input("How many levels?  "))
if 1 > levels:
    print("I can't print that type yet!")

elif levels > 24:
    print("Too tall! Less than 24, please.")

else:
    for level in range(levels, 0, -1):
        #start of new row
        line = ''
        #calculate number of spaces for this level
        numberOfSpacesForLevel = level - 1
        #calculate number of bricks for this level
        numberOfBricksForLevel = levels - numberOfSpacesForLevel

        #add spaces to this new row
        for space in range(numberOfSpacesForLevel):
            line += ' '

        #do bricks stuff here
        for brick in range(numberOfBricksForLevel):
            line += '#'

        #Line has been built, print and then start the loop over
        print(line)