import { Card } from './components/card.js'
import { ButtonBuy } from './components/button-buy.js'
import { openDialog } from './utils/openDialog.js';
import { queryElement } from './utils/queryElement.js'

/**
 * @typedef {Object} Item
 * @property {string} img
 * @property {string} size
 * @property {number} value
 * @property {number} id
 * @property {boolean} saled
 * */

/**
 * @param {Item[]} list
 * */
export function loadCards(list = []) {
  const container = queryElement.byId('items_grid')

  /**
   * @param {Item} item
   */
  const cardsString = list.sort((a, b) => a.saled - b.saled).reduce((acc, item) => {
    const card = new Card(item)

    acc += card.component;

    return acc
  }, '');

  container.innerHTML = cardsString;
  loadEvents()
}

function loadEvents() {
  const cardsImage = Array.from(queryElement.byClassName('image_grid'));

  cardsImage.forEach(card => {
    const image = card.getElementsByTagName('img')[0]
    const element = `
      <div class="card image_expanded">
        <img alt="imagem expandida" src="${image.src}"
      <div>
    `

    image.addEventListener('click', () => {
      openDialog(element)
    })
  })

  const buttons = Array.from(queryElement.byClassName('buy_button'))
  buttons.forEach(button => {
      const id = button.dataset.id

      button.addEventListener('click', () => {
        const element = new ButtonBuy(id).component
        openDialog(element)
      })
  })
 }

