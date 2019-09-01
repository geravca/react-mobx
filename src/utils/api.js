/**** USE THIS KEY ONLY FOR THIS TESTING APP..., WILL BE DELETED IN THE NEXTS 5 DAYS ****/
const API_KEY = 'AIzaSyCUCvIZSwZJmVG928Csm1y5cgWx3yFOuU4';

/**
 * @description get video list from given keywords (search)
 * @param   {string} keywords
 * @returns {Promise<any>}
 */
export function getList(keywords) {
  return apiCall(`search?maxResults=20&type=video&part=snippet&q=${keywords}`);
}

/**
 * @description get video data (video data and statistics) per given video ID
 * @param   {string} videoId
 * @returns {Promise<any>}
 */
export function getCurrentVideo(videoId) {
  return apiCall(`videos?id=${videoId}&part=statistics,snippet`);
}

/**
 * @description get firsts 20 video comments from given video ID
 * @param   {string} videoId
 * @returns {Promise<any>}
 */
export function getVideoComments(videoId) {
  return apiCall(`commentThreads?part=snippet&videoId=${videoId}`);
}

/**
 * @description server centralized calls
 * @param   {string} url
 * @returns {Promise<any>}
 */
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
