  const settings = {
    baseUrl: 'https://norma.nomoreparties.space/api/ingredients',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const getApiData = () => {
    return fetch(`${settings.baseUrl}`, {
      method: 'GET',
      headers: settings.headers,
    })
      .then(checkResponse)
      .catch((err) => {
        console.log(err);
      });
  }

  function checkResponse(res) { 
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  
  export {getApiData}