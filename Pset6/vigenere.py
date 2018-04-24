key = (input("Choose an alpabetical key. "))

message = (input("Please add your message here. "))

#keymapping
def toVigenere(key, incoming):
    cypher = ''
    count = 0
    shift = ''
    for char in key:
        char = char.upper()
        shift = shift + char
    
    for letter in incoming:
        letter = letter.upper()
        if 'A' <= letter <= 'Z':
            location = ord(letter)
            shifts = ((shift[count % len(shift)]))
            count += 1
            new_ascii = location + shifts
            print(new_ascii)
            if  ord('Z') < new_ascii:
                new_ascii = int(((new_ascii - ord('A')) % 26) + ord('A'))
            character = chr(new_ascii)
            
        cypher = cypher + character
    return cypher

print(toVigenere(key, message))