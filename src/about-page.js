import {
  renderMainPage
} from './main-page.js'

let renderAboutPage = (function () {
  const allContentHolder = document.querySelector('.content');

  function createAboutBlock() {
    const aboutBlock = renderMainPage().createBlock('section', 'about-content');
    aboutBlock.append(renderMainPage().createBlock('h3', 'about-title', {
      text: 'My name is Podexus'
    }));
    aboutBlock.append(renderMainPage().createBlock('p', 'about-description', {
      text: `This is some Lorem Ipsum, a lot of it, you just can't see it, but it's here`
    }));
    allContentHolder.append(aboutBlock)
  }

  return {
    createAboutBlock
  }
})
export {
  renderAboutPage
}