import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://edamam-recipe-search.p.rapidapi.com/search',
//   params: { q: 'chicken' },
//   headers: {
//     'x-rapidapi-key': '366f6310b8msh97db99a37209293p1ed4cfjsnebf42fb70bd8',
//     'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com'
//   }
// };

// const details = axios.request(options).then(function (response) {
//   console.log(response.data);
//   return response.data;
// }).catch(function (error) {
//   console.error(error);
// });
// console.log(details.then((res) => res))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
