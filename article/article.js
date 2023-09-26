import * as bootstrap from 'bootstrap';
import '../style.scss';
import { data } from '../data';
import { nav } from '../nav';

const detailsArticle = () => {
  // récupération des paramètres GET de l'url
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const articleId = urlParams.get('id') ?? 1;
  console.log(articleId);

  // on cherche l'article qui possède l'id trouvé dans l'url
  const article = data.find((article) => {
    return article.id === Number.parseInt(articleId);
  });
  console.log(article);

  return `
      <div class="card col col-sm-10 col-md-8 col-xl-6 mx-auto">
        <img src="${article.avatar}" class="card-img-top" alt="avatar de ${article.titre} ${article.contenu}">
        <div class="card-body">
          <h5 class="card-title">${article.titre} ${article.contenu}</h5>
        </div>
      </div>
    `;
};

document.querySelector('#app').innerHTML = `
  <main>
    ${nav}

    <div class="container-fluid my-4">
      ${detailsArticle()}
    </div>
  </main>
`;
