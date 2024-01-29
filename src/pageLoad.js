import './style.css'

export function initializePage(){
    const content = document.getElementById('content');
    const container = document.createElement('div');
    const title = document.createElement('div');
    const aboutText = document.createElement('div');
    const btn = document.createElement('button');
    container.classList = "container";
    title.classList = "headtitle";
    title.textContent = "BEST ORGANIG COFFE";
    aboutText.classList = "textAbout";
    aboutText.textContent = "Indulge in the essence of organic coffee. Sourced from sustainable farms, our beans are cultivated without synthetic pesticides. Enjoy a cup that invigorates your senses while supporting ethical farming practices. Elevate your coffee experience sustainably.";
    btn.id = "byNow";
    btn.textContent = "Buy Now";
    content.classList.remove("layer");
    container.appendChild(title);
    container.appendChild(aboutText);
    aboutText.appendChild(btn);
    content.appendChild(container);
}