const BASE_URL = "https://norma.nomoreparties.space/api/";

const checkResponse = (res) => {
  return res.ok ? res.json() : 
  res.json().then((err) => Promise.reject(err));
};

const getApiData = () => {
  return request('ingredients')
}

function request(endpoint, settings) {
  return fetch(`${BASE_URL}${endpoint}`, settings)
    .then(checkResponse)
}
  
  export {getApiData}