var score = 0;
function update1(){
    score=score+1;
    document.getElementById("div1").innerHTML="Score:"+score;
}
function save(){
    localStorage.setItem("score",score);
}
function next_page(){
    window.location="activity2.html";
}