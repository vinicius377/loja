export class ButtonBuy {
    component = '' 
    constructor(id){
      const element = `
        <div class="order_info">
        <ul>
          <li>
            Mucambo-CE, 62170-000, Rua Vicente Gomes, 284
          <li>
            Só entregamos na cidade de Mucambo
          </li>
        </ul>
          ${this.#button(id)}
        </div>
      `

      this.component = element.replaceAll('class="', 'class="card ');
    }

    #button(id) {
      const link = `https://api.whatsapp.com/send?phone=5588992647992&text=Ol%C3%A1%2C%20fiquei%20interessado(a)%20na%20pe%C3%A7a%20${id}.`
      return `
        <button>
          <a href="${link}" target="_blank">
            <i class="fa-brands fa-whatsapp"></i>
            WhatsApp <spon style="font-size: 12px">(89) 9264-7992</span>
          </a>
        </button>`
    }
}
