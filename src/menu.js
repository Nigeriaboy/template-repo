const menuContainer = document.createElement('div');
const menuParagraph = document.createElement('p');
const foodsContainer = document.createElement('div');

menuContainer.id = 'menu-container';
menuParagraph.innerHTML = 'NAIJA <span>MENU</span>';
foodsContainer.id = 'foods';

function createFood(img, alt,food,price){
    const div = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imgElement = document.createElement('img');
    const paragraph = document.createElement('p');

    imgContainer.className = 'img-container';
    imgElement.src = `${img}`;
    imgElement.alt =`${alt}`;
    imgContainer.append(imgElement);

    paragraph.innerHTML = `${food} / <span>N${price}</span>`;

    div.append(imgContainer, paragraph);
    return div;
}

foodsContainer.append(createFood("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Jollof_Rice_with_Stew.jpg/960px-Jollof_Rice_with_Stew.jpg", "Jollof_Rice_with_Stew", "Jollof Rice", "3,000"));
foodsContainer.append(createFood("https://blessinglicious.ca/wp-content/uploads/2022/09/poundo-and-egusi-soup.jpg", "egusi and pounded yam", "Egusi & Pounded Yam", "2,500"));
foodsContainer.append(createFood("https://sisijemimah.com/wp-content/uploads/2015/07/ogbono-2-1024x707.jpg", "Ogbono Soup", "Ogbono Soup", "1,000"));
foodsContainer.append(createFood("https://deychop.com/wp-content/uploads/2023/12/Okra-Vegetable-Soup.jpg", "Okra Soup", "Okra Soup", "1,000"));
foodsContainer.append(createFood("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_CgxKKBNSrxZoV2hIF58o-HpFC30SdgjTg&s", "Amala and Ewedu", "Amala & Ewedu", "1,500"));
foodsContainer.append(createFood("https://thumbs.dreamstime.com/b/street-foods-lagos-nigeria-suya-tray-street-foods-lagos-nigeria-suya-usually-beef-fillet-skewer-roasted-147944294.jpg?w=768", "Suya", "Suya", "2,000"));

menuContainer.append(menuParagraph, foodsContainer);

export default menuContainer;


