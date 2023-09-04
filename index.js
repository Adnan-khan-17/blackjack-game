// let count=0

// document.getElementById(count).innertext=9
// console.log(count)
// function increment()
// {
//     console.log("the button is clicked");
// }
// let lap1=10;
// let lap2=20;
// let lap3=30;

// function loglaptime()
// {
//     let  totallaptime=lap1+lap2+lap3;
//     console.log(totallaptime);
// }
// loglaptime()


// let lapscompleted=0;
// function inclap(){
// lapscompleted=lapscompleted+1;
// }
// inclap()
// inclap()
// inclap()
// console.log(lapscompleted);

let resetEl= document.getElementById("reset-el")
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count=0;
let entries=0;


function increment() {
count+=1;
countEl.textContent=count
}
function save()
{
    entries= '- ' +count+" "
    saveEl.textContent+=entries
    count=0;
    countEl.textContent=count
    
}
function reset()
{
    
    count=0
    countEl.textContent=count
    entries=0;
    saveEl.textContent="Previous entries:"
// saveEl.textContent+=0
}


// let username="per";
// console.log(username);

// let welcomeEl= document.getElementById("welcome-el")
// let name="xyz "
// let greeting="good morning"

// welcomeEl.innerText= greeting +" "+ name

// welcomeEl.innerText += "✋"