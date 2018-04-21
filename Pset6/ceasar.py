# need loop for each?
message = (input("Please add your message here. "))
messagelength = len(message)
message = message.upper()
    
key = int(input("Choose a numerical key. "))

print("This works.")


#Insure key is less than 26
if key > 26:
    key = key % 26

print(key)


#keymapping
def toCesaer(incoming):
    ceasar = ''
    for letter in range(messagelength):
        if 'A' <= letter <= 'Z':
            location = ord(letter)
            new_ascii = location + key
            character = chr(new_ascii)
        ceasar = ceasar + character
    return ceasar

print(toCesaer(message))