function startGame(difficulty){
    var correct_answer = Math.floor(Math.random() * 15);
    // Determine le nombre d'essais restants, suivant la difficulté choisie.
    switch(difficulty){
        case 'Facile':
            var essais_restants = 10;
            break;
        case 'Moyen':
            var essais_restants = 5;
            break;
        case'Difficile':
            var essais_restants = 3;  
            break;
    }
    //Par default, answer sera égale à 0
    var answer = 0;
    var default_message = 0;
    while(essais_restants>0){
        answer = prompt("Difficulte: " + difficulty + "\nNombres d'essais restants: " + essais_restants, 0);
        if (answer == null){
            break;
        }
        
        if (answer == '' || isNaN(answer)){
            console.log(1);
        }

        else if (answer == correct_answer){
            alert("Bravo, vous avez devine notre fameux nombre cache! Vous etes le meilleur!")
            break;
        }      

        else{0;
            essais_restants--;
        }
    }

    if (!essais_restants){
        alert("Il me semble que vous avez perdu...pas de chance!");
    }

}