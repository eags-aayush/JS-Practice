const text = document.querySelector(".textarea");
const button = document.querySelector(".searchbtn");
const boxes = document.querySelectorAll(".box");
const para = document.querySelectorAll(".box p");
const textarea = document.querySelector(".textarea");

let output = null;
const bURL = "https://www.thecolorapi.com/scheme?hex=";

async function fetchPallete() {
    try {
        const select = document.querySelector(".mode").value;
        const response = await fetch(`${bURL}${text.value}&mode=${select}`);
        const data = await response.json();
        output = data.colors;
        
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = output[i].hex.value; 
            para[i].innerHTML = output[i].hex.value;
        }      
    } 
    catch (error) 
    {
        console.error("Oops, something went wrong!", error);
    }
}

button.addEventListener("click", fetchPallete);

textarea.addEventListener("click", () => {
    textarea.value = "";
});
