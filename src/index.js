import "./styles.css";
import "./menu.css";
import "./about.css";

import { homepageContent, backgroundContent } from "./homepage";
import menuContent from "./menu";
import aboutContent from "./about";

const content = document.querySelector('#content');
const background = document.querySelector('#background');
const home = document.querySelector('#home-btn');
const menu = document.querySelector('#menu-btn');
const about = document.querySelector('#about-btn');


// Show the homepage content when the page first load
document.addEventListener('DOMContentLoaded', () => {
    content.innerText = '';
    background.innerHTML = backgroundContent;
    content.appendChild(homepageContent);
})

home.addEventListener('click', () => {
    content.innerText = '';
    background.innerHTML = backgroundContent;
    background.style.display = 'flex';
    content.appendChild(homepageContent);
})

menu.addEventListener('click', () => {
    background.style.display = 'none';
    content.innerText = '';
    content.append(menuContent);
})

about.addEventListener('click', () => {
    background.style.display = 'none';
    content.innerText = '';
    content.append(aboutContent)
})
