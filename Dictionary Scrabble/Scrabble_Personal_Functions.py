# Score every word that is given
def score_word(word, letter_to_points):
    point_total = 0
    for char in word:
        char = char.upper()
        if letter_to_points.get(char):
            point_total += letter_to_points.get(char)
        else:
            point_total += 0
    return point_total


# Send each word for each player to score them
player_to_points = {}


def check_each_word(player_words, letter_to_points):
    for player in player_words.keys():
        player_points = 0
        for word in player_words[player]:
            player_points += score_word(word, letter_to_points)
        player_to_points[player] = player_points


def check_who_won(player_to_points, player1, player2):
    print(player1 + ' got ' + str(player_to_points[player1]) + ' points!')
    print(player2 + ' got ' + str(player_to_points[player2]) + ' points!\n')
    if player_to_points[player1] > player_to_points[player2]:
        print(player1 + ' Won with ' + str(player_to_points[player1]) + ' points!')
    elif player_to_points[player2] > player_to_points[player1]:
        print(player2 + ' Won with ' + str(player_to_points[player2]) + ' points!')
    elif player_to_points[player1] == player_to_points[player2]:
        print("It's a tie, both players got " + str(player_to_points[player1]) + ' points.')
