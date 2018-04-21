# need loop for each?
message = (input("Please add your message here. "))
messagelength = len(message)
    
key = int(input("Choose a numerical key. "))
if key <= 0:
    print('Key must be larger than 0.')

#Insure key is less than 26
if key > 26:
    key = key % 26

#keymapping
def toCesaer(incoming):
    ceasar = ''
    for letter in incoming:
        letter = letter.upper()
        if 'A' <= letter <= 'Z':
            location = ord(letter)
            new_ascii = location + key
            if  ord('Z') < new_ascii:
                new_ascii = int(((new_ascii - ord('A')) % 26) + ord('A'))
            character = chr(new_ascii)
        ceasar = ceasar + character
    return ceasar

print(toCesaer(message))