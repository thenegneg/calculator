// start truethy 
let tittle01="truethy"
console.log(tittle01);
let x;
if (x) {
  console.log("im fine ;D");
} else {
  console.log("im dead x_x");
}
let y = 10;
if (y) {
  console.log("im fine ;D");
} else {
  console.log("im dead x_x");
}
let z= 0;
if (z) {
  console.log("im fine ;D");
} else {
  console.log("im dead x_x");
}
let w= " ";
if (w) {
  console.log("im fine ;D");
} else {
  console.log("im dead x_x");
}
let a= "";
if (a) {
  console.log("im fine ;D");
} else {
  console.log("im dead x_x");
}
let s= null;
if (s) {
  console.log("im fine ;D");
} else {
  console.log("im dead x_x");
}
let c= false;
if (c) {
  console.log("im fine ;D");
} else {
  console.log("im dead x_x");
}

let line="-----------------------------------------------------------"
console.log(line);
// end truethy 

// start bloc-scope 
let tittle02="bloc-scope"
console.log(tittle02);

let q=100
{
    console.log(q);
    let fN="negneg"
    console.log(fN);
    {
        console.log(q);
        console.log(fN);
        let lN="rv"
        console.log(lN);
    }
    {
        console.log(q);
        console.log(fN);
        let O=200
        console.log(O);
        let sum=q+O
        console.log(sum);
    }
}

console.log(line);
// end block-scope 

// start operands 
let tittle03="operands"
console.log(tittle03);

let m=5
let n=10
let result=(m/n*2+n/m*4*(n-m)*2)*2/((m+n)*2/5)
console.log(result);

m+=n
console.log(m);
m-=n
console.log(m);
m*=n
console.log(m);
m/=n
console.log(m);
m%=n
console.log(m);
m**=n
console.log(m);

console.log(line);
// end operands 

// start comparison
let tittle04="comparison"
console.log(tittle04);

let result01= m>n
console.log(result01);
let result02= m<n
console.log(result02);
let result03= m==n
console.log(result03);
let mm=10
let nn="10"
let result04= mm!==nn
console.log(result04);
let result05= mm===nn
console.log(result05);

console.log(line);
// end comparison 

// start &&
let tittle05="&&"
console.log(tittle05);

let r=10
let e=15
let result000= r<e && r===10 && e===15
console.log(result000)
let result001= r>e && r===10 && e===15
console.log(result001)
let result002= r<e && r!==10 && e===15
console.log(result002)

console.log(line);
// end && 

// start or
let tittle06="or"
console.log(tittle06);

let rr=10
let ee=15
let result0000= r<e || r===10 || e===15
console.log(result0000)
let result0001= r>e || r===10 || e===15
console.log(result0001)
let result0002= r<e || r!==10 || e===15
console.log(result0002)
let result0003= r>e || r===5 || e===20
console.log(result0003)

console.log(line);
// end or 

// start not
let tittle07="not"
console.log(tittle07);

let aa=10
let bb=15
let result11= !(aa<bb || aa===10 || bb===15)
console.log(result11)
let result22= !(aa>bb || aa===5 || bb===20)
console.log(result22)
let result33= !((aa>bb && aa===5 && bb===20) || aa!=bb )
console.log(result33)

console.log(line);
// end not 

// start confirm
let tittle08="confirm"
console.log(tittle08);

let check=confirm("Are you sure you want to deleted the information")
if (check===true){
    console.log("ok x-x");
}else{
    console.log(";D");
}

console.log(line);
// end confirm 

// start condition
let tittle09="condition"
console.log(tittle09);

let age=+prompt("please tell me your age")
if (age >=18){
    console.log(`you are more than 18 and you can go to univercity`);
}else {
    console.log(`go to school`);
}


let month=+prompt("pleas type the number of mounth of the year")
if (month===1){
    console.log(`farvardin`);
}else if (month===2){
    console.log(`ordibehesht`);
}else if (month===3){
    console.log(`khordad`);
}else if (month===4){
    console.log(`tir`);
}else if (month===5){
    console.log(`mordad`);
}else if (month===6){
    console.log(`shahrivar`);
}else if (month===7){
    console.log(`mehr`);
}else if (month===8){
    console.log(`aban`);
}else if (month===9){
    console.log(`azar`);
}else if (month===10){
    console.log(`dey`);
}else if (month===11){
    console.log(`bahman`);
}else if (month===12){
    console.log(`esfand`);
}

console.log(line);
// end condition 


// start calculator
let tittle10="calculator"
console.log(tittle10);

let num1=document.querySelector("input#num1")
let num2=document.querySelector("input#num2")
let plus=document.querySelector("button#plus")
plus.addEventListener("click",function(){
    document.querySelector("p").innerHTML=Number(num1.value)+Number(num2.value)
})
let minus=document.querySelector("button#minus")
minus.addEventListener("click",function(){
    document.querySelector("p").innerHTML=Number(num1.value)-Number(num2.value)
})
let mul=document.querySelector("button#mul")
mul.addEventListener("click",function(){
    document.querySelector("p").innerHTML=Number(num1.value)*Number(num2.value)
})
let div=document.querySelector("button#div")
div.addEventListener("click",function(){
    document.querySelector("p").innerHTML=Number(num1.value)/Number(num2.value)
})

console.log(line);
// end calculator