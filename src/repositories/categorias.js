import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getCategories(url) {
  return fetch(url)
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAll() {
  return getCategories(URL_CATEGORIES);
}

function getAllWithVideos() {
  return getCategories(`${URL_CATEGORIES}?_embed=videos`);
}

export default {
  getAllWithVideos,
  getAll,
};
