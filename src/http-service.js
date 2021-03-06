const API_URL = 'http://localhost:3000';

const HttpService = {
  sendRequest(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      let method = 'GET';

      xhr.open(method, `${API_URL}/api/${url}`, true);

      xhr.send();

      xhr.onload = () => {
        if (xhr.status !== 200) {
          reject(xhr.status + ': ' + xhr.statusText);
        } else {
          let data = JSON.parse(xhr.responseText);

          resolve(data);
        }
      };
    });
  }
};

export default HttpService;
