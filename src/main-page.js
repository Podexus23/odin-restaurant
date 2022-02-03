let renderMainPage = (function () {
  const allContentHolder = document.querySelector('.content');

  //build main blocks functions
  function createHeader() {
    let header = createBlock('header', 'main-header');
    let title = createBlock('h1', 'header-title', {
      text: 'This is restaurant',
    });

    header.append(title);
    allContentHolder.append(header);
  }

  function createNavigation() {
    let navigation = createBlock('nav', 'navigation');
    let buttonNames = ['Main', 'Menu', 'About Us'];
    buttonNames.forEach(button => {
      let navButton = createBlock('button', 'nav-button', {
        text: `${button}`
      })
      navigation.append(navButton);
    })
    allContentHolder.append(navigation)
  }

  function createMainInfo() {
    let mainInfo = createBlock('section', 'main-content');
    let container = createBlock('div', 'main-container', {
      data: ['name', 'main']
    });
    container.append(
      createBlock('h2', 'container-title', {
        text: 'Just a picture of food'
      })
    );
    container.append(
      createBlock('img', 'main-img', {
        source: '../assets/totoro.jpg'
      })
    );
    container.append(
      createBlock('p', 'container-description', {
        text: 'You can find more interesting things like this in our menu'
      })
    );
    mainInfo.append(container);
    allContentHolder.append(mainInfo)
  }

  //support functions
  function createBlock(tag, selector, props) {
    let block = document.createElement(tag);
    block.classList.add(selector);
    if (props) {
      let {
        text,
        source,
        data,
      } = props;
      if (text) block.textContent = text;
      if (source) block.src = source;
      if (data) block.dataset[data[0]] = data[1];
    }
    return block
  }

  function buildMainPage() {
    createHeader();
    createNavigation();
    createMainInfo();
  };

  return {
    buildMainPage,
    createMainInfo,
    createBlock
  };
})

export {
  renderMainPage
}