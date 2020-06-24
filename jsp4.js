function dis(val) {
    document.getElementById("result").value += val;// to display in calculator
}
function clears() {
    document.getElementById("result").value = " ";//to clear data when C button is pressed
}
function solve() {
    let x = document.getElementById("result").value;//we get the input from user and is assigned in x
    let y = eval(x);//the input is evaluated
    document.getElementById("result").value = y;//the soln is printed in screen
}