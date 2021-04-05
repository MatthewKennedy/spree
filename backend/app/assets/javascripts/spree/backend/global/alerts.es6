/* eslint-disable no-unused-vars */

document.addEventListener('DOMContentLoaded', function() {
  // Triger the flash notice cycle if a '.flash-alert' element
  // is present in the DOM when page is loaded.
  const element = document.querySelector('.flash-alert')

  if (element) { handleAlert(element) }
})

// Triggers alerts when requested by javascript.
function show_flash(type = 'success', message = 'Loading...') {
  const cleanMessage = DOMPurify.sanitize(message)
  const existingAlert = document.querySelector('.flash-alert')

  if (existingAlert) {
    existingAlert.remove()
  }

  const flashDiv = $('.alert-' + type)
  if (flashDiv.length === 0) {
    const flashDiv = $('<div class="d-flex justify-content-center position-fixed flash-alert">' +
      '<div class="alert alert-' + type + ' mx-2">' + cleanMessage + '</div></div>')

    $('body').append(flashDiv)

    const ajaxFlashNotfication = document.querySelector('.flash-alert')
    handleAlert(ajaxFlashNotfication)
  }
}

function handleAlert(element) {
  element.classList.add('animate__animated', 'animate__bounceInUp')
  element.addEventListener('animationend', function() {
    element.classList.remove('animate__bounceInUp')
    element.classList.add('animate__fadeOutDownBig', 'animate__delay-3s')
  })
}
