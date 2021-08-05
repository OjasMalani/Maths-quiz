player1name= localStorage.getItem("player1 name");
player2name= localStorage.getItem("player2 name");

p1_score= 0;
p2_score= 0;

document.getElementById("p1name").innerHTML= player1name+":";
document.getElementById("p2name").innerHTML= player2name+":";

document.getElementById("p1score").innerHTML= p1_score;
document.getElementById("p2score").innerHTML= p2_score;

document.getElementById("player_ques").innerHTML="Question turn:"+player1name;
document.getElementById("player_ans").innerHTML= "Answer turn:"+player2name;


function send() {
    number1= document.getElementById("n1").value;
    number2= document.getElementById("n2").value;
    actual_ans= parseInt(number1) * parseInt(number2);
    
    question_number= "<h4>" + number1 + "x" + number2 + "</h4>";
    input_box= "<br>Answer : <input type='text' id= input_check_box'>";
    check_button= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_number + input_box + check_button;

    document.getElementById("output").innerHTML= row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}
ques_turn= "p1";
ans_turn= "p2";

function check() {
   get_ans=document.getElementById("input_check_box").value;

   if(get_ans==actual_ans) {
       if(ans_turn=="p1")
       {
       p1_score= p1_score+ 1;
       document.getElementById("p1score").innerHTML= p1_score;
   }
   else{
   p2_score= p2_score+ 1;
    document.getElementById("p2score").innerHTML= p2_score;
}
   }
if(ques_turn=="p1") {
    ques_turn= "p2"
    document.getElementById("player_ques").innerHTML= "Question turn-" + player2name;
}
else{
    ques_turn= "p1"
    document.getElementById("player_ques").innerHTML= "Question turn-" + player1name;  
}
if(ans_turn=="p1") {
    ans_turn= "p2"
    document.getElementById("player_ans").innerHTML= "Answer turn-" + player2name;
}
else{
    ans_turn= "p1"
    document.getElementById("player_ans").innerHTML= "Answer turn-" + player1name;  
}
document.getElementById("output").innerHTML="";
}