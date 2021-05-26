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

function getValues() {
  return document.getElementById("values").innerHTML;
}
function printValues(num) {
  document.getElementById("values").innerHTML = num;
}

function getFormattedNumber(num) {
  let num1 = ''
  let num2 = ''
  let flag = false;
  let toBeRemoved = '';
  let value = ''
  for(let i=0;i<num.length;i++){
    let char = num.charAt(i);
    
    if(char == '+'||char == '-'||char == '*'||char == '/'){
      flag = true;
      toBeRemoved = char;
    }
    if(flag==false){
      num1 = num1+char
    }
    else{
      num2 = num2+char
    }
  }
  if(flag==true){
    num2 = num2.replace(toBeRemoved,'')
    console.log('number 1 is',num1);
    console.log('number 2 is',num2);
    let n1 = Number(num1);
    let n2 = Number(num2);
    let value1 = n1.toLocaleString("en");
    let value2 = n2.toLocaleString("en");
    console.log('after changing into local string',value1);
    console.log('after changing into local string',value2);
     value = value1+toBeRemoved+value2
    console.log(value);
    return value;
  }
  else{
   let n = Number(num)
   value = n.toLocaleString('en')
   return value;
  }
  
}
function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}
let values = '';
let operator = document.getElementsByClassName("operator");
console.log(operator);
for (let i = 0;i<operator.length;i++) {
  operator[i].addEventListener("click", (e) => {
    console.log('the id is',operator[i].id);
    if(operator[i].id == 'clear'){
      values = ""
      printValues("");
    }
    else if(operator[i].id == 'backspace'){
       let s = getValues()
       let str = reverseNumberFormat(s) ;
      str = str.toString()
      str = str.substr(0,str.length-1);
      values = str
      printValues(str)
    }
    else if(operator[i].id == '%'){
      console.log('you are percent id');
      let n = reverseNumberFormat(getValues())
      let percent = n/100;
      printValues(percent.toFixed(4))
    }
    else{
      if(operator[i].id!='='){
        console.log(operator[i].id);
       values = values+operator[i].id
       printValues(values)
         
      }
      else{
        let result = eval(values);
         if(result.length>14)
         {
           result = Number(result);
           result = result.toFixed(4);
           result = result.toString();
         }
        printValues(getFormattedNumber(result))
      }
    }
    
  }
  )}      
    
let number = document.getElementsByClassName('number')
for(let num of number){
  num.addEventListener('click',()=>{
    values = values+num.id;
    console.log(values);
    printValues(getFormattedNumber(values));
  })
}
    
