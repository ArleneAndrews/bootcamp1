# need loop for each?
   
key = (input("Choose an alpabetical key. "))

message = (input("Please add your message here. "))

#Insure key is less than 26
if key > 26:
    key = key % 26

#keymapping
def toVigenere(incoming):
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

print(toVigenere(message))