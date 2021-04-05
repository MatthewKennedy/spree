/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

//= require spree/backend/global/notify/utils/notice_builder

class FlashAlert {
  constructor(type = 'info') {
    this.type = type
  }

  show (message) {
    const existingAlert = document.querySelector('.flash-alert')
    const notice = new NoticeBuilder()
    notice.build(this.type, message)

    if (existingAlert) this.dispose(existingAlert)

    const ajaxFlashNotfication = document.querySelector('.flash-alert')
    this.cycle(ajaxFlashNotfication)
  }

  cycle(element) {
    this.animateIn(element)
    element.addEventListener('animationend', function() {
      FlashAlert.dispose(element)
    })
  }

  animateIn (element) {
    element.classList.add('animate__animated', 'animate__bounceInUp')
  }

  static dispose (element) {
    element.classList.remove('animate__bounceInUp')
    element.classList.add('animate__fadeOutDownBig', 'animate__delay-3s')
    element.addEventListener('animationend', function() {
      element.remove()
    })
  }

  dispose () {
    const element = document.querySelector('.flash-alert')
    FlashAlert.dispose(element)
  }
}
