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
            shift = global.key(count)
            print(shift)
            new_ascii = location + ord(key[count % len(key)].upper())
            if  ord('Z') < new_ascii:
                new_ascii = int(((new_ascii - ord('A')) % 26) + ord('A'))
            character = chr(new_ascii)
            count += 1
        cypher = cypher + character
    return cypher

print(toVigenere(message))