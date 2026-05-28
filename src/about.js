const aboutContent = document.createElement('div');
const aboutUs = document.createElement('p');
const wordsContainer = document.createElement('div');
const love = document.createElement('p');

aboutContent.id = "about-content";
aboutUs.id = "about-us";
aboutUs.innerText = "ABOUT US";

wordsContainer.innerHTML = `
                <p>Welcome to Naija Flavors, your window into the heart of Nigerian cuisine! Our mission is to share the rich, diverse, and flavorful dishes that make Nigeria the food capital of Africa.</p>
                <p>This platform was born from a deep love for our local meals — from smoky Suya by the roadside to spicy Jollof Rice that lights up every celebration. As Nigerian chefs and food enthusiasts, we believe our cuisine is more than just taste; it’s tradition, creativity, and community on a plate.</p>
                <p>Our goal is simple: to make the world fall in love with Nigerian food, one delicious bite at a time.</p>
`
love.innerHTML = `&#128420 from <a href="https://github.com/Nigeriaboy">Nigeriaboy</a>`

aboutContent.append(aboutUs, wordsContainer, love);

export default aboutContent;