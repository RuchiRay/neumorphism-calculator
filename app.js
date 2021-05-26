// to change mode
let mode = document.getElementById("mode");
mode.addEventListener("click", () => {
  console.log("clicked");
  if (mode.classList.contains("light")) {
    document.documentElement.setAttribute("data-theme", "dark");
    mode.innerHTML = `<i class="fas fa-sun"></i>`;
    mode.classList.add("dark");
    mode.classList.remove("light");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    mode.innerHTML = `<i class="fas fa-moon"></i>`;
    mode.classList.add("light");
    mode.classList.remove("dark");
  }
});

function getHistory() {
  return document.getElementById("upper-value").innerHTML;
}
function printHistory(num) {
  document.getElementById("upper-value").innerHTML = num;
}
function getOutput() {
  return document.getElementById("lower-value").innerHTML;
}
function printOutput(num) {
  if (num == "") document.getElementById("lower-value").innerHTML = num;
  else
    document.getElementById("lower-value").innerHTML = getFormattedNumber(num);
}
function getFormattedNumber(num) {
  if (num == "-"){
      return ""
  } 
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}
console.log(reverseNumberFormat('34,5'));
console.log(getFormattedNumber('3456'));
let operator = document.getElementsByClassName("operator");
for (let i = 0;i<operator.length;i++) {
  operator[i].addEventListener("click", (e) => {
        console.log('id of this is ',operator[i].id);
    if (operator[i].id == "clear") {
      printHistory("");
      printOutput("");
    }
     else if (operator[i].id == "backspace") {
         console.log(getOutput());
      let output = reverseNumberFormat(getOutput()).toString();
     
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    }
    else{
        let output = getOutput()
        let history = getHistory();
        if(output==''&&history!=''){
            if(isNaN(history[history.length-1])){
                history = history.substr(0,history.length-1)
            }
        }
        if(output!=''||history!=''){
            output = output==''?output:reverseNumberFormat(output)
            history = history+output;
            if(operator[i].id=='='){
                let result = eval(history);
                printOutput(result);
                printHistory('')
            }
            else if(operator[i].id=='%'){
                let n = reverseNumberFormat(getOutput())
                let percent = n/100;
                printOutput(percent.toFixed(4));
            }
            else{
                history = history+operator[i].id;
                printHistory(history);
                printOutput('');
            }
        }
    }
  });
}
let number = document.getElementsByClassName('number')
for(let num of number){
    num.addEventListener('click',()=>{
        let output = reverseNumberFormat(getOutput());
            console.log('id of this number is',num.id);
            console.log( num.innerHTML);
        if(output!=NaN){
            output = output+num.id;
            printOutput(output)
        }
    })
}
