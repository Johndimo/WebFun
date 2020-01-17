var answer;
var score = 0;

function checkFunction(){
    var answer2 = document.getElementById("answer").value;
        if(answer2 == answer){
            document.getElementById("answer").value = "";
            document.getElementById("game").innerHTML = createEquation();
            score++;
            document.getElementById("score").innerHTML = score;

    
        }else{
            window.location =   "lose.html";
        }

    
   

}

function displayScore(){
    return score;
}



function createEquation(){
    var sign = ['+' , '-', '*'];
    var rand = Math.floor((Math.random() * 3));
    if(sign[rand] == '*'){
        var rand2 = Math.floor((Math.random() * 10) + 1);
        var rand3 = Math.floor((Math.random() * 10) + 1);
        answer = rand2*rand3;
        sign1 = '*';

        return rand2 + " * " + rand3;

    }else{

        var rand2 = Math.floor((Math.random() * 100) + 1);
        var rand3 = Math.floor((Math.random() * 100) + 1);
    
        if(sign[rand] == '+'){
            answer = rand2 + rand3;
        }else{
            answer = rand2 - rand3;
        }
        return rand2 + " " + sign[rand] + " " + rand3;

    }
}

