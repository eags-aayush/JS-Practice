let boxes = document.querySelectorAll(".box");
let rst = document.querySelector(".reset");

const winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//Winner
const winner = () => {
    for (let wc of winCombo) {
        let [x, y, z] = wc;
        let a = boxes[x].innerText;
        let b = boxes[y].innerText;
        let c = boxes[z].innerText;

        if(a && a===b && b===c){
            boxes[4].style.fontSize = "2rem";
            boxes[4].style.color = "#5c2008";
            if(turn)
                boxes[4].innerText = "O won!";
            else
                boxes[4].innerText = "X won!";
            boxes[x].style.backgroundColor = "#daf7dc";
            boxes[y].style.backgroundColor = "#daf7dc";
            boxes[z].style.backgroundColor = "#daf7dc";
            boxes.forEach(b => {
                b.disabled = true;
            })
        }
    }
};

//Draw
const draw = () => {
    boxes.forEach(b => {
        boxes[4].style.fontSize = "2rem";
        boxes[4].style.color = "#5c2008";
        boxes[4].innerText = "Draw!";
    });
}

//Game
let turn = true;
let count = 0;

boxes.forEach(b => {
        b.addEventListener("click", () => {
            if(turn){
                b.innerText="X";
                b.style.color = "red";
                b.disabled = true;
                turn = false;
            }   
            else{
                b.innerText="O";
                b.style.color = "#00ff88";
                b.disabled = true;
                turn = true;
            } 
            count++;
            console.log(count);
            if(count===9)
                draw();
            else    
            winner();

        });
    }
);

//Reset
const reset = () => {
    boxes.forEach(b => {
        b.innerText = "";
        b.style.backgroundColor = "#637be4";
        b.disabled = false;
    });
    boxes[4].style.fontSize = "5rem";
    turn = true;
    count=0;
}

rst.addEventListener("click", reset);
