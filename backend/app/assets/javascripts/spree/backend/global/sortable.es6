/* eslint-disable no-undef */

document.addEventListener('DOMContentLoaded', function() {
  const sortableTableEl = '.sortable'

  if (!sortableTableEl) return

  document.querySelectorAll(sortableTableEl).forEach(function(elem) {
    const sortableTableBody = elem.querySelector('tbody')

    if (!sortableTableBody) return

    Sortable.create(sortableTableBody, {
      handle: '.move-handle',
      animation: 550,
      ghostClass: 'bg-light',
      dragClass: 'sortable-drag-v',
      easing: 'cubic-bezier(1, 0, 0, 1)',
      swapThreshold: 0.9,
      forceFallback: true,
      onEnd: function(evt) {
        const itemEl = evt.item
        const positions = { authenticity_token: AUTH_TOKEN }
        const url = $(itemEl).closest('table.sortable').data('sortable-link')

        sortData(positions, sortableTableBody)
        postUpdate(url, positions)
      }
    })

    function sortData (positions, sortableTableBody) {
      $.each($('tr', sortableTableBody), function(position, obj) {
        const reg = /spree_(\w+_?)+_(\d+)/
        const parts = reg.exec($(obj).prop('id'))

        if (parts) {
          positions[`positions[${parts[2]}]`] = position + 1
        }
      })
    }

    function postUpdate (url, positions) {
      showSpinner()
      fetch(url, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        method: 'POST',
        body: formatUrlEncodedParams(positions)
      })
    }
  })
})
