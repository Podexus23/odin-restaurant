import {
  renderMainPage,
} from './main-page';
import {
  renderMenuPage,
} from './menu-page';
import {
  renderAboutPage,
} from './about-page';

import './style.css';

renderMainPage().buildMainPage();

const nav = document.querySelector('.navigation');
nav.addEventListener('click', changeContent)

function changeContent(event) {
  if (event.target.tagName != 'BUTTON') return;
  let buttonName = event.target.textContent;
  if (buttonName == 'Main') {
    cleanContentPart();
    renderMainPage().createMainInfo();
  }
  if (buttonName == 'Menu') {
    cleanContentPart();
    renderMenuPage().createMenuBlock()
  }
  if (buttonName == 'About Us') {
    cleanContentPart();
    renderAboutPage().createAboutBlock()
  }
}

function cleanContentPart() {
  let contentPart = document.querySelector('.main-content') ||
    document.querySelector('.menu-content') ||
    document.querySelector('.about-content');
  if (contentPart) contentPart.remove();
}