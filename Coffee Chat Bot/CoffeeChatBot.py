from utils import *


def coffee_bot():
    print('Welcome to the cafe!')

    order_drink = 'y'
    drinks = []
    while order_drink == 'y':
        size = get_size()
        drink_type = get_drink_type()

        drink = '{} {}'.format(size, drink_type)
        print('Alright, that\'s a {}!'.format(drink))

        drinks.append(drink)

        while True:
            order_drink = input('Would you lik to order another drink? (y/n) \n>')
            if order_drink == 'y':
                break
            elif order_drink == 'n':
                break

    print('Okay, so I have:')
    for drink in drinks:
        print(drink)

    name = input('\nCan I get your name please? \n> ')
    print('Thanks, {}! Your order will be ready shortly.'.format(name))


def get_drink_type():
    res = input('What type of drink would you like? \n[a] Brewed Coffee \n[b] Mocha \n[c] Latte \n> ')

    if res == 'a':
        return 'Brewed Coffee'
    elif res == 'b':
        return order_mocha()
    elif res == 'c':
        return order_latte()
    else:
        print_message()
        return get_drink_type()


# Define new functions here!


coffee_bot()
