//We will be creating a while loop that makes two people battle

//build a variable for hit points for player 1

score1 = 0
//build a variable for hit points for player 2
score2 = 0

//In a while loop
while (true) {
    player1 = 100
    player2 = 100

    while (player1 > 0 && player2 > 0) {
    //generate a random number for player 1
    let attack1 = Math.floor(Math.random()*40)
    //generate a random number for player 2
    let attack2 = Math.floor(Math.random()*40)
    //subtract the random number from player 1 from player 2's hit points.
    window.alert("Player 1 damages :" + attack1)
    player2 -= attack1
    window.alert("Player 2 HP :" + player2)
        //if player 2 hit points is less than or equal to zero.
        if (player2 <=0) {
            //player 1 wins
            window.alert("Player 1 wins!!")
            score1 += 1
            window.alert("Player 1 score :" + score1)
            window.alert("Player 2 score :" + score2)
            //break
            break
        }
            
        //subtract the random number from player 2 from player 1's hit points
            window.alert("Player 2 damages :" + attack2)
            player1 -= attack2
            window.alert("Player 1 HP :" + player1)
        //if player 1 hit points is less than or equal to zero.
        if (player1 <=0) {
            //player2  wins
            window.alert("Player 2 wins!!")
            score2 += 1
            window.alert("Player 2 score :" + score2 )
            window.alert("Player 1 score :" + score1 )
            //break
            break
        }
    }
}