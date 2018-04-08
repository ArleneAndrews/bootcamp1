levels = int(input("How many levels?"))
if 1 > levels:
    print("I can't print that type yet!")

elif levels > 24:
    print("Too tall! Less than 24, please.")

else:
    brick ='#'
    step = '~'
    line = ''

    for space in range(levels):
        line -= step
        print(line)
    # for brick in range(levels):
    #    currentRowAsString += "#"
    #     print (line)
    