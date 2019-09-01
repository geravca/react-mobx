const API_KEY = 'AIzaSyCUCvIZSwZJmVG928Csm1y5cgWx3yFOuU4';


export function getList(keywords) {
  return apiCall(`search?maxResults=20&type=video&part=snippet&q=${keywords}`);
}

export function getCurrentVideo(videoId) {
  return apiCall(`videos?id=${videoId}&part=statistics,snippet`);
}

export function getVideoComments(videoId) {
  return apiCall(`commentThreads?part=snippet&videoId=${videoId}`);
}

function apiCall(url) {
  return fetch(`https://www.googleapis.com/youtube/v3/${url}&key=${API_KEY}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(function(data) {
      return data.json();
    })
    .catch((error) => {
      return error.json();
    });
}
