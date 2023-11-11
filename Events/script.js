

function onClick(event){
    console.log(event.target.innerText)
    
}

// const button = document.getElementById("btn");
// button.addEventListener("click", onClick);
// const button1 = document.getElementById("btn1");
// button1.addEventListener("click", onClick)

// const buttons = document.querySelectorAll("button")
// for(let i = 0; i < 10; i++){
//     buttons[i].addEventListener("click", onClick)
// }

function onFocus(){
    console.log("focus")
}
function onChange(event){
    console.log(event.target.value)
}
function onKeyUp(event){
    let str = event.target.value;
    if(event.code === "KeyW"){
        console.log("forward");
        // event.target.value = str.substr(0,str.length-1);
        event.preventDefault();
    }

    console.log(event.target.value);
    console.log(event);
}
function onFocusOut(){
    console.log("focus out")
}
const input = document.getElementById("text");
document.querySelectorAll("button").forEach(button => button.addEventListener("click", onClick))
input.addEventListener("focus", onFocus);
input.addEventListener("change", onChange);
input.addEventListener("keypress", onKeyUp);
input.addEventListener("focusout", onFocusOut)
