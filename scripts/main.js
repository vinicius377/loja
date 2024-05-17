import { loadCards } from './loadItems.js'
import { data } from '../data/info.js'
import { queryElement } from './utils/queryElement.js'
import './filter.js'

loadCards(data)

// Close modals when click on the back

const modals = queryElement.byClassName('modal_background')

Array.from(modals).forEach(modal => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('modal_active')
    }
  })
})

// Open filter drawer

queryElement.byId('filter_button').addEventListener('click', function() {
  const drawer = queryElement.byId('drawer');

  drawer.classList.add('modal_active')
})

