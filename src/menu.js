import './style.css'

export function checkmenu(){
    const content = document.getElementById('content');
    content.classList.add('layer');
    const menuContainer = document.createElement('div');

    const card1 = document.createElement('div');
    const card2 = document.createElement('div');
    const card3 = document.createElement('div');
    const card4 = document.createElement('div');
    const card5 = document.createElement('div');
    const card6 = document.createElement('div');

    const im1 = document.createElement('div');
    const im2 = document.createElement('div');
    const im3 = document.createElement('div');
    const im4 = document.createElement('div');
    const im5 = document.createElement('div');
    const im6 = document.createElement('div');

    const price1 = document.createElement("div");
    const price2 = document.createElement("div");
    const price3 = document.createElement("div");
    const price4 = document.createElement("div");
    const price5 = document.createElement("div");
    const price6 = document.createElement("div");

    const text1 = document.createElement('div');
    const text2 = document.createElement('div');
    const text3 = document.createElement('div');
    const text4 = document.createElement('div');
    const text5 = document.createElement('div');
    const text6 = document.createElement('div');

    im1.classList = "image1 image";
    im2.classList = "image2 image";
    im3.classList = "image3 image";
    im4.classList = "image4 image";
    im5.classList = "image5 image";
    im6.classList = "image6 image";

    text1.textContent = 'Americano Awakening';
    text2.textContent = 'Espresso Express';
    text3.textContent = 'Latte Luxe';
    text4.textContent = "Cappuccino Comfort";
    text5.textContent = 'Mocha Magic';
    text6.textContent = "Macchiato Marvel coffee";
    price1.textContent = '7.0$';
    price2.textContent = '9.5$';
    price3.textContent = '13$';
    price4.textContent = '8.6$';
    price5.textContent = '15$';
    price6.textContent = '11.5$';

    price1.classList = "priceTag";
    price2.classList = "priceTag";
    price3.classList = "priceTag";
    price4.classList = "priceTag";
    price5.classList = "priceTag";
    price6.classList = "priceTag";
    
    card1.classList = "card";
    card2.classList = "card";
    card3.classList = "card";
    card4.classList = "card";
    card5.classList = "card";
    card6.classList = "card";
    menuContainer.classList = "menuContainer"; /* athi li bech ta5ou display grid ou kol chy bch ybda faha */

    card1.appendChild(im1);
    card2.appendChild(im2);
    card3.appendChild(im3);
    card4.appendChild(im4);
    card5.appendChild(im5);
    card6.appendChild(im6);

    card1.appendChild(text1); 
    card2.appendChild(text2);
    card3.appendChild(text3);
    card4.appendChild(text4);
    card5.appendChild(text5);
    card6.appendChild(text6);
    
    card1.appendChild(price1);          /*  */
    card2.appendChild(price2);
    card3.appendChild(price3);
    card4.appendChild(price4);
    card5.appendChild(price5);
    card6.appendChild(price6);

    menuContainer.appendChild(card1);
    menuContainer.appendChild(card2);
    menuContainer.appendChild(card3);
    menuContainer.appendChild(card4);
    menuContainer.appendChild(card5);
    menuContainer.appendChild(card6);

    content.appendChild(menuContainer);
}