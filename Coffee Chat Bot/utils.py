def print_message():
    print('I\'m sorry, I did not understand your selection. Please enter the corresponding letter for your response.')


def get_size():
    res = input('What size drink can I get for you? \n[a] Small \n[b] Medium \n[c] Large \n> ')

    if res == 'a':
        return 'Small'
    elif res == 'b':
        return 'Medium'
    elif res == 'c':
        return 'Large'
    else:
        print_message()
        return get_size()


def order_latte():
    res = input('And what kind of milk for your latte? \n[a] 2% milk \n[b] Non-fat milk \n[c] Soy milk \n> ')

    if res == 'a':
        return 'Latte'
    elif res == 'b':
        return 'Non-Fat Latte'
    elif res == 'c':
        return 'Soy Latte'
    else:
        print_message()
        return order_latte()


def order_mocha():
    while True:
        res = input('Would like to try our limited-edition peppermint mocha? \n[a] Sure! \n[b] Maybe next time! \n> ')
        if res == 'a':
            return 'Peppermint Mocha'
        elif res == 'b':
            return 'Mocha'
        print_message()
