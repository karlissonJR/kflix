import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(dataVideos) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(dataVideos),
  })
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  create,
};
