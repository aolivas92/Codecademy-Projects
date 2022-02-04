from Scrabble_Personal_Functions import *

# The letters we accept and all the points associated
letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
           "W", "X", "Y", "Z"]
points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 4, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10]

# Combine the letters and points to a dictionary and add an empty space
letter_to_points = {key: value for key, value in zip(letters, points)}
letter_to_points[" "] = 0

# Ask for your players name
player1 = input("Who is player one? \n>")
player2 = input('Who is player two? \n>')

# Make a dictionary for the players and their words
player_words = {player1: [], player2: []}

# ask for three words from each player and add each of them to a list
amount_of_words = 1
player1_list = []
player2_list = []
while amount_of_words < 4:
    player1_word = input(player1 + ' what is your ' + str(amount_of_words) + ' word. \n>')
    player2_word = input(player2 + ' what is your ' + str(amount_of_words) + ' word. \n>')
    player1_list.append(player1_word)
    player2_list.append(player2_word)
    amount_of_words += 1

# add the lists to the dictionary
player_words[player1] = player1_list
player_words[player2] = player2_list

# add up the points of each word for each player
check_each_word(player_words, letter_to_points)

# see who won
check_who_won(player_to_points, player1, player2)
