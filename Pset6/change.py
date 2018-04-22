due = int(input("Amount due. "))
    
give = int(input("Amount recieved. "))
if give < due:
    print('You need to get more moneyy.')

def coins_given(amount):
    coins = [(100, 'dollars'),(25, 'quarter'), (10, 'dime'), (5, 'nickel'), (1, 'penny')]
    answer = {}
    for coin_value, coin_name in coins:
        if amount >= coin_value:
            number_coin, amount = divmod(amount, coin_value)
            answer[coin_name] = number_coin
    return answer

total = give - due
coins_given(total)

