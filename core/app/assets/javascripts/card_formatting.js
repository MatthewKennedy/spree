/* global Cleave */

/* eslint-disable no-unused-vars */
function formatAllCardInputFields () {
  formatCardnumber()
  formatCardExpiry()
  formatCardCode()
}

function formatCardnumber () {
  if (!document.querySelector('.cardNumber')) return
  document.querySelectorAll('.cardNumber').forEach(function (cardNumber) {
    /* eslint-disable no-new */
    new Cleave(cardNumber, {
      creditCard: true,
      onCreditCardTypeChanged: function (type) {
        $('.ccType').val(type)
        showCardType(cardNumber, type)
      }
    })
  })
}

var selectedCardIcon = null

function showCardType (cardNumber, type) {
  var parent = cardNumber.closest('.cardIconParent')

  if (parent) {
    if (selectedCardIcon) {
      selectedCardIcon.classList.remove('active')
    }
    selectedCardIcon = parent.querySelector('.icon-' + type)
    if (selectedCardIcon) {
      selectedCardIcon.classList.add('active')
    }
  }
}

function formatCardExpiry () {
  if (document.querySelector('.cardExpiry')) {
    document.querySelectorAll('.cardExpiry').forEach(function (cardExpiry) {
      /* eslint-disable no-new */
      new Cleave(cardExpiry, {
        date: true,
        datePattern: ['m', Spree.translations.card_expire_year_format]
      })
    })
  }
}

function formatCardCode () {
  if (document.querySelector('.cardCode')) {
    document.querySelectorAll('.cardCode').forEach(function (cardCode) {
      /* eslint-disable no-new */
      new Cleave(cardCode, {
        numericOnly: true,
        blocks: [3]
      })
    })
  }
}
