levels = int(input("How many levels?"))
if 0 > levels:
    print("I can't print that type yet!")

elif levels > 24:
    print("Too tall! Less than 24, please.")

else:
    brick =''
    step = ''
    line = ''

    # This should print spaces, one less each iteration
    for i in range(levels):
       step += ' ' -=1
       brick += '#'+=1
       line = step + brick
        print (line)
        #
        #print(line)

        #"""  for space in range(numberOfSpacesForCurrentRow):
        #    currentRowAsString += " "
        #for brick in range(numberOfBricksForCurrentRow):
        #    currentRowAsString += "#"
#
        #print(currentRowAsString) """