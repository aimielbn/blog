import * as bootstrap from 'bootstrap';
import './style.scss';
import { data } from './data';
import { nav } from './nav';
import Fuse from 'fuse.js';
const listeArticles = (articles) => {
  let html = '';
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    let articleCard = `
      <a class="card col-5 col-md-3" href="/personne/?id=${article.id}">
        <img src="${article.id}" class="card-img-top" alt="avatar de ${article.titre}">
        <div class="card-body">
          <h5 class="card-title">${article.titre}</h5>
        </div>
      </a>
    `;
    html += articleCard;
  }
  return html;
};
let articles = data.sort();
document.querySelector('#app').innerHTML = `
  <main>
    ${nav}
    <div class="container-fluid my-4">
      <input type="text" id="search" class="d-flex  mx-auto mb-3" />
      <div id="liste" class="d-flex gap-3 flex-wrap justify-content-center">
        ${listeArticles(articles)}
      </div>
    </div>
  </main>
`;
const inputSearch = document.querySelector('#search');
inputSearch.addEventListener('input', function (event) {
  const recherche = event.target.value;
  console.log(recherche);
  articles = data.sort();
  const fuse = new Fuse(articles, {
    keys: [
      'titre',
      'contenu',
    ],
  });
  const listeFinale = fuse.search(recherche).map((p) => p.item);
  console.log(listeFinale);
  document.querySelector('#liste').innerHTML = `
        ${listeArticles(recherche.length === 0 ? data.sort():listeFinale)}
`;
});
