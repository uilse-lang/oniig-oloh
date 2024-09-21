// function -> dahij ashiglah bolomjtoi kodnii tsugluulga
// define/uusgeh -> function funcName(){}
// argument/parametr-> func-iin zaaval avah utga
/*function hello(name,age){
    console.log("hello "+name);
    console.log("I am "+age+" years old");
}
// call/duudaj ajluulah
hello("Bat",16);
hello("Suvd",56);
//
function niilber(too1, too2){
    console.log(too1+too2)
}
niilber(10,6)
niilber(14,6)
function kvadrat(too1, too2){
    console.log(too1*too1)
    console.log(too2*too2)
}
kvadrat(2,3)
function nas(nas1, nas2){
    if(nas1>=18){
        console.log("nasand hursen")
    }else{
        console.log("nasand hureegv")
    }
    if(nas2>=18){
        console.log("nasand hursen")
    }else{
        console.log("nasand hureegv")
    }
}
nas(2000,120)
function too(too1){
    if(too1>=100){
        console.log(too1+10)
    }else{
        console.log(too1*10)
    }
}
too(90)
console.log(document);
var a = document.getElementsByTagName('h1')[0];
console.log(a);
// varname.style.stlyeName = "value" ;
a.style.color="red"
//varname.innertext="word";
a.innerText= " Hello world " ;
var b=document.getElementsByTagName('h1')[1];
console.log(b)
b.style.color="blue"
b.innerText="HI NIGGA"
var h2 = document.getElementsByTagName('h2')[0];
function click2(){
    h2.style.color="red";
    h2.innerText="HHHHHH";
}
var a=document.getElementsByTagName('h2')[0];
console.log(a)
function click2(){
    if(a>=18){
        a.innerText="Nasand hursen"
    }else{
        a.innerText="Nasand huregv"
    }
}
var input=document.getElementsByTagName('input')[0];
var p=document.getElementsByTagName('p')[0];
console.log(p);
console.log(input);
function findYear(){
    // .value -> input deer bichsen utga
    //alert(input.value);
    var year = 2024-input.value;
    console.log(2024-(input.value))
    p.innerText="Your birth year : " + year + ""
}*/
var input=document.getElementsByTagName('input')[1];
var p2=document.getElementsByTagName('p')[1];
console.log(p2)
console.log(input)
function Nasn(){
    if(input.value>=120){
        p2.innerText="Iim nas bh bolomjgv"
        p2.style.color="red"
    }else if(input.value>0){
        var year = 2024-input.value;
        p2.innerText="Your age:" +year+ "";
        p2.style.color="black"
    }else if(input.value<0){
        p2.innerText="ta toroogv bn"
        p2.style.color="yellow"
    }else if(input.value==""){
        p2.innerText="ta nasaa oruulna uu"
        p2.style.color="green"
    }
    var year2=10+input.value;
    alert(year2+ " ta 10n jiliin daraa")
}

