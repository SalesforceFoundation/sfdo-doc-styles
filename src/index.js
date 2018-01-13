require('./index.scss');

buildToc(document.querySelector('.example-toc'));

function buildToc(targetElement) {
  const headings = document.querySelectorAll('h2');
  const names = generateNames(headings);

  targetElement.innerHTML = renderToc(names);
}

function generateNames(elements) {

  return Array.from(elements).map((element) =>{
    let text = element.textContent;
    let name = text.toLowerCase().replace(' ', '-').replace(/![a-z]/g, '');

    element.setAttribute('id', name);

    return [text, name];
  });
}

function renderTocItem(pair) {
  return `<li><a title="${pair[0]}" href="#${pair[1]}">${pair[0]}</a>`;
}

function renderToc(names) {
  const items = names.map((pair) => {
    return renderTocItem(pair);
  });

  return `${items.join('')}`;
}
