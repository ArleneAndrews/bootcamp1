key = (input("Choose an alpabetical key. "))

message = (input("Please add your message here. "))

#keymapping
def toVigenere(incoming):
    cypher = ''
    count = 0

    for letter in incoming:
        letter = letter.upper()
        if 'A' <= letter <= 'Z':
            location = ord(letter)
            new_ascii = location + ord(key[count % key.len].upper())
            if  ord('Z') < new_ascii:
                new_ascii = int(((new_ascii - ord('A')) % 26) + ord('A'))
            character = chr(new_ascii)
        cypher = cypher + character
    return cypher

print(toVigenere(message))