import { queryElement } from './utils/queryElement.js'
import { data } from '../data/info.js'
import { loadCards } from './loadItems.js'
// Button to close drawer

queryElement.byId('filter_close').addEventListener('click', () => {
  const drawer = queryElement.byId('drawer')

  drawer.classList.remove('modal_active')
})

const filters = []
function filterNewItems() {
  if (!filters.length) {
    loadCards(data)
    return
  }
  const newData = data.filter(item => item.tags.some(genere => filters.includes(genere)))
  loadCards(newData)
}

const filterBox = queryElement.byId('filter_box')
Array.from(filterBox.getElementsByTagName('input')).forEach(input => {
  input.addEventListener('change', e => {
    e.preventDefault()
    e.stopPropagation()
    const value = input.value;
    const checked = input.checked
    if (checked) {
      filters.push(value)
    } else {
      filters.splice(filters.indexOf(value), 1)
    }
    filterNewItems()
  })
})

