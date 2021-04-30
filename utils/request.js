const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
console.log(API_KEY);

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchAnimatedMovies: {
    title: "Animated",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchDramaMovies: {
    title: "Drama",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  },
  fetchDocumentaryMovies: {
    title: "Documentary",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchFamilyMovies: {
    title: "Family",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  },
  fetchScifiMovies: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
};

// {
//   "genres":
//   [
//   {"id":12,"name":"Adventure"},
//   {"id":14,"name":"Fantasy"},
//   {"id":16,"name":"Animation"},
//   {"id":18,"name":"Drama"},
//   {"id":27,"name":"Horror"},
//   {"id":28,"name":"Action"},
//   {"id":35,"name":"Comedy"},
//   {"id":37,"name":"Western"}
//   {"id":36,"name":"History"},
//   {"id":53,"name":"Thriller"},
//   {"id":80,"name":"Crime"},
//   {"id":99,"name":"Documentary"},
//   {"id":878,"name":"Science Fiction"},
//   {"id":9648,"name":"Mystery"},
//   {"id":10402,"name":"Music"},
//   {"id":10749,"name":"Romance"},
//   {"id":10751,"name":"Family"},
//   {"id":10752,"name":"War"},
//   {"id":10770,"name":"TV Movie"},
//   ]
//   }
