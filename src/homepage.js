export const homepageContent = document.createElement('div');
export const backgroundContent = `<img id="background-img" src="https://img.freepik.com/premium-photo/garri-pounded-yam-served-with-egusi-soup-ready-eat_539365-1070.jpg?semt=ais_hybrid&w=740&q=80" alt="">

    <p>WELCOME TO THE FLAVORS OF <span id="nigeria">NIGERIA!</span></p>`


function createParagraph (words){
    const paragraph = document.createElement('p');
    paragraph.innerText = words;
    homepageContent.id = 'homepage-content'
    homepageContent.appendChild(paragraph);
}

const paragraph1 = "Discover the soul of Nigeria through its food — bold, colorful, and full of life. Every dish here tells a story, from the spicy rhythm of Jollof Rice to the comforting warmth of Egusi Soup with pounded yam. Nigerian cuisine is a celebration of over 250 cultures, each adding its unique taste and tradition to our shared table."

const paragraph2 = "Savor the smoky aroma of Suya, the rich texture of Efo Riro, or the hearty delight of Ofada Rice with spicy stew. Our meals are more than food — they’re memories, laughter, and togetherness served on a plate."

const paragraph3 = "Whether you’re a traveler exploring African flavors or simply curious about our kitchen magic, you’re about to experience the true taste of Nigeria."

const paragraph4 = "Welcome to a world where every bite is a celebration — vibrant, authentic, and unforgettable."


createParagraph(paragraph1)
createParagraph(paragraph2)
createParagraph(paragraph3)
createParagraph(paragraph4)
