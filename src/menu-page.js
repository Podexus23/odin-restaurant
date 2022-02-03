import {
  renderMainPage
} from './main-page.js'

let renderMenuPage = (function () {
  const allContentHolder = document.querySelector('.content');

  function createMenuBlock() {
    const menuBlock = renderMainPage().createBlock('section', 'menu-content');
    let dishNames = ['chewbakka', 'watermelon', 'breakfast', 'lunch'];

    dishNames.forEach((dish, index) => {
      menuBlock.append(createFoodBlock(dish, index))
    });

    allContentHolder.append(menuBlock);
  }

  function createFoodBlock(name, index) {
    const block = renderMainPage().createBlock('div', 'menu-block');

    block.append(renderMainPage().createBlock('img', 'menu-block-pic', {
      source: `../assets/pic${index+1}.jpg`
    }));
    block.append(renderMainPage().createBlock('h3', 'menu-block-name', {
      text: `${name.toUpperCase()}`
    }));
    return block
  }

  return {
    createMenuBlock
  }
})
export {
  renderMenuPage
}