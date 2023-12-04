// // let a=10
// // let b = 5.6
// // let name = " my name is Karina"
// // let car= false
// // let c = a==10
// // console.log(c)
// // if(c){
// //  console.log("it works")
// // // }
// //  let login=prompt("Write your login")
// //  let password=prompt("write your password")
// //  if(login=="karush" && password=="2003"){
// //   console.log("you entered in your first account")
// //  }
// //  else if(login=="karush" && password=="2003"){
// //     console.log("you entered in your second account")
// //  }
// //  else if(login=="30"&& password=="32"){
// //     console.log("you entered in your third account")
// //  }
// //  else{
// //     console.log("you didn't entered in your account")
// //  }

// // for ( let step = 0; step <= 100; step++) {
// //   console.log('it works '+step)
// // }

// // function favoritefunction(a){
// //     for ( let step = 0; step <= 100; step++) {
// //            console.log(a)
// //         }
// // }



// // favoritefunction('it works')
// // favoritefunction('life')
// // favoritefunction('it didnt work')
// // let a=document.getElementById("header")
// // a.innerHTML="<s>13</s>"
// // console.log(a)
// // console.log(a.textContent)
// // a.style.color="red"
// // a.style.fontSize="30px"
// // a.style.backgroundColor="green"
// // document.getElementById("button").onclick=function(){
// //     console.log("it's a click event")
// // }
// // document.getElementById("button").onmousemove=function(){
// //     console.log("on mouse move event")
// // // }
// // let firstname="karina";
// // let lastname="shyian";
// // let middlename="mikhailivna";
// // // let name=firstname+lastname+middlename;
// // let name = ["karina","shyian","mikhailivna"];
// // // console.log(name[0]);
// //let name={firstname:"karina",lastname:"shyian",middlename:"mikhailivna"};
// // console.log(name.firstname)
let relatives=[
    {
        firstname:"Suzan",
        lastname:"Gutsu",
        age:32
    },
    {
        firstname:"Lisa",
        lastname:"Orlova",
        age:23
    },
    {
        firstname:"Dana",
        lastname:"Gutsu",
        age:4
    },
    {
        firstname:"Marina",
        lastname:"Savchuk",
        age:34
    },
    {
        firstname:"Diana",
        lastname:"Ivasuk",
        age:19
    }
]
for( let i=0; i<relatives.length; i++){
console.log (relatives[i]);
}
for(let j of relatives){
    console.log(j)
}

// for(let i=0; i<relatives.length; i++){
//     console.log(relatives[i]);
//     document.getElementById("relatives").innerHTML+="<li><b>"+relatives[i].firstname+"</b> <i>"+relatives[i].lastname+"</i> <u>"+relatives[i].age+"</u></li>";
    
// // }
// document.getElementById("mybutton");
let links = document.querySelectorAll('a[href^="#"]');
console.log (links)
for (let link of links){
    link.onclick = function (e) {
        e.preventDefault();
        let block=link.getAttribute('href');
        console.log(block)
        document.querySelector(block).scrollIntoView({
            behavior: 'smooth'
        });
    };
}