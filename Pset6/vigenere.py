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

    stupid = len(shift)
    print (int(stupid))
        
    for letter in incoming:
        
        #changes to all uppercase
        letter = letter.upper()
        #figures out if it's a letter
        if 'A' <= letter <= 'Z':
            #converts letter to its ordial form
            location = ord(letter)
            print (location)
            #finds out where in the key we are
            position = int([count % int(stupid)])
            print(position)
            #converts key letter to offset (ord minus A)
            converted =  (ord(shift[position])) - 65
            #Increases count
            count += 1
            #add offset to old letter ordinal
            new_ascii = location + converted
            print(new_ascii)
            #wrap around to avoid non-letter chars
            if  ord('Z') < new_ascii:
                new_ascii = int(((new_ascii - ord('A')) % 26) + ord('A'))
                
            character = chr(new_ascii)

        #adds characters and punctuation to string
        cypher = cypher + character
    return cypher

print(toVigenere(key, message))