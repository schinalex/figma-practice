

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

// function onFocus(){
//     console.log("focus")
// }
// function onChange(event){
//     console.log(event.target.value)
// }
// function onKeyUp(event){
//     let str = event.target.value;
//     if(event.code === "KeyW"){
//         console.log("forward");
//         // event.target.value = str.substr(0,str.length-1);
//         event.preventDefault();
//     }

//     console.log(event.target.value);
//     console.log(event);
// }
// function onFocusOut(){
//     console.log("focus out")
// }
// const input = document.getElementById("text");
// document.querySelectorAll("button").forEach(button => button.addEventListener("click", onClick))
// input.addEventListener("focus", onFocus);
// input.addEventListener("change", onChange);
// input.addEventListener("keypress", onKeyUp);
// input.addEventListener("focusout", onFocusOut)

let symbol = "X"
game = false
function checkwin(bord){
    for(let i = 0; i<3; i++){
        if(
            bord[0+i * 3] !== "" && bord[0+i * 3] ===   bord[1+i * 3] && bord[1+i * 3] === bord[2+i * 3] || 
            bord[0+i] !== "" && bord[0+i] ===   bord[3+i] && bord[3+i] === bord[6+i] || 
            bord[0] !== "" && bord[0] ===   bord[4] && bord[4] === bord[8]|| 
            bord[2] !== "" && bord[2] ===   bord[4] && bord[4] === bord[6]){
            console.log("a casitgat " + symbol)
            game = true
    }}
}

const buton = document.getElementById("but1")
buton.addEventListener("click",reset)
    



const boxes = document.querySelectorAll(".box")

boxes.forEach( box =>{box.addEventListener("click",event=>{
    console.log(event.target)
    
    if(!game && event.target.innerText  === "" ){
        event.target.innerText = (symbol)
        let bord = [...boxes].map(box => box.innerHTML)
        checkwin(bord)
        if (symbol === "X"){
            symbol = 'O'
        }else if (symbol === "O"){
            symbol = "X"
        }
        console.log(bord)
    }
        
    
})})
function reset() {
    game = false
    boxes.forEach(box => box.innerText = "")

}

