due = float(input("Amount due. "))
    
give = float(input("Amount recieved. "))
if give < due:
    print('You need to get more money.')

total = give - due
total = round (total, 2)
print(total)
answer = ''

if total >= 1.0:
    dollars = total/1.0
    total = total  - int(dollars)
    answer = answer + str(dollars) +' dollars '

if total >= .25:
    quarters = total/25
    total = total  - (quarters * 25)
    answer = answer + str(int (quarters * 100)) +' quarters '

if total >= .10:
    dimes = total/10
    total = total  - (dimes * 10)
    answer = answer + str(int (dimes * 100)) +' dimes '

if total >= .05:
    nickles = total/5
    total = total - (nickles * 5)
    answer = answer + str(int(nickles * 100)) +' nickles '

if total > 0:
    answer = answer + str(int(total * 100)) +' pennies '

print(answer)