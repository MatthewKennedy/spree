/* global Cleave */

function initPaymentValidator () {
  if (document.querySelector('.cardNumber')) {
    document.querySelectorAll('.cardNumber').forEach(function (cardNumber) {
      // eslint-disable-next-line no-new
      new Cleave(cardNumber, {
        creditCard: true,
        onCreditCardTypeChanged: function (type) {
          $('.ccType').val(type)
        }
      })
    })
  }

  if (document.querySelector('.cardExpiry')) {
    document.querySelectorAll('.cardExpiry').forEach(function (cardExpiry) {
      // eslint-disable-next-line no-new
      new Cleave(cardExpiry, {
        date: true,
        datePattern: ['m', Spree.translations.card_expire_year_format]
      })
    })
  }

  if (document.querySelector('.cardCode')) {
    document.querySelectorAll('.cardCode').forEach(function (cardCode) {
      // eslint-disable-next-line no-new
      new Cleave(cardCode, {
        numericOnly: true,
        blocks: [3]
      })
    })
  }
}
