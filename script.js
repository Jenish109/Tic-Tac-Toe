let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player O

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {

    if (turnO) {
      //playerO
      box.innerHTML = "O";
      turnO = false;

    } else {
      //PlayerX
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled=true; 

    checkWinner();
  });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}


const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}
const showWinner = (winner) => {
    msg.innerHTML =    `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winPattern){
       
            let pois1Val = boxes[pattern[0]].innerHTML;
            let pois2Val = boxes[pattern[1]].innerHTML; 
            let pois3Val = boxes[pattern[2]].innerHTML;

            if(pois1Val !="" && pois2Val !="" && pois3Val != ""){
                if(pois1Val === pois2Val && pois2Val===pois3Val)
                {
                    showWinner(pois1Val);
                }
            }
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);