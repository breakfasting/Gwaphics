// import cache from './unsplash_cache';

export const fetchUnsplashQuery = (page, query) => (
  $.ajax({
    method: 'GET',
    url: 'https://api.unsplash.com/search/photos',
    data: {
      query,
      per_page: 20,
      page,
    },
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
  })
);

export const fetchUnsplashPopular = (page) => (
  $.ajax({
    method: 'GET',
    url: 'https://api.unsplash.com/photos',
    data: {
      order_by: 'popular',
      per_page: 20,
      page,
    },
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
  })
);

// export const fetchUnsplashPopular = (page) => {
//   const promise = new Promise((resolve, reject) => {
//     resolve(cache);
//   });
//   return promise;
// };
