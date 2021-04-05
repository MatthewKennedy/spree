/* eslint-disable no-unused-vars */

// A global polyfiller utility to replace jQuery's $ajax Content-Type
// default encoding for application/x-www-form-urlencoded
function formatUrlEncodedParams (params) {
  const encodedData = Object.keys(params).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&')

  return encodedData
}

function showSpinner () {
  const spinner = document.getElementById('progress');
  spinner.classList.add('show');
}

function hideSpinner () {
  const spinner = document.getElementById('progress');
  spinner.className = spinner.classList.remove('show');
}
