export const USER_TOKEN = 'x-access';
export const apiTypes = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
};

export function apiCall(url, type = apiTypes.GET, body = null, useAuth = false) {
  const headers = {
    'Content-Type': 'application/json'
  };
  if(useAuth){
    headers[USER_TOKEN] = JSON.parse(localStorage.getItem(USER_TOKEN));
  }

  return fetch(url, {
    method: type,
    credentials: 'include',
    headers: headers,
    body: (body) ? JSON.stringify(body) : body
  })
    .then(function(data) {
      return data.json();
    })
    .catch((error) => {
      return error.json();
    });
}
