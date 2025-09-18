let score = prompt("Enter your score");
let grade;
if (score <= 100 && score >= 80){
    grade = "A";
}else if (score < 80 && score >= 70){
    grade = "B";
}else if (score < 70 && score >= 60){
    grade = "C";
}else if (score < 60 && score >= 50){
    grade = "D";
}else if (score < 50 && score >= 0){
    grade = "Fail";
}else{
    grade = "Enter number between 0 to 100";
}
console.log( "Grade " + grade);