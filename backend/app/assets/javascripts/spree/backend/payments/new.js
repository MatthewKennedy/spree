/* global Cleave */

$(document).ready(function () {
  if ($('#new_payment').length) {
    /* eslint-disable no-new */
    new Cleave('.cardNumber', {
      creditCard: true,
      onCreditCardTypeChanged: function (type) {
        $('.ccType').val(type)
      }
    })
    /* eslint-disable no-new */
    new Cleave('.cardExpiry', {
      date: true,
      datePattern: ['m', 'Y']
    })
    /* eslint-disable no-new */
    new Cleave('.cardCode', {
      numericOnly: true,
      blocks: [3]
    })
  }
})
