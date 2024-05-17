import { openDialog } from '../utils/openDialog.js'
export class Card {
  component = '';

  /**
   * @param {{
   * img: string,
   * size: string
   * value: number,
   * id: number,
   * saled: boolean
   * }} item
   * @return string
  */ 
  constructor(item) {
    const value = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL'}).format(item.value)
    const component = `
      <div class="container">
        <span class="id"">#${item.id}</span>
        ${this.#imageCompoment(item.img)}
        <div class="item_info">
          <span class="item_info-value">${item.saled ? '--' : value}</span>
          <div class="item_info-size">
            ${item.saled ? '--' : item.size}
          </div>
        </div>
        ${this.#buttonComponent(item.id, item.saled)}
      </div>
    `

    this.component = component.replaceAll('class="', 'class="card ');
  }

  #imageCompoment(image) {
    return `
      <div class="image_grid" >
        <img src="${image}" alt="foto da roupa"/>
      </div>
    `
  }

  #buttonComponent(id, saled) {
    if (saled) {
      return `
        <button disabled class="button buy_button"> VENDIDO </button> 
      `
    }
    return `
        <button data-id=${id} class="button buy_button"> COMPRAR </button> 
      `
  }
}
