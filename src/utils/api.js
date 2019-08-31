const API_KEY = 'AIzaSyApT0TWIpUvJCJVuPrrZ0MzG59uSkS3Zkk';

export const apiTypes = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
};

loadYoutubeApi();
export function loadYoutubeApi() {
  const script = document.createElement("script");
  script.src = "https://apis.google.com/js/client.js";

  script.onload = () => {
    gapi.load('client', () => {
      gapi.client.setApiKey(API_KEY);
      gapi.client.load('youtube', 'v3');
    });
  };
  document.body.appendChild(script);
}

export function apiCall(keywords) {
  return gapi.client.youtube.search.list({
    part: 'snippet',
    type: 'video',
    maxResults: 20,
    g: keywords
  });
}
