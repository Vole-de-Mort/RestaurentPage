import { initializePage } from "./pageLoad";
import { checkmenu } from "./menu";
import { clearPage } from "./clear";
import { about } from "./about";
console.log("Athi ketbtha fel index.js ou el html index marbot bel main.js");


window.addEventListener('DOMContentLoaded', () => {
    initializePage();
    const btn1 = document.getElementById('homeBtn');
    const btn2 = document.getElementById("menubtn");
    const btn3 = document.getElementById("aboutBtn");
    btn1.addEventListener('click', () =>{
        clearPage();
        initializePage();
    });
    btn2.addEventListener("click", () => {
        clearPage();
        checkmenu();
    })
    btn3.addEventListener("click", () => {
        clearPage();
        about();
    });
});


